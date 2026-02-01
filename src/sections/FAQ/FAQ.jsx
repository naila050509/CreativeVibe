import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Beasiswa from "./Beasiswa";

const faqData = [
  {
    question: "CreativeVibe itu apa sih?",
    answer:
      "CreativeVibe adalah platform yang bantu kamu nemuin info beasiswa, jurusan, dan peluang pendidikan sesuai potensi kamu.",
  },
  {
    question: "Apakah CreativeVibe gratis?",
    answer:
      "Yes! Kamu bisa pakai CreativeVibe secara gratis untuk eksplor beasiswa dan tanya AI Assistant.",
  },
  {
    question: "AI Assistant-nya ngapain aja?",
    answer:
      "AI Assistant bantu jawab pertanyaan soal beasiswa, syarat dokumen, jadwal, sampai rekomendasi jurusan.",
  },
  {
    question: "Apakah data aku aman?",
    answer:
      "Aman dong. CreativeVibe menjaga privasi pengguna dan tidak membagikan data tanpa izin.",
  },
];

const topFaq = faqData.slice(0, 2);
const bottomFaq = faqData.slice(2);

export default function FAQSection() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
      duration: 700,
    });
  }, []);

  return (
    <section className="bg-indigo-100 py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div data-aos="fade-right">
          <h2 className="text-5xl font-extrabold text-black leading-tight">
            FAQ <br /> Pertanyaan yang <br /> Sering Ditanyain 👀
          </h2>

          <p className="mt-5 text-slate-700 max-w-md">
            Masih bingung soal CreativeVibe? Tenang, ini jawaban dari pertanyaan
            yang paling sering muncul.
          </p>
        </div>

        {/* RIGHT - FAQ DOUBLE SLIDER */}
        <div className="space-y-8" data-aos="fade-up">
          {/* ===== BARIS ATAS (KANAN → KIRI) ===== */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 w-max animate-faq-left">
              {[...topFaq, ...topFaq].map((item, index) => (
                <div
                  key={`top-${index}`}
                  className="min-w-[520px] bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="font-semibold text-lg text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== BARIS BAWAH (KIRI → KANAN) ===== */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 w-max animate-faq-right">
              {[...bottomFaq, ...bottomFaq].map((item, index) => (
                <div
                  key={`bottom-${index}`}
                  className="min-w-[420px] md:min-w[480px] bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="font-semibold text-lg text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ ANIMASI */}
      <style>{`
        @keyframes faq-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes faq-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-faq-left {
          animation: faq-left 30s linear infinite;
        }

        .animate-faq-right {
          animation: faq-right 30s linear infinite;
        }
      `}</style>

      {/* BEASISWA SECTION */}
      <div className="mt-32">
        <Beasiswa />
      </div>
    </section>
  );
}
