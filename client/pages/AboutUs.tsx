import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layers, Monitor, Menu, X } from "lucide-react";
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import "swiper/css";

export default function AboutUs() {
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
        className="h-[45vh] md:h-[490px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      >
        {/* CENTER CONTENT */}
        <div className="relative z-20 text-center px-4 sm:px-0">
          <h1
            className="
              text-white font-playfair font-regular leading-none
              text-3xl sm:text-4xl md:text-[60px]
              top-2 md:top-36 relative
              whitespace-normal md:whitespace-nowrap
              md:-ml-6
            "
          >
            About Us
          </h1>

          {/* BREADCRUMB */}
          <div className="mt-6 md:mt-16 flex items-center justify-center gap-2 text-sm text-white/80">
            <a
              href="/"
              className="hover:text-[#CE9162] mt-0 md:mt-36 font-montserrat font-regular transition text-[14px] md:text-[16px] text-white"
            >
              Home
            </a>
            <span className="text-white opacity-60 mt-0 md:mt-36 font-montserrat font-regular text-[14px] md:text-[16px]">›</span>
            <span className="text-white text-[14px] md:text-[16px] mt-0 md:mt-36 font-montserrat font-regular">
              About Us
            </span>
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 h-[45vh] md:h-[490px] bg-black/60 pointer-events-none"></div>

        {/* HEADER */}
        <header className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 sm:h-20">

              {/* Logo (DESKTOP SAME) */}
              <img
                src="/NiketanLogo.png"
                alt="Niketan Logo"
                className="h-[120px] w-auto ml-0 lg:ml-8 lg:w-[232px] sm:h-[160px] lg:h-[250px] mt-6 sm:mt-12 lg:mt-24 p-1 rounded"
              />

              {/* DESKTOP NAV (UNCHANGED) */}
              <div className="ml-auto hidden lg:flex items-center gap-[53px] mt-0 lg:mt-6">
                <nav className="flex items-center gap-[53px] mt-12 font-montserrat">
                  <Link to="/" className="text-xl text-white hover:text-[#CE9162] transition">
                    Home
                  </Link>
                  <Link to="/about-us" className="text-xl text-[#CE9162] hover:text-[#CE9162] transition">
                    About Us
                  </Link>
                  <Link to="/projects" className="text-xl text-white hover:text-[#CE9162] transition">
                    Projects
                  </Link>
                  <a href="#blog" className="text-xl text-white hover:text-[#CE9162] transition">
                    Blog
                  </a>
                  <Link to="/contact-us" className="text-xl text-white hover:text-[#CE9162] transition">
                    Contact Us
                  </Link>
                </nav>

                <a
                  href="tel:+919739856222"
                  className="relative overflow-hidden font-montserrat text-xl px-4 py-3 mt-12 text-white border border-[#CE9162] rounded-lg mr-12 inline-flex items-center gap-2 group"
                >
                  <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[8] transition-transform duration-700"></span>
                  <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-500 group-hover:scale-90">
                    <img src="/call1.png" alt="Call Icon" className="w-5 h-5" />
                    Call Now
                  </span>
                </a>
              </div>

              {/* MOBILE MENU ICON */}
              <button
                onClick={() => setOpen(true)}
                className="ml-auto lg:hidden text-white"
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

      {/* WHO WE ARE */}
      <section className="max-w-9xl mr-3 md:mr-20 ml-3 md:ml-16 mx-auto px-4 sm:px-10 lg:px-10 py-16 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start relative">
            <img
              src="/house.jpg"
              alt="Niketan"
              className="rounded-[6px] shadow-lg
                w-[350px] h-[290px]
                md:w-[576px] md:h-[505px]"
            />

            {/* 35+ YEARS OF EXPERIENCE BADGE */}
            <div
              className="
                absolute
                bottom-4 right-4
                md:bottom-4 md:right-28

                bg-[#CE9162]
                rounded-[8px]
                px-4 py-2
                md:px-5 md:py-6

                flex items-center gap-3 md:gap-4
                shadow-lg
              "
            >
              <span className="text-white text-[36px] md:text-[56px] font-playfair font-medium">
                <img
                      src="/year1.png"
                      alt="year"
                      className="h-[56px] sm:h-[48px] lg:h-[40px] w-auto"
                    />
              </span>

              <span className="text-white text-[13px] md:text-[16px] font-montserrat font-regular leading-tight">
                Years of<br />experience
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mb-0 md:mb-18">

            {/* WHO WE ARE */}
            <p className="
              tracking-widest text-[#CE9162] text-[18px] font-semibold font-montserrat
              mb-4 md:mb-10
              ml-4 md:-ml-6
              mr-4 md:-mr-0
            ">
              WHO WE ARE
            </p>

            {/* HEADING */}
            <h2 className="
              text-3xl sm:text-[30px] lg:text-[50px]
              text-[#2B2B2B] font-playfair font-regular leading-tight
              mb-4 md:mb-10
              ml-4 md:-ml-6
              mr-4 md:-mr-0
            ">
              A Legacy of Trust Since 1989
            </h2>

            {/* PARAGRAPHS */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-[#535353] text-[16px] font-montserrat font-medium leading-relaxed ml-4 md:-ml-6 mr-4 md:-mr-0">
                <span className="font-semibold text-black">
                  Niketan Builders Pvt. Ltd.
                </span>{" "}
                is a trusted name in real estate development, known for creating
                thoughtfully designed residential and commercial spaces that stand
                the test of time. With over 35+ years of legacy, we have played a key
                role in shaping the urban landscape of Hubballi, Dharwad, and
                Bengaluru. Every project reflects our commitment to quality,
                functionality, modern design, and customer satisfaction.
              </p>

              <p className="text-[#535353] font-medium font-montserrat text-[16px] leading-relaxed ml-4 md:-ml-6 mr-4 md:-mr-0">
                Founded with a vision to deliver reliable and value-driven
                developments, Niketan Builders has consistently delivered projects
                that blend architectural excellence with practical living. From land
                development to premium apartments and commercial complexes, our work
                is driven by integrity, innovation, and attention to detail—earning
                the trust of generations of homeowners and businesses.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/*Purpose and Vision*/}
      <section
        ref={sectionRef} 
        className="bg-[#FEFFF8] relative py-10 md:py-18 -mt-8 md:mt-10"
      >


        {/* Heading */}
        <h2
          className={`
            text-center text-[#2B2B2B]
            text-[30px] md:text-[50px]
            font-playfair font-medium
            mb-6 md:mb-20
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          Our Purpose & Vision
        </h2>

        {/* Cards */}
        <div
          className="
            max-w-[1400px] mx-auto
            grid grid-cols-1 md:grid-cols-3
            gap-10 md:gap-16
            px-4 lg:px-2
            text-center
          "
        >

          {/* Mission */}
          <div
            className={`
              transition-all duration-700 delay-100 ease-out ml-4 md:-ml-0 mr-4 md:-mr-0 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <div className="
              w-32 h-32 md:w-36 md:h-36
              mx-auto
              mb-4 md:mb-10
              rounded-full
              border-[3px] border-[#CE9162]
              flex items-center justify-center
              transition-all duration-300 ease-out
              hover:scale-110 hover:shadow-lg
            ">
              <img
                src="/purpose1.png"
                alt="Our Mission"
                className="w-[130px] h-[130px] md:w-[161px] md:h-[161px] object-contain"
              />
            </div>

            <h3 className="text-[26px] md:text-[30px] text-[#2B2B2B] font-prata font-regular mb-4 md:mb-6">
              Our Mission
            </h3>

            <p className="text-[#535353] leading-relaxed text-[15px] md:text-[16px] font-montserrat font-regular max-w-sm mx-auto">
              Our mission is to create high-quality living and
              working spaces that enhance everyday life through
              superior construction standards, trusted materials,
              transparent processes, and timely delivery—ensuring
              long-term value for our customers.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`
              transition-all duration-700 delay-200 ease-out ml-4 md:-ml-0 mr-4 md:-mr-0 -mt-4 md:mt-0
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <div className="
              w-32 h-32 md:w-36 md:h-36
              mx-auto
              mb-4 md:mb-10
              rounded-full
              border-[3px] border-[#CE9162]
              flex items-center justify-center
              transition-all duration-300 ease-out
              hover:scale-110 hover:shadow-lg
            ">
              <img
                src="/purpose2.png"
                alt="Our Vision"
                className="w-[130px] h-[130px] md:w-[161px] md:h-[161px] object-contain"
              />
            </div>

            <h3 className="text-[26px] md:text-[30px] text-[#2B2B2B] font-prata font-regular mb-4 md:mb-6">
              Our Vision
            </h3>

            <p className="text-[#535353] leading-relaxed text-[15px] md:text-[16px] font-montserrat font-regular max-w-sm mx-auto">
              We envision setting benchmarks in real estate by creating sustainable,
              aesthetically refined, and future-ready spaces that combine comfort,
              elegance, innovation, and lasting value while contributing positively
              to the cities we build in.
            </p>
          </div>

          {/* Values */}
          <div
            className={`
              transition-all duration-700 delay-300 ease-out ml-4 md:-ml-0 mr-4 md:-mr-0 -mt-4 md:mt-0
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <div className="
              w-32 h-32 md:w-36 md:h-36
              mx-auto
              mb-4 md:mb-10
              rounded-full
              border-[3px] border-[#CE9162]
              flex items-center justify-center
              transition-all duration-300 ease-out
              hover:scale-110 hover:shadow-lg
            ">
              <img
                src="/purpose3.png"
                alt="Our Values"
                className="w-[130px] h-[130px] md:w-[161px] md:h-[161px] object-contain"
              />
            </div>

            <h3 className="text-[26px] md:text-[30px] text-[#2B2B2B] font-prata font-regular mb-4 md:mb-6">
              Our Values
            </h3>

            <p className="text-[#535353] leading-relaxed text-[15px] md:text-[16px] font-montserrat font-regular max-w-sm mx-auto">
              Our values guide every project we undertake,
              focusing on integrity, excellence, innovation,
              customer satisfaction, and sustainable practices
              ensuring spaces that are reliable, efficient, and
              future-ready for all who live and work in them.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 md:py-32 bg-[#FFFEFD]">
        <div className="max-w-[1400px] mx-auto px-4">

          {/* TOP HEADING */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center text-[18px] tracking-widest text-[#CE9162] font-montserrat font-semibold mb-6"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-[30px] md:text-5xl font-playfair font-regular text-center mb-6"
          >
            Where Legacy Meets Modern Living
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center text-[16px] text-[#7D7D7D]
                      max-w-4xl mx-auto mb-14
                      px-4 md:px-0
                      font-montserrat font-regular"
          >
            Every Niketan home reflects superior craftsmanship, customer-focused design,
            and a commitment to building spaces that offer comfort, elegance,
            and lasting value.
          </motion.p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="
                bg-white rounded-3xl border-8 border-[#FFF1E6]
                ring-1 ring-[#F6D6BF]/40
                min-h-[320px] md:min-h-[400px]
                flex flex-col justify-center items-center
                text-center
                p-8 md:p-12
                shadow-sm hover:shadow-lg transition
                max-w-full md:max-w-[450px]
                mx-2
              "
            >
              <img
                src="/year.png"
                alt="Year of Experience"
                className="
                  w-[70px] h-[70px]
                  mb-6
                  object-contain
                  scale-150
                "
              />

              <h4 className="text-[22px] md:text-[26px] font-montserrat font-medium text-[#2B2B2B] mb-4">
                Years of <br /> Experience
              </h4>

              <p className="text-[15px] md:text-[16px] text-[#7D7D7D] font-montserrat leading-relaxed">
                Decades of expertise in delivering residential and commercial
                spaces with consistent quality.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="
                bg-white rounded-3xl border-8 border-[#FFF1E6]
                ring-1 ring-[#F6D6BF]/40
                min-h-[320px] md:min-h-[400px]
                flex flex-col justify-center items-center
                text-center
                p-8 md:p-12
                shadow-sm hover:shadow-lg transition
                max-w-full md:max-w-[450px]
                mx-2
              "
            >
              <img
                src="/architecture1.png"
                alt="Top Brand Materials"
                className="w-[80px] h-[80px] mb-6 object-contain"
              />

              <h4 className="text-[22px] md:text-[26px] font-montserrat font-medium text-[#2B2B2B] mb-4">
                Top-Brand Construction Materials
              </h4>

              <p className="text-[15px] md:text-[16px] text-[#7D7D7D] font-montserrat leading-relaxed">
                Trusted industry-leading brands used to ensure durability,
                safety, and long-term value.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="
                bg-white rounded-3xl border-8 border-[#FFF1E6]
                ring-1 ring-[#F6D6BF]/40
                min-h-[320px] md:min-h-[400px]
                flex flex-col justify-center items-center
                text-center
                p-8 md:p-12
                shadow-sm hover:shadow-lg transition
                max-w-full md:max-w-[450px]
                mx-2
              "
            >
              <img
                src="/architecture2.png"
                alt="Technology Driven Construction"
                className="w-[80px] h-[80px] mb-6 object-contain"
              />

              <h4 className="text-[22px] md:text-[26px] font-montserrat font-medium text-[#2B2B2B] mb-4">
                Technology-Driven <br /> Construction
              </h4>

              <p className="text-[15px] md:text-[16px] text-[#7D7D7D] font-montserrat leading-relaxed">
                Modern construction methods and quality control processes
                for precision and efficiency.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-10 md:mt-0 relative py-20 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden cta-bg">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto relative z-10 text-center">

          <h2 className="text-[34px] sm:text-[60px] text-center font-playfair font-medium mb-6 sm:mb-4 text-[#FFFFFF] leading-tight">
            Ready to Find Your <br className="hidden sm:block" />
            Perfect Home?
          </h2>

          <p className="text-[16px] sm:text-[18px] font-montserrat font-medium text-[#DADADA] mb-8 sm:mb-10 leading-relaxed">
            Discover thoughtfully designed homes built with quality, comfort,
            <br className="hidden sm:block" />
            and long-term value at the heart of every Niketan project.
          </p>

          <Link to="/contact-us">
          <button className="inline-flex items-center gap-2 px-6 sm:px-3 py-3 sm:py-4 bg-[#CE9162] border border-[#CE9162] text-[16px] sm:text-[18px] text-white font-montserrat font-medium rounded-lg hover:bg-transparent hover:text-[#CE9162] transition">
            Book a Site Visit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
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
          <div className="border-t border-[#747474] pt-6 md:pt-8 mt-0 md:mt-[-55px] relative md:top-8">
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
