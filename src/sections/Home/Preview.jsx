import { useState } from "react";
import { Code2, Video, Palette } from "lucide-react";

const items = [
  {
    title: "RPL",
    desc: "Buat kamu yang suka ngoding, bikin website/aplikasi, dan main logika.",
    Icon: Code2,
    accent: "rpl",
  },
  {
    title: "BC",
    desc: "Cocok buat yang suka kamera, editing, dan produksi konten bareng tim.",
    Icon: Video,
    accent: "bc",
  },
  {
    title: "MM",
    desc: "Buat yang suka desain, animasi, visual kreatif, dan branding.",
    Icon: Palette,
    accent: "mm",
  },
];

function stylesByAccent(accent) {
  if (accent === "rpl") {
    return {
      hoverBorder: "hover:border-sky-200",
      iconBg: "from-sky-100 to-sky-300",
      title: "text-sky-700",
      button: "from-sky-400 to-blue-500",
      buttonHover: "hover:opacity-95",
      focusRing: "focus-visible:ring-sky-200",
    };
  }

  if (accent === "bc") {
    return {
      hoverBorder: "hover:border-sky-300",
      iconBg: "from-sky-300 to-sky-600",
      title: "text-sky-800",
      button: "from-sky-500 to-indigo-500",
      buttonHover: "hover:opacity-95",
      focusRing: "focus-visible:ring-sky-200",
    };
  }

  return {
    hoverBorder: "hover:border-cyan-300",
    iconBg: "from-indigo-600 via-purple-600 to-cyan-500",
    title: "text-indigo-800",
    button: "from-indigo-700 via-purple-700 to-cyan-700",
    buttonHover: "hover:opacity-95",
    focusRing: "focus-visible:ring-fuchsia-200",
  };
}

export default function JurusanCards() {
  const [selectedJurusan, setSelectedJurusan] = useState(null);

  return (
    <>
      <section className="bg-[#F5FAFF] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Mulai dari Beasiswa yang Tepat
            </h2>
            <p className="mt-3 text-gray-500">
              Pilih program beasiswa yang paling cocok buat kamu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8 lg:mt-12">
            {items.map(({ title, desc, Icon, accent }) => {
              const s = stylesByAccent(accent);

              return (
                <div
                  key={title}
                  className={[
                    "bg-white rounded-3xl p-8 shadow-lg cursor-pointer",
                    "border-2 border-transparent transition",
                    "hover:-translate-y-1 hover:shadow-xl",
                    s.hoverBorder,
                  ].join(" ")}
                >
                  <div className="text-center space-y-4">
                    <div
                      className={[
                        "w-16 h-16 mx-auto rounded-full flex items-center justify-center",
                        "bg-gradient-to-br",
                        s.iconBg,
                      ].join(" ")}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className={["text-3xl font-bold", s.title].join(" ")}>
                      {title}
                    </h3>

                    <p className="text-gray-600">{desc}</p>

                    <button
                      onClick={() =>
                        setSelectedJurusan({ title, desc, accent })
                      }
                      className={[
                        "w-full rounded-2xl py-3 font-semibold text-white",
                        "bg-gradient-to-br transition",
                        s.button,
                        s.buttonHover,
                      ].join(" ")}
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedJurusan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 sm:p-6">
          <div className="bg-white max-w-lg w-full rounded-3xl p-8 relative">
            <button
              onClick={() => setSelectedJurusan(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {selectedJurusan.title}
            </h3>

            <p className="text-gray-500 mb-6">
              {selectedJurusan.desc}
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold">🎯 Fokus Beasiswa</h4>
                <p>Pengembangan skill sesuai jurusan</p>
              </div>

              <div>
                <h4 className="font-semibold">💰 Benefit</h4>
                <ul className="list-disc list-inside">
                  <li>Biaya pendidikan</li>
                  <li>Akses pembelajaran</li>
                  <li>Sertifikat</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">⏰ Deadline</h4>
                <p>30 Juni 2026</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
