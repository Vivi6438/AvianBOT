"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { birdMedia } from "@/data/birds";


type ChatMessage = {
  role: "user" | "assistant";
  text: string;
  birdSlug?: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentBird, setCurrentBird] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  const timeout = setTimeout(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, 100);

  return () => clearTimeout(timeout);
}, [messages, loading]);

async function sendMessage(customMessage?: string) {
    const text = (customMessage ?? message).trim();
   const normalizedText = text.toLowerCase();

const detectedBird = birdMedia.find((bird) =>
  bird.names.some((name) =>
    normalizedText.includes(name.toLowerCase())
  )
);

if (detectedBird) {
  setCurrentBird(detectedBird.slug);
}

    if (!text || loading) return;
    setMessages((prev) => [
  ...prev,
  {
    role: "assistant",
    text: data.reply,
    birdSlug: detectedBird?.slug || currentBird,
  },
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

  const activeBird = birdMedia.find(
    (bird) => bird.slug === currentBird
  );

  return (
  <main className="flex h-dvh w-full flex-col overflow-hidden bg-gray-100">
    {/* HEADER */}
    <header className="flex h-[64px] shrink-0 items-center gap-3 bg-black px-4 text-white">
      <img
        src="/images/avianbot-logo.png"
        alt="Logo AvianBOT"
        className="h-10 w-10 object-contain"
      />

      <h1 className="text-2xl font-bold">
        AvianBOT
      </h1>
    </header>

    {/* NỘI DUNG CHÍNH */}
    <section className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
      {/* GIỚI THIỆU */}
      <div className="shrink-0 px-4 pt-6">
        <div className="flex flex-col items-center">
          <img
            src="/images/avian-robot.png"
            alt="Robot AvianBOT"
            className="h-28 w-28 object-contain sm:h-32 sm:w-32"
          />

          <h2 className="mt-4 max-w-2xl text-center text-xl font-bold sm:text-2xl">
            Xin chào! Tôi là Avian – người bạn đồng hành giúp bạn
            khám phá thế giới chim tại Hồ Sông Đầm.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() =>
                sendMessage("Hãy giới thiệu về hệ sinh thái Hồ Sông Đầm.")
              }
              disabled={loading}
              className="rounded-xl border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-sm hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="flex items-center gap-2">
                <img
                  src="/images/avianbot-logo.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                Khám phá Hồ Sông Đầm
              </span>
            </button>

            <button
              onClick={() =>
                sendMessage("Hãy giới thiệu về trợ lý AvianBOT.")
              }
              disabled={loading}
              className="rounded-xl border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-sm hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="flex items-center gap-2">
                <img
                  src="/images/avianbot-logo.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                Giới thiệu trợ lý AvianBOT
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* HỘI THOẠI */}
      <div className="relative mt-6 w-full space-y-4">
        <div className="w-full space-y-4">
          
          {messages.map((msg, index) => (
           <div
  key={index}
  className={
    msg.role === "user"
  ? "ml-auto flex w-1/2 min-w-0 justify-end pr-2"
  : "mr-auto flex w-[88%] min-w-0 items-end justify-start gap-2 pr-2 sm:w-1/2"
  }
>
              {msg.role === "assistant" && (
  <img
    src="/images/avianbot-logo.png"
    alt="AvianBOT"
    className="h-10 w-10 shrink-0 object-contain"
  />
)}

{msg.role === "assistant" ? (
  <div className="w-fit max-w-[90%] rounded-xl bg-white p-4 shadow">
    <ReactMarkdown>{msg.text}</ReactMarkdown>

                  {index > 0 &&
  messages[index - 1]?.role === "user" &&
  activeBird &&
  (messages[index - 1].text
    .toLowerCase()
    .includes("ảnh") ||
    messages[index - 1].text
      .toLowerCase()
      .includes("xem")) && (
    <img
      src={activeBird.image}
      alt={activeBird.names[0]}
      className="mx-auto mt-3 h-auto w-[55%] max-w-full rounded-xl object-contain"
    />
  )}

                  {index > 0 &&
  messages[index - 1]?.role === "user" &&
  activeBird &&
  (messages[index - 1].text
    .toLowerCase()
    .includes("tiếng") ||
    messages[index - 1].text
      .toLowerCase()
      .includes("nghe") ||
    messages[index - 1].text
      .toLowerCase()
      .includes("âm thanh") ||
    messages[index - 1].text
      .toLowerCase()
      .includes("voice")) && (
    <audio controls className="mt-3 w-full">
      <source src={activeBird.audio} />
    </audio>
  )}
                </div>
              ) : (
  <div className="w-fit max-w-full break-words rounded-xl bg-[#064563] p-4 text-white">
    {msg.text}
  </div>
)}
            </div>
))}

         {loading && (
  <div className="flex items-end gap-2">
    <img
      src="/images/avianbot-logo.png"
      alt="AvianBOT"
      className="h-10 w-10 shrink-0 object-contain"
    />

    <div className="w-fit max-w-xl rounded-xl bg-white p-4 shadow">
      Avian đang suy nghĩ...
    </div>
  </div>
)}

          <div ref={messagesEndRef} />
        </div>
      </div>
    </section>

    {/* THANH NHẬP */}
    <div className="shrink-0 border-t bg-white p-3 sm:p-4">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Nhập tin nhắn..."
          className="min-w-0 flex-1 rounded-xl border px-4 py-3 text-base outline-none"
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading}
          className="shrink-0 rounded-xl bg-[#064563] px-6 py-3 font-semibold text-white disabled:opacity-50"
        >
          Gửi
        </button>
      </div>
    </div>
  </main>
);
}