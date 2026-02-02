import { useState } from "react";

/* ================= DATA ================= */
const items = [
  {
    title: "Info beasiswa selalu update",
    desc: "Selalu ada update terbaru.",
    detail: {
      focus: "Update beasiswa nasional & internasional",
      benefit: ["Notifikasi rutin", "Sumber terpercaya", "Info real-time"],
      note: "Cocok buat kamu yang aktif cari peluang",
    },
  },
  {
    title: "Jadwal & timeline jelas",
    desc: "Biar kamu gak ketinggalan.",
    detail: {
      focus: "Timeline pendaftaran & seleksi",
      benefit: [
        "Reminder deadline",
        "Urutan tahapan jelas",
        "Anti telat daftar",
      ],
      note: "Bikin persiapan lebih tenang",
    },
  },
  {
    title: "Saran jurusan yang cocok",
    desc: "Biar sesuai minat.",
    detail: {
      focus: "Rekomendasi jurusan sesuai skill",
      benefit: [
        "Berdasarkan minat",
        "Disesuaikan peluang",
        "Lebih tepat sasaran",
      ],
      note: "Cocok buat yang masih bingung jurusan",
    },
  },
  {
    title: "Checklist dokumen rapi",
    desc: "Dokumen aman & teratur.",
    detail: {
      focus: "Manajemen dokumen beasiswa",
      benefit: [
        "Checklist otomatis",
        "Dokumen tidak tercecer",
        "Siap kirim kapan saja",
      ],
      note: "Biar gak panik mendadak",
    },
  },
];

/* ================= CARD ================= */
function Card({ title, desc, onDetail }) {
  return (
    <div
      onClick={onDetail}
      className="
        group
        w-72 shrink-0 cursor-pointer
        rounded-3xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-lg
        hover:animate-[wiggle_0.45s_ease-in-out]
      "
    >
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>

      <p className="mt-4 text-sm font-semibold text-indigo-600">
        Klik untuk detail →
      </p>
    </div>
  );
}

/* ================= MAIN ================= */
export default function InfiniteCardsCarousel({ speed = 26 }) {
  const [paused, setPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* ===== SECTION ===== */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Kenapa harus <span className="text-sky-700">CreativeVibe</span>?
            </h2>
          </div>

          <div className="relative mt-10">
            {/* gradient kiri kanan */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-white/0" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-white/0" />

            <div
              className="overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
              <div
                className={[
                  "flex w-max gap-6 py-2 animate-marquee",
                  paused ? "[animation-play-state:paused]" : "",
                ].join(" ")}
                style={{ ["--duration"]: `${speed}s` }}
              >
                {[...items, ...items].map((item, idx) => (
                  <Card
                    key={`${item.title}-${idx}`}
                    title={item.title}
                    desc={item.desc}
                    onDetail={() => setSelectedItem(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes wiggle {
            0%   { transform: rotate(0deg); }
            25%  { transform: rotate(-1.5deg); }
            50%  { transform: rotate(1.5deg); }
            75%  { transform: rotate(-1deg); }
            100% { transform: rotate(0deg); }
          }

          .animate-marquee {
            animation: marquee var(--duration, 26s) linear infinite;
          }
        `}</style>
      </section>

      {/* ===== POPUP ===== */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 sm:px-8">
          <div className="bg-white max-w-lg w-full rounded-3xl p-8 mx-4 sm:mx-0 relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>

            <p className="text-slate-500 mb-6">{selectedItem.detail.focus}</p>

            <ul className="list-disc list-inside text-slate-700 space-y-1">
              {selectedItem.detail.benefit.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm italic text-slate-500">
              {selectedItem.detail.note}
            </p>

            <button
              onClick={() => setSelectedItem(null)}
              className="mt-8 w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 py-3 font-semibold text-white"
            >
              Oke, Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  );
}
