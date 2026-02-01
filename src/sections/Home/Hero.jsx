import { useEffect, useRef, useState } from "react";
import heroimg from "../../assets/images/banner_SMK.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Beasiswa from "../FAQ/Beasiswa";

const Hero = () => {
  const subRef = useRef(null);
  const [showSub, setShowSub] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-out",
      offset: 0,
      once: false,
    });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setShowSub(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (subRef.current) obs.observe(subRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* TITLE (always visible) */}
      <h1
        data-aos="zoom-in"
        className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
      >
        Build Your Creative Future Here!
      </h1>

      {/* INVISIBLE TRIGGER AREA */}
      <div ref={subRef} className="h-[1px] w-full"></div>

      {/* SUBTEXT */}
      <div
        className={`transition-all duration-500 ${
          showSub ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-white text-xl lg:pr-[500px] pr-0 mb-3">
          Where ideas, technology, and creativity grow together.
        </p>
      </div>

    </section>
  );
};

export default Hero;
