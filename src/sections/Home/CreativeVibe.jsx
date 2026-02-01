import { useState } from "react";

const items = [
  { title: "Info beasiswa selalu update", desc: "Selalu ada update terbaru." },
  { title: "Jadwal & timeline jelas", desc: "Biar kamu gak ketinggalan." },
  { title: "Saran jurusan yang cocok", desc: "Biar sesuai minat." },
  { title: "Checklist dokumen rapi", desc: "Dokumen aman & teratur." },
];

export default function InfiniteCardsCarousel({ speed = 26 }) {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Kenapa harus <span className="text-sky-700">CreativeVibe</span>?
          </h2>
        </div>

        <div className="relative mt-10">
          {/* fade kiri-kanan */}
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
                "flex w-max gap-6 py-2",
                "animate-marquee",
                paused ? "[animation-play-state:paused]" : "",
              ].join(" ")}
              style={{ ["--duration"]: `${speed}s` }}
            >
              {/* render 2x biar seamless */}
              {[...items, ...items].map((item, idx) => (
                <Card key={`${item.title}-${idx}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* animasi */}
      <style>{`
        @keyframes wiggle {
          0% { transform: translateY(-6px) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(-1.2deg); }
          50% { transform: translateY(-6px) rotate(1.2deg); }
          75% { transform: translateY(-6px) rotate(-0.8deg); }
          100% { transform: translateY(-6px) rotate(0deg); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee var(--duration, 26s) linear infinite;
        }
      `}</style>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="min-w-[300px] md:min-w-[360px]">
      <div
        className="
          group
          rounded-[28px]
          border border-slate-100
          bg-white
          p-6
          shadow-lg
          transition-all duration-300 ease-out
          hover:animate-[wiggle_0.45s_ease-in-out]
          hover:shadow-2xl
          cursor-pointer
        "
        >
        <p className="text-lg font-semibold text-slate-900">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>

        <button
          className="
            mt-5 w-full rounded-2xl
            bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500
            py-3 font-semibold text-white
            transition
            group-hover:scale-[1.02]
            hover:opacity-95
          "
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
