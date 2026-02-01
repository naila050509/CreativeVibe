import React from "react";
import { Award, Heart, Target, Users } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-[#FFFDF8] py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADER */}
        <div className="mb-16">
          <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center animate-sway">
            <Award className="w-7 h-7 text-indigo-500" />
          </div>

          <h3 className="text-4xl font-extrabold text-slate-800">
            Nilai-Nilai Kami
          </h3>

          <p className="mt-4 text-slate-500">
            Prinsip yang menjadi fondasi dalam setiap langkah CreativeVibe
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-orange-400 to-orange-500 p-10 text-white shadow-xl transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl">
            {/* ICON BELAKANG */}
            <div className="absolute right-6 top-6 opacity-10 animate-float-rotate">
              <Heart className="w-28 h-28" />
            </div>

            {/* ICON DEPAN */}
            <div className="w-14 h-14 mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
              <Heart className="w-7 h-7" />
            </div>

            <h4 className="text-2xl font-bold">Kreativitas</h4>
            <p className="mt-3 text-white/90 leading-relaxed">
              Mendorong ide-ide baru dan solusi kreatif dalam dunia pendidikan.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-400 to-green-500 p-10 text-white shadow-xl transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl">
            {/* ICON BELAKANG */}
            <div className="absolute right-6 top-6 opacity-10 animate-float-rotate">
              <Target className="w-28 h-28" />
            </div>

            {/* ICON DEPAN */}
            <div className="w-14 h-14 mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>

            <h4 className="text-2xl font-bold">Pengembangan Diri</h4>
            <p className="mt-3 text-white/90 leading-relaxed">
              Membantu pelajar mengenali potensi dan merencanakan masa depan.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 p-10 text-white shadow-xl transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl">
            {/* ICON BELAKANG */}
            <div className="absolute right-6 top-6 opacity-10 animate-float-rotate">
              <Users className="w-28 h-28" />
            </div>

            {/* ICON DEPAN */}
            <div className="w-14 h-14 mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>

            <h4 className="text-2xl font-bold">Kolaborasi</h4>
            <p className="mt-3 text-white/90 leading-relaxed">
              Membangun ekosistem belajar yang saling mendukung dan inklusif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
