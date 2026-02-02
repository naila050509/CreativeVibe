import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Home/Hero";
import ChatAI from "./components/ChatAI";
import Preview from "./sections/Home/Preview";
import Registered from "./sections/Home/Registered";
import CreativeVibe from "./sections/Home/CreativeVibe";
import Footer from "./components/Footer";
import About from "./sections/About/About";
import Schedule from "./sections/Schedule/TimeLine";
import Contact from "./sections/Contact/ContactInfo";
import FAQ from "./sections/FAQ/FAQ";

const App = () => {
  return (
    <BrowserRouter>
  <Header />

  <main className="pt-[88px]">
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* HERO + CHAT */}
            <div className="relative">
              <Hero />

              {/* BAR AI NEMPEL HERO */}
              <div className="
                absolute
                left-1/2 -translate-x-1/2
                bottom-[-32px]
                w-full max-w-[900px]
                px-4
                z-30
              ">
                <ChatAI />
              </div>
            </div>

            {/* KONTEN SETELAH HERO */}
            <div className="mt-24">
              <Preview />
              <Registered />
              <CreativeVibe />
            </div>
          </>
        }
      />

      {/* HALAMAN FAQ */}
      <Route path="/faq" element={<FAQ />} />
      {/* HALAMAN FAQ */}
      <Route path="/about" element={<About />} />
      {/* HALAMAN CONTACT */}
      <Route path="/contact" element={<Contact />} />
      {/* HALAMAN CONTACT */}
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  </main>

  <Footer />
</BrowserRouter>

  );
};

export default App;
