import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Logo from "../assets/images/Logo-2.png";
import prop7 from "../assets/images/beasiswa-1.jpg";
import prop8 from "../assets/images/beasiswa-2.jpg";

const Footer = () => {
  return (
    <>
      <footer className="w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 bg-gray-900 text-gray-800">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="flex items-center gap-2 text-white text-2xl font-semibold">
            <img src={Logo} alt="logo" className="w-7 h-7 object-contain" />
            <span>CreativeVibe</span>
          </h1>
          <p className="text-slate-200 text-justify">
            Satu Potensi, Banyak Peluang 
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="p-3 rounded-xl bg-white hover:bg-indigo-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebook />
            </div>
            </a>
            <a
            href="https://www.instagram.com/smk.budiluhur/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="p-3 rounded-xl bg-white hover:bg-indigo-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram />
            </div>
            </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="p-3 rounded-xl bg-white hover:bg-indigo-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter />
            </div>
            </a>
            <a
            href="https://www.youtube.com/@smkbudiluhurchannel4019"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="p-3 rounded-xl bg-white hover:bg-indigo-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube />
            </div>
            </a>
          </div>
          <h1 className="text-white mt-8">
            © 2026 CreativeVibe. Satu Potensi, Banyak Peluang. All rights reserved.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-xl font-semibold">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaBuilding className="text-white" />
              <span className="text-slate-200">
                Jalan Raden Saleh No. 999, Karang Tengah, Ciledug, Kota
                Tangerang
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMobile className="text-white" />
              <span className="text-slate-200">+62 882 8973 4711</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFax className="text-white" />
              <span className="text-slate-200">021-73455777 </span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-white" />
              <span className="text-slate-200"> smk@budiluhur.sch.id</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest News</h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt="news1"
              className="w-[280px] h-[200px] md:w-[250px] md:h-[135px] object-cover rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-white">Beasiswa Kreatif 2024</h1>
              <p className="text-slate-400">
                Beasiswa Kreatif 2024 telah dibuka untuk pelajar berprestasi.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt="news1"
              className="w-[280px] h-[200px] md:w-[250px] md:h-[135px] object-cover rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-white">Beasiswa Kreatif 2024</h1>
              <p className="text-slate-400">
                Beasiswa Kreatif 2024 telah dibuka untuk pelajar berprestasi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
