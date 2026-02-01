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
  // RPL — pastel blue + soft blue
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

  // BC — soft blue + sky blue
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

  // MM — ungu + sea blue
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
  return (
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
                  "active:translate-y-0",
                  s.hoverBorder,
                ].join(" ")}
                role="button"
                tabIndex={0}
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
                    type="button"
                    className={[
                      "w-full rounded-2xl py-3 font-semibold text-white",
                      "bg-gradient-to-br transition",
                      s.button,
                      s.buttonHover,
                      "outline-none focus-visible:ring-4",
                      s.focusRing,
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
  );
}
