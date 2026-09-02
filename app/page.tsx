"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { supabase } from "../lib/supabase";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentBird, setCurrentBird] = useState("");
  const [historyOpen, setHistoryOpen] = useState(true);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
 
  const messagesEndRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);

useEffect(() => {
  supabase.auth.getUser().then(async ({ data }) => {
    const user = data.user;

    setUserEmail(user?.email ?? null);

    if (!user) return;

    const { data: history } = await supabase
      .from("chat_history")
      .select("query")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (history) {
      setSearchHistory(history.map((item) => item.query));
    }
  });
}, []);
async function loginWithEmail() {
  if (!loginEmail.trim() || !loginPassword.trim()) {
    alert("Vui lòng nhập email và mật khẩu.");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginEmail.trim(),
    password: loginPassword,
  });

  if (error) {
    alert("Lỗi đăng nhập: " + error.message);
    return;
  }

  setUserEmail(data.user.email ?? null);
  alert("Đăng nhập thành công!");
}
async function signUpWithEmail() {
  if (!loginEmail.trim() || !loginPassword.trim()) {
    alert("Vui lòng nhập email và mật khẩu.");
    return;
  }

  const { error } = await supabase.auth.signUp({
    email: loginEmail.trim(),
    password: loginPassword,
  });

  if (error) {
    alert("Lỗi đăng ký: " + error.message);
    return;
  }

  alert("Đăng ký thành công! Hãy kiểm tra email nếu Supabase yêu cầu xác nhận.");
}
async function logout() {
  await supabase.auth.signOut();
  setUserEmail(null);
}
async function sendMessage(customMessage?: string) {
    const text = (customMessage ?? message).trim();
    if (text.toLowerCase().includes("bồng chanh")) {
  setCurrentBird("bong-chanh");
}

    if (!text || loading) return;
    const { data: userData } = await supabase.auth.getUser();

if (userData.user) {
  await supabase.from("chat_history").insert({
    user_id: userData.user.id,
    query: text,
  });
}
    setSearchHistory((prev) => [text, ...prev]);

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  messages: [
    ...messages,
    { role: "user", text },
  ],
  }),
});

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Có lỗi xảy ra.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Xin lỗi, hiện tại tôi không thể trả lời.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-row items-stretch">
      <div className="flex-1 min-w-0 p-0">
        <div className="sticky top-0 z-50 flex items-center gap-3 bg-black text-white py-2 px-4">
  <img
    src="/images/avianbot-logo.png"
    alt="Logo AvianBOT"
    className="w-10 h-10 object-contain"
  />
  <h1 className="text-2xl font-bold">AvianBOT</h1>
{userEmail ? (
  <span className="ml-auto hidden md:block text-sm">
  {userEmail}
</span>
) : (
  <div className="ml-auto flex items-center gap-2">
    <input
      type="email"
      value={loginEmail}
      onChange={(e) => setLoginEmail(e.target.value)}
      placeholder="Email"
      className="rounded-lg border-2 border-black bg-white px-3 py-2 text-black placeholder:text-gray-500"
    />
    <input
  type="password"
  value={loginPassword}
  onChange={(e) => setLoginPassword(e.target.value)}
  placeholder="Mật khẩu"
  className="rounded-lg border-2 border-black bg-white px-3 py-2 text-black placeholder:text-gray-500"
/>
    <button
      onClick={loginWithEmail}
      className="rounded-lg bg-white px-3 py-2 text-black font-semibold"
    >
      Đăng nhập
    </button>
    <button
  onClick={signUpWithEmail}
  className="rounded-lg border-2 border-white px-3 py-2 font-semibold text-white"
>
  Đăng ký
</button>
  </div>
)}

<button
  onClick={() => setHistoryOpen((prev) => !prev)}
  className="text-3xl font-bold"
>
  ☰
</button>
</div>

<div className="flex flex-col items-center mt-6 px-4 sm:px-6">
  <img   
    src="/images/avian-robot.png"
    alt="Robot AvianBOT"
    className="w-40 h-40 object-contain"
  />

  <h2 className="mt-4 text-xl md:text-2xl font-bold text-center max-w-2xl px-4">
    Xin chào! Tôi là Avian – người bạn đồng hành giúp bạn khám phá thế giới chim tại Hồ Sông Đầm.
  </h2>
</div>

<div className="flex justify-center gap-4 mt-14"><button
  onClick={() => sendMessage("Hãy giới thiệu về hệ sinh thái Hồ Sông Đầm.")}
  disabled={loading}
  className="mb-4 rounded-xl border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-sm hover:bg-gray-50"
>
  <span className="flex items-center gap-2">
  <img
    src="/images/avianbot-logo.png"
    alt=""
    className="h-6 w-6 object-contain"
  />
  Khám phá Hồ Sông Đầm
</span>
</button>
<button
  onClick={() => sendMessage("Hãy giới thiệu về trợ lý AvianBOT.")}
  disabled={loading}
  className="mb-4 block rounded-xl border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-sm hover:bg-gray-50"
>
  <span className="flex items-center gap-2">
    <img
      src="/images/avianbot-logo.png"
      alt=""
      className="h-6 w-6 object-contain"
    />
    Giới thiệu trợ lý AvianBOT
  </span>
</button>
</div>
        <div className="space-y-4 pb-22">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user"
  ? "bg-[#064563] text-white p-4 rounded-xl ml-auto max-w-xl"
  : "bg-white p-4 rounded-xl shadow max-w-xl"
              }
            >
              {msg.role === "assistant" ? (
  <div>
  <ReactMarkdown>{msg.text}</ReactMarkdown>
  {index > 0 &&
  messages[index - 1]?.role === "user" &&
  currentBird === "bong-chanh" &&
msg.text.toLowerCase().includes("bồng chanh") &&
  (messages[index - 1].text.toLowerCase().includes("ảnh") ||
   messages[index - 1].text.toLowerCase().includes("xem")) && (
  <img
    src="/images/bong-chanh.jpg"
    alt="Chim Bồng chanh"
    className="mt-3 w-full rounded-xl"
  />
)}

  {index > 0 &&
  messages[index - 1]?.role === "user" &&
  currentBird === "bong-chanh" &&
  msg.text.toLowerCase().includes("bồng chanh") &&
  (messages[index - 1].text.toLowerCase().includes("tiếng") ||
   messages[index - 1].text.toLowerCase().includes("nghe") ||
   messages[index - 1].text.toLowerCase().includes("âm thanh") ||
   messages[index - 1].text.toLowerCase().includes("voice")) && (
    <audio controls className="mt-3 w-full">
      <source src="/audio/bong-chanh.wav" type="audio/wav" />
    </audio>
)}
</div>
) : (
  msg.text
)}
            </div>
          ))}

          {loading && (
            <div className="bg-white p-4 rounded-xl shadow max-w-xl">
              AI đang trả lời...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      
      <div
  className={`fixed bottom-0 left-0 z-50 border-t bg-white p-4 transition-all duration-300 ${
    historyOpen ? "right-80" : "right-0"
  }`}
>
        <div className="max-w-3xl mx-auto flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Nhập tin nhắn..."
            className="flex-1 border rounded-xl px-4 py-3"
          />

          <button
           onClick={() => sendMessage()}
            disabled={loading}
            className="bg-[#064563] text-white px-6 py-3 rounded-xl disabled:opacity-50"
          >
            Gửi
          </button>
        </div>
      </div>
      </div>
      <aside
  className={`relative flex flex-col border-l bg-white sticky top-0 h-screen self-start overflow-y-auto transition-all duration-300 ${
    historyOpen ? "w-80" : "w-0 overflow-hidden border-l-0"
  }`}
>
  


  

  <div className="p-4">
    <h2 className="text-xl font-bold">Lịch sử tìm kiếm</h2>
    <div className="mt-4 space-y-3">
  {searchHistory.map((item, index) => (
    <button
      key={index}
      onClick={() => sendMessage(item)}
      className="block w-full text-left border-b pb-3 text-sm hover:font-semibold"
    >
      {item}
    </button>
  ))}
</div>
{userEmail && (
  <div className="mt-auto p-4">
    <button
      onClick={logout}
      className="w-full rounded-lg bg-[#064563] px-4 py-3 font-semibold text-white"
    >
      Đăng xuất
    </button>
  </div>
)}
  </div>
</aside>


    </main>
  );
}