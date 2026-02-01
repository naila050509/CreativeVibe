import { useRef, useState } from "react";

const SUGGESTIONS = [
  "Beasiswa yang lagi dibuka",
  "Cara daftar beasiswa",
  "Syarat dokumen",
  "Jadwal pengumuman",
];

function getBotAnswer(text = "") {
  const t = text.toLowerCase();

  if (t.includes("dibuka"))
    return "Beasiswa yang tersedia: Prestasi, Akademik, dan Inspirasi.";
  if (t.includes("cara daftar"))
    return "Langkah singkat: cek syarat → siapkan dokumen → isi form → submit.";
  if (t.includes("dokumen") || t.includes("syarat"))
    return "Dokumen umum: rapor, identitas, sertifikat (opsional).";
  if (t.includes("jadwal"))
    return "Alur umum: Pendaftaran → Seleksi → Pengumuman.";

  return "Aku bisa bantu info beasiswa, syarat, jadwal, atau tips daftar 😊";
}

function Bubble({ role, children }) {
  const user = role === "user";
  return (
    <div className={`flex ${user ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm ${
          user ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ChatAI() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [chat, setChat] = useState([
    { role: "bot", text: "Hai! Mau tanya soal beasiswa apa hari ini? 👋" },
  ]);
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  const send = (textFromButton) => {
    const text = (textFromButton ?? draft).trim();
    if (!text) return;

    setChat((c) => [...c, { role: "user", text }]);
    setDraft("");

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setChat((c) => [...c, { role: "bot", text: getBotAnswer(text) }]);
    }, 600);
  };

  return (
    <>
      {/* CHAT BAR (NEMPEL HERO) */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 z-40 w-full max-w-[900px] px-4">
        <div className="bg-white rounded-2xl shadow-lg px-4 py-4 flex gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full px-6 py-3 font-semibold text-white
            bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500"
          >
            ✨ Tanya AI
          </button>

          <button onClick={() => setOpen(true)} className="flex-1">
            <div className="rounded-2xl border px-4 py-3 text-gray-500">
              Mulai ketik di sini...
            </div>
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-start md:items-center pt-[72px] md:pt-0 px-3">
          <div
            className="w-full max-w-3xl bg-white rounded-2xl shadow-xl flex flex-col max-h-[90dvh]"
          >
            {/* HEADER */}
            <div className="px-6 py-4 border-b flex justify-between items-center shrink-0">
              <div>
                <div className="font-bold text-lg">
                  CreativeVibe Assistant 🤖
                </div>
                <div className="text-sm text-gray-500">
                  Cari info beasiswa dengan AI
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-xl border hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* CHAT BODY */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3 overscroll-contain">
              {chat.map((m, i) => (
                <Bubble key={i} role={m.role}>
                  {m.text}
                </Bubble>
              ))}

              {typing && (
                <div className="text-sm text-gray-400">AI sedang mengetik…</div>
              )}
              <div ref={endRef} />
            </div>

            {/* SUGGESTIONS */}
            <div className="px-6 pb-3 shrink-0">
              <div className="text-sm text-gray-500 mb-2">Saran:</div>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT */}
            <div className="px-6 py-4 border-t shrink-0">
              <div className="flex gap-3">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ketik pertanyaan kamu..."
                  className="flex-1 rounded-full border px-5 py-3 focus:ring-4 focus:ring-indigo-200"
                />
                <button
                  onClick={() => send()}
                  disabled={!draft.trim()}
                  className={`h-12 w-12 rounded-full text-white ${
                    draft.trim() ? "bg-indigo-500" : "bg-indigo-500 opacity-40"
                  }`}
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
