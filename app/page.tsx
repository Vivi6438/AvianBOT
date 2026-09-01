"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);
  async function sendMessage(customMessage?: string) {
    const text = (customMessage ?? message).trim();
    if (text.toLowerCase().includes("bồng chanh")) {
  setCurrentBird("bong-chanh");
}

    if (!text || loading) return;
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
      <div className="flex-1 min-w-0 p-6">
        <div className="flex items-center gap-3">
  <img
    src="/images/avianbot-logo.png"
    alt="Logo AvianBOT"
    className="w-16 h-16 object-contain"
  />
  <h1 className="text-4xl font-bold">AvianBOT</h1>
</div>
<p className="mt-2 text-center text-gray-600">
  Trợ lý AI giúp bạn khám phá các loài chim và thiên nhiên tại Hồ Sông Đầm.
</p>
<div className="flex flex-col items-center mt-6">
  <img   
    src="/images/avian-robot.png"
    alt="Robot AvianBOT"
    className="w-56 h-56 object-contain"
  />

  <h2 className="mt-4 text-2xl font-bold text-center max-w-2xl">
    Xin chào! Tôi là Avian – người bạn đồng hành giúp bạn khám phá thế giới chim tại Hồ Sông Đầm.
  </h2>
</div>

        <button
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
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user"
                  ? "bg-black text-white p-4 rounded-xl ml-auto max-w-xl"
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
      
      <div className="border-t bg-white p-4">
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
            className="bg-black text-white px-6 py-3 rounded-xl disabled:opacity-50"
          >
            Gửi
          </button>
        </div>
      </div>
      </div>
      <aside
  className={`relative border-l bg-white sticky top-0 h-screen self-start overflow-y-auto transition-all duration-300 ${
    historyOpen ? "w-80" : "w-0 overflow-hidden border-l-0"
  }`}
>
  {historyOpen && (
<button
  onClick={() => setHistoryOpen(false)}
 className="fixed right-[19rem] top-1/2 -translate-y-1/2 z-50 w-8 h-12 rounded-full border bg-white shadow"
>
  &lt;
</button>
)}
  <div className="bg-black p-4">
    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="w-full rounded-full px-4 py-2"
    />
  </div>

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
  </div>
</aside>
{!historyOpen && (
  <button
    onClick={() => setHistoryOpen(true)}
    className="fixed right-0 top-1/2 -translate-y-1/2 w-8 h-12 rounded-l-full border bg-white shadow"
  >
    &gt;
  </button>
)}

    </main>
  );
}