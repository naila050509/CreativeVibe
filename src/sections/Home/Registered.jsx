import { Award } from "lucide-react";

const STATS = [
  {
    value: "12+",
    title: "Beasiswa Aktif",
    desc: "Program beasiswa yang bisa kamu daftar bulan ini",
  },
  {
    value: "RPL • BC • MM",
    title: "3 Jurusan Unggulan",
    desc: "Pilih jalur yang paling cocok sama minat kamu",
  },
  {
    value: "4.8/5",
    title: "Kepuasan Siswa",
    desc: "Rating pengalaman belajar dari komunitas",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
            <Award className="w-6 h-6 text-indigo-500" />
          </div>

          <h2 className="text-4xl font-extrabold text-slate-800">
            CreativeVibe Tumbuh Bareng Kamu
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Info beasiswa, jurusan, dan jalur pendaftaran dibuat simpel biar kamu nggak bingung.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.title}
              className={[
                "rounded-3xl bg-white p-10",
                "border border-indigo-100",
                "shadow-[0_12px_30px_rgba(15,23,42,0.06)]",
                "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]",
                "transition",
              ].join(" ")}
            >
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-500">
                  {s.value}
                </div>

                <div className="mt-4 text-2xl font-bold text-slate-800">
                  {s.title}
                </div>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

