import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Layers, Monitor, Menu, X } from "lucide-react";
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import "swiper/css";

export default function ViewProjectDetailsEmerald() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);
  
  return (
    <div className="bg-[#FFFEFD]">

      {/* HERO */}
      <section
        className="h-[45vh] md:h-[175px] bg-cover bg-center flex items-center justify-center"
      >

        {/* HEADER */}
        <header className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 sm:h-20">

              {/* Logo (DESKTOP SAME) */}
              <img
                src="/NiketanLogo.png"
                alt="Niketan Logo"
                className="h-[120px] w-auto ml-4 lg:ml-12 lg:w-[232px] sm:h-[160px] lg:h-[250px] mt-14 sm:mt-12 lg:mt-24 p-1 rounded"
              />

              {/* DESKTOP NAV (UNCHANGED) */}
              <div className="ml-auto hidden lg:flex items-center gap-[53px] mt-0 lg:mt-6">
                <nav className="flex items-center gap-[53px] mt-12 font-montserrat">
                  <Link to="/" className="text-xl text-[#2B2B2B] hover:text-[#CE9162] transition">
                    Home
                  </Link>
                  <Link to="/about-us" className="text-xl text-[#2B2B2B] hover:text-[#CE9162] transition">
                    About Us
                  </Link>
                  <Link to="/projects" className="text-xl text-[#CE9162] hover:text-[#CE9162] transition">
                    Projects
                  </Link>
                  <a href="#blog" className="text-xl text-[#2B2B2B] hover:text-[#CE9162] transition">
                    Blog
                  </a>
                  <Link to="/contact-us" className="text-xl text-[#2B2B2B] hover:text-[#CE9162] transition">
                    Contact Us
                  </Link>
                </nav>

                <a
                  href="tel:+919739856222"
                  className="relative overflow-hidden font-montserrat text-xl px-4 py-3 mt-12 text-[#2B2B2B] border border-[#CE9162] rounded-lg mr-12 inline-flex items-center gap-2 group"
                >
                  <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[8] transition-transform duration-700"></span>
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <img src="/call2.png" alt="Call Icon" className="w-5 h-5" />
                    Call Now
                  </span>
                </a>
              </div>

              {/* MOBILE MENU ICON */}
              <button
                onClick={() => setOpen(true)}
                className="ml-auto lg:hidden text-black mt-14 mr-4"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>

          {/* MOBILE NAV */}
          {open && (
            <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center gap-8 text-white">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6"
              >
                <X size={32} />
              </button>

              <Link onClick={() => setOpen(false)} to="/" className="text-2xl">Home</Link>
              <Link onClick={() => setOpen(false)} to="/about-us" className="text-2xl">About Us</Link>
              <Link onClick={() => setOpen(false)} to="/projects" className="text-2xl">Projects</Link>
              <a onClick={() => setOpen(false)} href="#blog" className="text-2xl">Blogs</a>
              <Link onClick={() => setOpen(false)} to="/contact-us" className="text-2xl">Contact Us</Link>

              <a
                href="tel:+919739856222"
                className="mt-6 px-8 py-3 border border-[#CE9162] rounded-lg text-lg"
              >
                Call Now
              </a>
            </div>
          )}
        </header>
      </section>

      <section className="bg-[#FFFEFD] py-0 md:py-28 -mt-64 md:mt-0 mb-16 md:mb-14">
        <div className="max-w-8xl mx-auto px-4 md:px-6">

            {/* TOP CONTENT */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div>
                <p className="tracking-widest text-[18px] -mt-4 font-montserrat font-semibold text-[#CE9162] uppercase ml-4 md:ml-20">
                Raj Nagar, Hubballi
                </p>

                <h2 className="font-playfair mt-4 text-[36px] md:text-[50px] text-[#2B2B2B] font-medium leading-tight ml-4 md:ml-20">
                Niketan Platinum
                </h2>
            </div>

            {/* RIGHT */}
            <div className="text-[#CE9162] font-playfair -mt-4 text-[40px] md:text-[70px] uppercase font-medium leading-relaxed space-y-6 ml-4 md:-ml-42 mr-4 md:mr-24">
                <p>
                 coming Soon...
                </p>
            </div>
            </div>
        </div>
        </section>

        {/* Footer */}
        <footer
            id="contact"
            className="bg-[#212121] text-white py-6 md:py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-8xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">

                {/* Logo + About */}
                <div className="flex flex-col px-2 md:px-6 text-center md:text-left">

                <img
                    src="/NiketanLogo.png"
                    alt="Niketan Logo"
                    className="h-34 md:h-[250px] w-[180px] md:w-[232px] -mt-6 md:mt-0 mb-4 mx-auto md:mx-0 relative md:-top-3"
                />

                <p className="text-[#DADADA] leading-relaxed text-[16px] font-montserrat font-regular px-2 md:px-4 -mt-10 md:-mt-0 relative md:-top-16">
                    Building quality residential and commercial spaces with trust,
                    integrity, and attention to detail since 1989.
                </p>

                <div className="flex justify-center md:justify-start gap-4 mt-6 text-3xl px-2 md:px-4 relative md:-top-16">
                  <a
                    href="https://www.facebook.com/people/Niketan-Builders/61572748175886/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="cursor-pointer transition hover:text-[#CE9162] hover:-translate-y-1" />
                  </a>

                  <a
                    href="https://www.instagram.com/niketanbuilderspvtltd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="cursor-pointer transition hover:text-[#CE9162] hover:-translate-y-1" />
                  </a>

                  <a
                    href="https://x.com/niketan%20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="cursor-pointer transition hover:text-[#CE9162] hover:-translate-y-1" />
                  </a>
                </div>

                </div>

                {/* Quick Links */}
                <div className="mt-4 md:mt-20 ml-0 md:ml-10 text-center md:text-left">
                <h4 className="font-medium font-montserrat text-[18px] mb-4">Quick Links</h4>
                <ul className="space-y-3 font-montserrat font-regular text-[16px] text-[#DADADA]">
                    <li>
                <a href="/about-us" className="hover:text-white hover:underline transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/projects" className="hover:text-white hover:underline transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="/blog" className="hover:text-white hover:underline transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="/contact-us" className="hover:text-white hover:underline transition">
                  Contact Us
                </a>
              </li>
                </ul>
                </div>

                {/* Address */}
                <div className="mt-4 md:mt-20 ml-0 md:-ml-16 text-center md:text-left">
                <h4 className="font-medium font-montserrat text-[18px] mb-4">Address</h4>
                <p className="text-[#DADADA] leading-relaxed font-montserrat font-regular text-[16px]">
                    <span className="block font-bold font-montserrat text-[16px] text-white mb-2">
                    Head Office:
                    </span>
                    1st Floor, Niketan’s Dollars Heights,<br />
                    Dollars Colony, Behind New Bus Stand,<br />
                    Gokul Road, Hubballi – 580030
                </p>
                </div>

                {/* Phone */}
                <div className="mt-4 md:mt-20 text-center md:text-left">

                <div className="flex justify-center md:justify-start items-start gap-3 mb-4">
                    <img src="/call.png" alt="Phone Icon" className="w-5 h-5 mt-1" />
                    <h4 className="font-medium font-montserrat text-[18px]">Phone</h4>
                </div>

                <p className="text-[#DADADA] leading-relaxed text-[16px] font-montserrat font-medium md:text-base">
                <a href="tel:+919739856222" className="hover:text-[#DADADA] hover:underline transition">
                  +91 97398 56222
                </a>{" "} |{" "}
                <a href="tel:+919513661236" className="hover:text-[#DADADA] hover:underline transition">
                  +91 95136 61236
                </a>
                <br />

                <a href="tel:+919449838811" className="hover:text-[#DADADA] hover:underline transition">
                  +91 94498 38811
                </a>{" "} |{" "}
                <a href="tel:+919448270209" className="hover:text-[#DADADA] hover:underline transition">
                  +91 94482 70209
                </a>
                <br />

                <a href="tel:+919986789067" className="hover:text-[#DADADA] hover:underline transition">
                  +91 99867 89067
                </a>
                </p>

                {/* EMAIL HEADING */}
                <div className="flex items-center justify-center md:justify-start gap-2 mt-8">
                    <img src="/email.png" alt="Email Icon" className="w-5 h-5 mt-8 -mb-6" />
                    <h4 className="font-medium font-montserrat text-[18px] mt-8 -mb-6">
                    Email
                    </h4>
                </div> 

                <div className="flex justify-center md:justify-start items-start font-montserrat font-medium gap-3 mt-10">
                <a
                  href="mailto:niketanproperties2019@gmail.com"
                  className="hover:text-[#DADADA] hover:underline transition"
                >
                  niketanproperties2019@gmail.com
                </a>
                </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#747474] pt-6 md:pt-8 mt-0 md:mt-[-65px] relative md:top-8">
                <p className="text-center text-[#DADADA] text-[12px] font-montserrat font-regular -mt-4">
                © 2026 Niketan Builders. All Rights Reserved.
                <span className="block sm:inline">
                    {" "}Designed By Spitel
                </span>
                </p>
            </div>
            </div>
        </footer>
    </div>
  );
}