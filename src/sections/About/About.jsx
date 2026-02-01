import React from "react";
import MissionVision from "./MissionVision";

const About = () => {
  return (
    <>
      <section className="bg-indigo-50 py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* ⚡ ICON */}
          <div
            className="mx-auto mb-8 w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center text-3xl text-white shadow-xl animate-float-rotate"
            data-aos="fade-up"
          >
            ⚡
          </div>

          {/* TITLE */}
          <h2
            className="text-5xl md:text-6xl font-extrabold text-slate-800"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            Tentang <span className="text-indigo-500">CreativeVibe</span>
          </h2>

          {/* PARAGRAF 1 */}
          <p
            className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            CreativeVibe adalah platform digital yang dikembangkan sebagai
            bagian dari proyek kreatif dan pembelajaran sekolah, untuk membantu
            pelajar mengenal potensi diri, peluang pendidikan, serta dunia
            kreatif dan teknologi.
          </p>

          {/* PARAGRAF 2 */}
          <p
            className="mt-5 text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Kami percaya bahwa kreativitas, teknologi, dan pendidikan dapat
            berjalan beriringan dalam membentuk generasi yang adaptif, inovatif,
            dan siap menghadapi masa depan.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <div data-aos="fade-up" data-aos-delay="200">
        <MissionVision />
      </div>
    </>
  );
};

export default About;
