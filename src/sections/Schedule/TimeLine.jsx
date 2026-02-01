import React from "react";

/* ================= DATA ================= */
const ScheduleData = [
  {
    title: "Sosialisasi Beasiswa",
    date: "11 Januari 2026",
    status: "done",
  },
  {
    title: "Tahap 1 Dispro",
    date: "13–16 Januari 2026",
    status: "done",
  },
  {
    title: "Pengumuman Tahap 1",
    date: "19 Januari 2026",
    status: "done",
  },
  {
    title: "Pengumpulan Tahap 2",
    date: "19–30 Januari 2026",
    status: "active",
  },
  {
    title: "Sidang Beasiswa",
    date: "5–6 Februari 2026",
    status: "upcoming",
  },
  {
    title: "Pengumuman Penerima Beasiswa",
    date: "27 Februari 2026",
    status: "upcoming",
  },
];

/* ================= STAR DECOR (DESKTOP ONLY) ================= */
const StarDecor = ({ position = "left" }) => {
  const pos =
    position === "left"
      ? "left-[-60px] bottom-[-60px]"
      : "right-[-60px] top-[-60px]";

  return (
    <div
      className={`hidden md:block absolute ${pos}
        z-0 opacity-0 scale-75
        transition-all duration-700 ease-out
        group-hover:opacity-100
        group-hover:scale-100
        group-hover:rotate-[360deg]`}
    >
      <svg
        width="110"
        height="110"
        viewBox="0 0 24 24"
        fill="none"
        className="text-indigo-300/40"
      >
        <path
          fill="currentColor"
          d="M12 2l2.9 6.1L22 9.3l-5 4.8L18.2 22 12 18.7 5.8 22 7 14.1 2 9.3l7.1-1.2L12 2z"
        />
      </svg>
    </div>
  );
};

/* ================= TIMELINE ================= */
const ScheduleTimeline = () => {
  return (
    <section className="bg-indigo-100 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-800 mb-20">
          Jadwal Beasiswa 🎓
        </h2>

        <div className="relative">
          {/* LINE TENGAH (DESKTOP) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-300 -translate-x-1/2 rounded-full" />

          {/* LINE KIRI (MOBILE) */}
          <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-orange-300 rounded-full" />

          {/* GRADIENT DECOR */}
          <div
            className="hidden md:block absolute -right-32 top-1/3 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl z-0"
          />

          <div
            className="hidden md:block absolute -left-32 bottom-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl z-0"
          />

          <div className="space-y-20 md:space-y-24">
            {ScheduleData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center
                    ${isLeft ? "md:justify-start" : "md:justify-end"}
                  `}
                >
                  {/* DOT */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
                    <div
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold
                        ${
                          item.status === "done"
                            ? "bg-green-500"
                            : item.status === "active"
                              ? "bg-orange-500 animate-pulse"
                              : "bg-slate-300"
                        }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className={`relative group
                      ml-14 md:ml-0
                      w-[calc(100%-3.5rem)] md:w-[45%]
                      bg-white rounded-2xl p-6 md:p-8 shadow-lg
                      transition-all duration-300
                      hover:-translate-y-2 hover:shadow-2xl
                      ${
                        item.status === "active"
                          ? "border-2 border-orange-400"
                          : ""
                      }`}
                  >
                    {/* STAR */}
                    <StarDecor position={isLeft ? "left" : "right"} />

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600 text-sm md:text-base">
                        {item.date}
                      </p>

                      {item.status === "active" && (
                        <span className="inline-block mt-4 px-4 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                          Sedang Berlangsung
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;
