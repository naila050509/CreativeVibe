import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import banner from "../../assets/images/banner_SMK.png";

const ContactInfo = () => {
  return (
    <section className="bg-indigo-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-extrabold text-slate-800"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            Contact <span className="text-indigo-500">Us</span>
          </h2>
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
        </div>

        {/* FORM + NEWSLETTER */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* CONTACT FORM */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-md">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 rounded-xl bg-indigo-50 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-5 py-3 rounded-xl bg-indigo-50 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-3 rounded-xl bg-indigo-50 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-5 py-3 rounded-xl bg-indigo-50 outline-none"
              />

              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition">
                Submit Button
              </button>
            </form>
          </div>

          {/* NEWSLETTER */}
          <div
            className="relative rounded-3xl p-8 text-white shadow-md overflow-hidden"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-indigo-900/80" />

            {/* content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Our Newsletters</h3>
              <p className="text-white/90 text-sm mb-6">
                Dapetin update beasiswa terbaru, tips pendidikan, dan insight
                jurusan langsung ke email kamu.
              </p>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl text-indigo-100 mb-4"
              />

              <button className="w-full bg-indigo-800 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Submit Button
              </button>
            </div>
          </div>
        </div>

        {/* CONTACT INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <div className="bg-indigo-600 text-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Phone className="mb-3" />
            <p className="font-semibold"> 021-73455777 </p>
            <p className="text-sm text-white/80">
              Hubungi kami untuk info & bantuan lebih lanjut
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-indigo-600 hover:text-white group">
            <Mail className="mb-3 text-indigo-600 group-hover:text-white" />
            <p className="font-semibold">smk@budiluhur.sch.id</p>
            <p className="text-sm text-slate-600 group-hover:text-white/80">
              Kirim pertanyaan atau kerja sama via email
            </p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-indigo-600 hover:text-white group">
            <MapPin className="mb-3 text-indigo-600 group-hover:text-white" />
            <p className="font-semibold">SMK Budi Luhur</p>
            <p className="text-sm text-slate-600 group-hover:text-white/80">
              Jalan Raden Saleh No. 999, Karang Tengah, Ciledug, Kota Tangerang,
              Banten 15157, Indonesia.
            </p>
          </div>
        </div>

        {/* MAP */}
        <div className="relative w-full h-[320px] md:h-[400px] rounded-3xl shadow-md">
          <iframe
            title="map"
            className="absolute inset-0 w-full h-full rounded-3xl border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.2281420130926!2d106.70646040000001!3d-6.219354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f90063dc36f1%3A0xaecf8826be91cea9!2sSMK%20Budi%20Luhur%20Kota%20Tangerang!5e1!3m2!1sid!2sid!4v1769939148817!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
