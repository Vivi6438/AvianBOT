"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { birdMedia } from "@/data/birds";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
  birdSlug?: string;
  showImage?: boolean;
  showAudio?: boolean;
};

function normalizeText(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/[^a-z0-9]+/g, " ").trim();
}

type PendingChoice = { slugs: string[]; image: boolean; audio: boolean };

function mentionedBirds(text: string) {
  const query = ` ${normalizeText(text)} `;
  const matches = birdMedia.flatMap(bird => bird.names.map(name => ({ bird, name: normalizeText(name) })))
    .filter(item => item.name && query.includes(` ${item.name} `));
  const precise = matches.filter(item => !matches.some(other =>
    other.name.length > item.name.length && ` ${other.name} `.includes(` ${item.name} `)));
  return birdMedia.filter(bird => precise.some(item => item.bird.slug === bird.slug));
}

function requestDetails(text: string, currentSlug: string, pending: PendingChoice | null) {
  const normalized = normalizeText(text);
  const image = /\b(anh|hinh|photo|image|picture)\b/.test(normalized.replace(/tieng anh/g, ""));
  const audio = /\b(tieng|nghe|am thanh|voice|audio|sound)\b/.test(normalized.replace(/tieng anh/g, ""));
  const shortName = normalized
    .replace(/\b(hinh anh|am thanh|cho toi|cho minh|cho em|cho xem|cho nghe|xem|nghe|anh|hinh|tieng|photo|image|picture|audio|sound|voice|cua|con|loai|chim|nhe|nha|khong)\b/g, " ")
    .replace(/\s+/g, " ").trim();
  let candidates = mentionedBirds(text);
  let choice = false;
  if (!candidates.length && shortName && pending) {
    candidates = birdMedia.filter(bird => pending.slugs.includes(bird.slug) && bird.names.some(name =>
      ` ${normalizeText(name)} `.includes(` ${shortName} `)));
    choice = candidates.length > 0;
  }
  if (!candidates.length && shortName.split(" ").length >= 2) {
    candidates = birdMedia.filter(bird => bird.names.some(name =>
      ` ${normalizeText(name)} `.includes(` ${shortName} `)));
  }
  if (pending && candidates.length === 1 && pending.slugs.includes(candidates[0].slug)) choice = true;
  const followup = ((image || audio) && !shortName) || /^(anh|hinh|hinh anh|anh dau|hinh dau|tieng|tieng keu|tieng hot|am thanh|nghe|cho xem anh|cho nghe tieng|cho toi xem anh|cho minh xem anh|an gi|song o dau|sinh san the nao)$/.test(normalized)
    || /\b(no|loai nay|con nay)\b/.test(normalized);
  const selected = candidates.length === 1 ? candidates[0]
    : candidates.length === 0 && followup && !pending ? birdMedia.find(bird => bird.slug === currentSlug) : undefined;
  let rest = normalized;
  const aliases = selected ? [...selected.names].map(normalizeText).sort((a, b) => b.length - a.length) : [];
  for (const name of aliases) rest = ` ${rest} `.replace(` ${name} `, " ").trim();
  if (selected && shortName && selected.names.some(name => ` ${normalizeText(name)} `.includes(` ${shortName} `))) {
    rest = ` ${rest} `.replace(` ${shortName} `, " ").trim();
  }
  rest = rest.replace(/\b(hinh anh|am thanh|cho toi|cho minh|cho em|loai nay|con nay|cho|toi|minh|em|xem|nghe|anh|hinh|tieng|keu|hot|photo|image|picture|audio|sound|voice|cua|con|loai|chim|no|nay|dau|co|khong|nhe|nha|voi|va)\b/g, " ").trim();
  const wantsImage = image || (choice && !!pending?.image);
  const wantsAudio = audio || (choice && !!pending?.audio);
  return { candidates, selected, wantsImage, wantsAudio, mediaOnly: !rest && (wantsImage || wantsAudio) };
}

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentBird, setCurrentBird] = useState("");
  const [pendingChoice, setPendingChoice] = useState<PendingChoice | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sendingRef = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
    return () => clearTimeout(timeout);
  }, [messages, loading]);

  async function sendMessage(customMessage?: string) {
    const text = (customMessage ?? message).trim();
    if (!text || sendingRef.current) return;
    sendingRef.current = true;

    const request = requestDetails(text, currentBird, pendingChoice);
    let selectedBird = request.selected;
    const { wantsImage, wantsAudio } = request;
    const userMessage: ChatMessage = { role: "user", text };
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      if (request.candidates.length > 1 && (wantsImage || wantsAudio || pendingChoice)) {
        setCurrentBird("");
        setPendingChoice({ slugs: request.candidates.map(bird => bird.slug), image: wantsImage, audio: wantsAudio });
        setMessages(prev => [...prev, {
          role: "assistant",
          text: "Bạn muốn chọn loài nào?\n\n" + request.candidates.map(bird => "- " + bird.names[0]).join("\n"),
        }]);
        return;
      }
      if ((wantsImage || wantsAudio) && !selectedBird) {
        setCurrentBird("");
        setPendingChoice({ slugs: birdMedia.map(bird => bird.slug), image: wantsImage, audio: wantsAudio });
        setMessages(prev => [...prev, { role: "assistant", text: "Bạn muốn xem ảnh hoặc nghe tiếng của loài nào? Hãy nhập tên loài trong danh lục." }]);
        return;
      }
      setPendingChoice(null);
      setCurrentBird(selectedBird?.slug || "");
      if (request.mediaOnly && selectedBird) {
        const parts: string[] = [];
        if (wantsImage) parts.push(selectedBird.image
          ? `Hình ảnh **${selectedBird.names[0]}** ở bên dưới.`
          : `Dữ liệu hiện chưa có ảnh của **${selectedBird.names[0]}**.`);
        if (wantsAudio) parts.push(selectedBird.audio
          ? `Bạn nhấn nút phát bên dưới để nghe tiếng **${selectedBird.names[0]}**.`
          : `Dữ liệu hiện chưa có âm thanh của **${selectedBird.names[0]}**.`);
        const mediaMessage: ChatMessage = {
          role: "assistant",
          text: parts.join("\n\n"),
          birdSlug: selectedBird.slug,
          showImage: wantsImage && !!selectedBird.image,
          showAudio: wantsAudio && !!selectedBird.audio,
        };
        setMessages(prev => [...prev, mediaMessage]);
        return;
      }
      const apiMessage = selectedBird ? {
        ...userMessage,
        text: `${text}\n\n[Loài đang được người dùng hỏi: ${selectedBird.names[0]}]`,
      } : userMessage;
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, apiMessage] }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Có lỗi xảy ra.");
      if (typeof data.reply !== "string") throw new Error("Phản hồi không hợp lệ.");

      if (!selectedBird) {
        const replyBirds = mentionedBirds(data.reply);
        if (replyBirds.length === 1) selectedBird = replyBirds[0];
        if (replyBirds.length > 1) setPendingChoice({ slugs: replyBirds.map(bird => bird.slug), image: wantsImage, audio: wantsAudio });
      }
      setCurrentBird(selectedBird?.slug || "");
      setMessages(prev => [...prev, {
        role: "assistant", text: data.reply, birdSlug: selectedBird?.slug,
        showImage: wantsImage && !!selectedBird?.image,
        showAudio: wantsAudio && !!selectedBird?.audio,
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        role: "assistant", text: "Xin lỗi, hiện tại tôi không thể trả lời.",
      }]);
    } finally {
      sendingRef.current = false;
      setLoading(false);
    }
  }

  return (
    <main className="flex h-dvh w-full flex-col overflow-hidden bg-gray-100">
      <header className="flex h-[64px] shrink-0 items-center gap-3 bg-black px-4 text-white">
        <img src="/images/avianbot-logo.png" alt="Logo AvianBOT" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl font-bold">AvianBOT</h1>
      </header>

      <section className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="shrink-0 px-4 pt-6">
          <div className="flex flex-col items-center">
            <img src="/images/avian-robot.png" alt="Robot AvianBOT" className="h-28 w-28 object-contain sm:h-32 sm:w-32" />
            <h2 className="mt-4 max-w-2xl text-center text-xl font-bold sm:text-2xl">
              Xin chào! Tôi là Avian – người bạn đồng hành giúp bạn khám phá thế giới chim tại Hồ Sông Đầm.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={() => sendMessage("Hãy giới thiệu về hệ sinh thái Hồ Sông Đầm.")} disabled={loading}
                className="rounded-xl border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-sm hover:bg-gray-50 disabled:opacity-50">
                <span className="flex items-center gap-2">
                  <img src="/images/avianbot-logo.png" alt="" className="h-5 w-5 object-contain" />
                  Khám phá Hồ Sông Đầm
                </span>
              </button>
              <button onClick={() => sendMessage("Hãy giới thiệu về trợ lý AvianBOT.")} disabled={loading}
                className="rounded-xl border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-sm hover:bg-gray-50 disabled:opacity-50">
                <span className="flex items-center gap-2">
                  <img src="/images/avianbot-logo.png" alt="" className="h-5 w-5 object-contain" />
                  Giới thiệu trợ lý AvianBOT
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-6 w-full space-y-4">
          <div className="w-full space-y-4">
            {messages.map((msg, index) => {
              const bird = birdMedia.find(item => item.slug === msg.birdSlug);
              return (
                <div key={index} className={msg.role === "user"
                  ? "ml-auto flex w-1/2 min-w-0 justify-end pr-2"
                  : "mr-auto flex w-[88%] min-w-0 items-end justify-start gap-2 pr-2 sm:w-1/2"}>
                  {msg.role === "assistant" && (
                    <img src="/images/avianbot-logo.png" alt="AvianBOT" className="h-10 w-10 shrink-0 object-contain" />
                  )}
                  {msg.role === "assistant" ? (
                    <div className="w-fit max-w-[90%] rounded-xl bg-white p-4 shadow">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                      {msg.showImage && bird?.image && (
                        <img src={encodeURI(bird.image)} alt={bird.names[0]}
                          className="mx-auto mt-3 h-auto w-[55%] max-w-full rounded-xl object-contain" />
                      )}
                      {msg.showAudio && bird?.audio && (
                        <audio key={bird.slug} controls preload="none" className="mt-3 w-full">
                          <source src={encodeURI(bird.audio)} />
                        </audio>
                      )}
                    </div>
                  ) : (
                    <div className="w-fit max-w-full break-words rounded-xl bg-[#064563] p-4 text-white">{msg.text}</div>
                  )}
                </div>
              );
            })}
            {loading && (
              <div className="flex items-end gap-2">
                <img src="/images/avianbot-logo.png" alt="AvianBOT" className="h-10 w-10 shrink-0 object-contain" />
                <div className="w-fit max-w-xl rounded-xl bg-white p-4 shadow">Avian đang suy nghĩ...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </section>

      <div className="shrink-0 border-t bg-white p-3 sm:p-4">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-2">
          <input value={message} onChange={e => setMessage(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.nativeEvent.isComposing) sendMessage();
            }}
            placeholder="Nhập tin nhắn..."
            className="min-w-0 flex-1 rounded-xl border px-4 py-3 text-base outline-none" />
          <button onClick={() => sendMessage()} disabled={loading}
            className="shrink-0 rounded-xl bg-[#064563] px-6 py-3 font-semibold text-white disabled:opacity-50">Gửi</button>
        </div>
      </div>
    </main>
  );
}
