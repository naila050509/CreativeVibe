import React from "react";
import BeasiswaImg1 from "../../assets/images/beasiswa-1.jpg";
import BeasiswaImg2 from "../../assets/images/beasiswa-2.jpg";
import BeasiswaImg3 from "../../assets/images/Beasiswa-3.jpg";
import BeasiswaImg4 from "../../assets/images/Beasiswa-4.jpg";
import BeasiswaImg5 from "../../assets/images/Beasiswa-5.jpg";
import BeasiswaImg6 from "../../assets/images/Kegiatan-1.jpg";
import BeasiswaImg7 from "../../assets/images/Kegiatan-2.jpeg";

const images = [
  BeasiswaImg1,
  BeasiswaImg2,
  BeasiswaImg3,
  BeasiswaImg4,
  BeasiswaImg5,
  BeasiswaImg6,
  BeasiswaImg7,
];

const Beasiswa = () => {
  return (
    <section className="bg-indigo-500 rounded-[50px] overflow-hidden p-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="text-white max-w-xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Kenali <br /> CreativeVibe Lebih Dekat ✨
          </h1>

          <p className="text-white/90 mb-8 animate-fade-up-delay">
            CreativeVibe hadir untuk bantu kamu eksplor beasiswa, jurusan, dan
            peluang pendidikan sesuai potensi kamu.
          </p>

          <button className="bg-white text-indigo-500 font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition animate-fade-up-delay">
            Eksplor Yuk →
          </button>
        </div>

        {/* RIGHT IMAGE FLOAT */}
        <div className="relative h-[420px] overflow-hidden grid grid-cols-3 gap-4">
          {/* COLUMN 1 - UP */}
          {/* COLUMN 1 */}
          <div className="animate-fade-up">
            <div className="space-y-4 animate-float-up">
              {images.slice(0, 2).map((img, i) => (
                <img key={i} src={img} className="rounded-2xl object-cover" />
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="animate-fade-up animate-fade-up-delay">
            <div className="space-y-4 animate-float-down">
              {images.slice(2, 4).map((img, i) => (
                <img key={i} src={img} className="rounded-2xl object-cover" />
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="space-y-4 animate-float-up">
              {images.slice(4, 6).map((img, i) => (
                <img key={i} src={img} className="rounded-2xl object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beasiswa;
