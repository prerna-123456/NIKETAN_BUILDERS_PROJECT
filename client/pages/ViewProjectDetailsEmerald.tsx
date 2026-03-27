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
  const [showMore, setShowMore] = useState(false);

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
                  className="relative overflow-hidden font-montserrat text-xl px-4 py-3 mt-12 text-[#2B2B2B] hover:text-white border border-[#CE9162] rounded-lg mr-12 inline-flex items-center gap-2 group"
                >
                  <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[8] transition-transform duration-700"></span>
                  <span className="relative z-10 inline-flex items-center gap-2 group">
                <img
                    src="/call2.png"
                    alt="Call Icon"
                    className="w-5 h-5
                    transition duration-300
                    group-hover:brightness-0
                    group-hover:invert"
                />
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

      <section className="bg-[#FFFEFD] py-0 md:py-24 -mt-64 md:mt-0">
        <div className="max-w-8xl mx-auto px-4 md:px-6">

            {/* TOP CONTENT */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div>
                <p className="tracking-widest text-[18px] -mt-4 font-montserrat font-semibold text-[#CE9162] uppercase ml-4 md:ml-20">
                Keshwapur, Hubballi
                </p>

                <h2 className="font-playfair mt-4 text-[36px] md:text-[50px] text-[#2B2B2B] font-medium leading-tight ml-4 md:ml-20">
                Niketan Emerald
                </h2>
            </div>

            {/* RIGHT */}
            <div className="text-[#5F5F5F] font-montserrat -mt-4 text-[18px] font-medium leading-relaxed space-y-6 ml-4 md:-ml-60 mr-4 md:mr-24">
                <p>
                <span className="font-semibold text-[#2B2B2B]">
                    Niketan Emerald
                </span>{" "}
                is a premium residential development located at Kothari Layout, Opp. 
                Grand Lawns and Naveen Park, Kusugal Road, Keshwapur, Hubballi. 
                Designed for families who value luxury, privacy, and connectivity, 
                the project offers {" "}
                <span className="font-semibold text-[#2B2B2B]">
                     3 BHK, 3.5 BHK, and 4 BHK
                </span>  luxury apartments.
                </p>

                <p>
                Each home is planned with modern layouts, 
                ample natural light, cross ventilation, 
                and Vastu-compliant design, ensuring a 
                perfect balance of elegance and functionality.
                </p>
            </div>
            </div>

            {/* BOTTOM DETAILS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mt-12 md:mt-28 ml-4 md:ml-20">

            {/* Property Size */}
            <div className="flex items-start gap-4">
                <img src="/property.png" alt="" className="w-14 h-14 md:mr-2" />
                <div>
                <p className="font-montserrat text-[18px] text-[#000000] font-medium md:mb-2">
                    Property Size
                </p>
                <p className="text-[#000000] text-[15px]">-</p>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-start gap-4">
                <img src="/price.png" alt="" className="w-14 h-14 md:mr-2" />
                <div>
                <p className="font-montserrat text-[18px] text-[#000000] font-medium md:mb-2">
                    Price Range
                </p>
                <p className="text-[#000000] text-[16px] font-montserrat font-regular">
                    1.65 – 2.90 CR
                </p>
                </div>
            </div>

            {/* Type */}
            <div className="flex items-start gap-4">
                <img src="/apartment.png" alt="" className="w-14 h-14 md:mr-2" />
                <div>
                <p className="font-montserrat text-[18px] text-[#000000] font-medium md:mb-2">
                    Type
                </p>
                <p className="text-[#000000] text-[16px] font-montserrat font-regular">
                    Apartment
                </p>
                </div>
            </div>

            {/* Flat Size */}
            <div className="flex items-start gap-4">
                <img src="/flat.png" alt="" className="w-14 h-14 md:mr-2" />
                <div>
                <p className="font-montserrat text-[18px] text-[#000000] font-medium md:mb-2">
                    Flat Size
                </p>
                <p className="text-[#000000] text-[16px] font-montserrat font-regular">
                    1,900 – 3,200 SQFT
                </p>
                </div>
            </div>

            {/* Status */}
            <div className="flex items-start gap-4">
                <img src="/status.png" alt="" className="w-14 h-14 md:mr-2" />
                <div>
                <p className="font-montserrat text-[18px] text-[#000000] font-medium md:mb-2">
                    Status
                </p>
                <p className="text-[#000000] text-[16px] font-montserrat font-regular">
                    Ongoing
                </p>
                </div>
            </div>

            </div>
        </div>
        </section>

        {/* Photos Section */}
        <section className="w-full bg-white py-16 px-4 mt-4 md:-mt-14">
        
        {/* TOP GRID — SAME AS BEFORE */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* BIG IMAGE 1 */}
            <div className="lg:col-span-2 lg:w-[635px] lg:h-[503px] rounded-2xl overflow-hidden bg-gray-300 ml-0 md:ml-20">
            <img src="/image1.jpg" className="w-full h-full object-cover" />
            </div>

            {/* BIG IMAGE 2 */}
            <div className="lg:col-span-1 lg:w-[327px] lg:h-[503px] rounded-2xl -mt-3 md:mt-0 overflow-hidden bg-gray-300 ml-0 md:-ml-6">
            <img src="/image2.jpg" className="w-full h-full object-cover" />
            </div>

            {/* RIGHT SMALL IMAGES */}
            <div className="lg:col-span-1 flex flex-col gap-6">

            {/* SMALL IMAGE TOP */}
            <div className="lg:w-[357px] lg:h-[247px] rounded-2xl -mt-3 md:mt-0 overflow-hidden bg-gray-300 ml-0 md:-ml-16">
                <img src="/image3.jpg" className="w-full h-full object-cover" />
            </div>

            {/* VIEW ALL */}
            <div className="relative lg:w-[357px] h-[247px] rounded-[16px] overflow-hidden ml-0 md:-ml-16 -mt-3 md:-mt-4">
                <img
                src="/image4.jpg"
                alt="Bedroom"
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                />

                <button
                onClick={() => setShowMore(!showMore)}
                className="absolute inset-0 flex items-center justify-center gap-2 text-white text-[20px] hover:text-[#CE9162] font-montserrat font-medium transition"
                >
                {showMore ? "Hide Photos" : "View All Photos"}
                <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                    showMore ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                />
                </button>
            </div>

            </div>
        </div>

        <div
            className={`
                overflow-hidden -mt-1
                transition-all duration-700 ease-out
                ${showMore ? "max-h-[1200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-6"}
            `}
            >
            <div className="max-w-8xl mx-auto mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 -ml-4 md:ml-16 -mr-4 md:mr-20">
                {/* SECOND IMAGE → FIRST */}
                <div className="lg:col-span-1 lg:w-[327px] lg:h-[503px] rounded-2xl overflow-hidden">
                <img src="/image2.jpg" className="w-full h-full object-cover" />
                </div>

                {/* SMALL IMAGES */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="lg:w-[317px] lg:h-[247px] rounded-2xl -mt-3 md:mt-0 overflow-hidden md:ml-1">
                    <img src="/image3.jpg" className="w-full h-full object-cover" />
                </div>

                <div className="lg:w-[317px] lg:h-[247px] rounded-2xl overflow-hidden -mt-3 md:-mt-4 md:ml-1">
                    <img src="/image4.jpg" className="w-full h-full object-cover" />
                </div>
                </div>

                {/* FIRST IMAGE → LAST */}
                <div className="lg:col-span-2 lg:w-[678px] lg:h-[503px] rounded-2xl -mt-3 md:mt-0 overflow-hidden">
                <img src="/image1.jpg" className="w-full h-full object-cover" />
                </div>
            </div>
            </div>
            </section>

            {/* 3 BHK */}
            <section className="w-full px-4 sm:px-6 md:px-12 py-2 md:py-20 bg-white">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                {/* LEFT SIDE */}
                <div className="flex flex-col gap-6 items-center md:items-start">

                {/* TITLE — IMAGE KE UPAR */}
                <h2 className="
                    text-[36px] sm:text-[42px] md:text-[50px]
                    font-montserrat font-semibold text-[#2B2B2B]
                    text-center md:text-left
                    ml-0 md:ml-20
                    -mt-4 md:mt-0
                ">
                    3 BHK
                </h2>

                {/* IMAGE */}
                <img
                    src="emerald-3bhk.png"
                    alt="2 BHK Plan"
                    className="
                    w-full max-w-md md:max-w-full
                    object-contain
                    ml-0 md:ml-16
                    -mt-8 md:-mt-10
                    "
                />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="
                flex flex-col gap-8 md:gap-10
                mt-10 md:mt-28
                ml-0 md:ml-24
                ">

                {/* ICON INFO */}
                <div className="flex flex-col sm:flex-row gap-8 md:gap-16 -mt-10 md:-mt-0 ml-4 md:ml-0">

                    <div className="flex items-center gap-4 md:gap-6">
                    <img src="/flat.png" className="w-12 h-12 md:w-14 md:h-14" />
                    <div>
                        <p className="font-medium font-montserrat text-[#000000] text-[16px] md:text-[18px]">
                        Flat Size
                        </p>
                        <p className="text-[14px] md:text-[16px] text-[#000000] font-montserrat font-regular mt-1 md:mt-2">
                        1,900 - 2,200 SQFT
                        </p>
                    </div>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src="/price.png" className="w-12 h-12 md:w-14 md:h-14" />
                    <div>
                        <p className="font-medium font-montserrat text-[#000000] text-[16px] md:text-[18px]">
                        Price Range
                        </p>
                        <p className="text-[14px] md:text-[16px] text-[#000000] font-montserrat font-regular mt-1 md:mt-2">
                        1.69 - 1.95 CR.
                        </p>
                    </div>
                    </div>

                </div>

                {/* DESCRIPTION */}
                <p className="
                    text-[#535353] leading-relaxed
                    max-w-full md:max-w-lg
                    font-montserrat font-regular
                    text-[14px] md:text-[16px]
                    text-start md:text-left
                    ml-4 md:ml-0 mr-4 md:mr-0
                ">
                    Experience premium 3 BHK residences designed for elevated living, 
                    where space, comfort, and design come together seamlessly.
                </p>

                {/* POINTS */}
                <ul className="space-y-4 text-[#000000] font-montserrat font-regular text-[16px] md:text-[18px] ml-4 md:ml-0 mr-4 md:mr-0">
                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Specious Layouts</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Vastu-compliant planning</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>High-quality finishes</span>
                    </li>
                </ul>

                </div>
            </div>
            </section>

            {/* 3.5 BHK */}
            <section className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-8 bg-white ml-4 md:ml-0 mr-4 md:mr-0">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                {/* LEFT SIDE */}
                <div className="flex flex-col gap-6 items-center md:items-start">

                {/* TITLE — IMAGE KE UPAR */}
                <h2
                    className="
                    text-[36px] sm:text-[42px] md:text-[50px]
                    font-montserrat font-semibold text-[#2B2B2B]
                    text-center md:text-left
                    ml-0 md:ml-20
                    -mt-4 md:mt-0
                    "
                >
                    3.5 BHK
                </h2>

                {/* IMAGE */}
                <img
                    src="emerald-3.5bhk1.jpeg"
                    alt="3 BHK Plan"
                    className="
                    w-full max-w-md md:max-w-full
                    object-contain
                    ml-0 md:ml-16
                    -mt-2 md:-mt-10
                    "
                />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div
                className="
                    flex flex-col gap-8 md:gap-10
                    mt-10 md:mt-28
                    ml-0 md:ml-24
                "
                >

                {/* ICON INFO */}
                <div className="flex flex-col sm:flex-row gap-8 md:gap-16 -mt-10 md:-mt-0 ml-4 md:ml-0">

                    <div className="flex items-center gap-4 md:gap-6">
                    <img src="/flat.png" className="w-12 h-12 md:w-14 md:h-14" />
                    <div>
                        <p className="font-medium font-montserrat text-[#000000] text-[16px] md:text-[18px]">
                        Flat Size
                        </p>
                        <p className="text-[14px] md:text-[16px] text-[#000000] font-montserrat font-regular mt-1 md:mt-2">
                        2,300 - 2,600 SQFT
                        </p>
                    </div>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src="/price.png" className="w-12 h-12 md:w-14 md:h-14" />
                    <div>
                        <p className="font-medium font-montserrat text-[#000000] text-[16px] md:text-[18px]">
                        Price Range
                        </p>
                        <p className="text-[14px] md:text-[16px] text-[#000000] font-montserrat font-regular mt-1 md:mt-2">
                        2.05 - 2.40 CR.
                        </p>
                    </div>
                    </div>

                </div>

                {/* DESCRIPTION */}
                <p
                    className="
                    text-[#535353] leading-relaxed
                    max-w-full md:max-w-lg
                    font-montserrat font-regular
                    text-[14px] md:text-[16px]
                    text-start md:text-left
                    ml-4 md:ml-0 mr-4 md:mr-0
                    "
                >
                    Discover expansive 3.5 BHK residences created for those 
                    who value extra space, privacy, and refined living.
                </p>

                {/* POINTS */}
                <ul className="space-y-4 text-[#000000] font-montserrat font-regular text-[16px] md:text-[18px]">
                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Larger space</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Vastu-compliant planning</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>High-quality finishes</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Enhanced luxury amenities</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Premium internal specification</span>
                    </li>
                </ul>

                </div>
            </div>
            </section>

            {/* 4 BHK */}
            <section className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-32 bg-white ml-4 md:ml-0 mr-4 md:mr-0">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                {/* LEFT SIDE */}
                <div className="flex flex-col gap-6 items-center md:items-start">

                {/* TITLE — IMAGE KE UPAR */}
                <h2
                    className="
                    text-[36px] sm:text-[42px] md:text-[50px]
                    font-montserrat font-semibold text-[#2B2B2B]
                    text-center md:text-left
                    ml-0 md:ml-20
                    -mt-4 md:mt-0
                    "
                >
                    4 BHK
                </h2>

                {/* IMAGE */}
                <img
                    src="emerald-4bhk1.jpeg"
                    alt="3 BHK Plan"
                    className="
                    w-full max-w-md md:max-w-full
                    object-contain
                    ml-0 md:ml-16
                    -mt-2 md:-mt-0
                    "
                />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div
                className="
                    flex flex-col gap-8 md:gap-10
                    mt-10 md:mt-28
                    ml-0 md:ml-24
                "
                >

                {/* ICON INFO */}
                <div className="flex flex-col sm:flex-row gap-8 md:gap-16 -mt-10 md:-mt-0 ml-4 md:ml-0">

                    <div className="flex items-center gap-4 md:gap-6">
                    <img src="/flat.png" className="w-12 h-12 md:w-14 md:h-14" />
                    <div>
                        <p className="font-medium font-montserrat text-[#000000] text-[16px] md:text-[18px]">
                        Flat Size
                        </p>
                        <p className="text-[14px] md:text-[16px] text-[#000000] font-montserrat font-regular mt-1 md:mt-2">
                        2,800 - 3,200 SQFT
                        </p>
                    </div>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src="/price.png" className="w-12 h-12 md:w-14 md:h-14" />
                    <div>
                        <p className="font-medium font-montserrat text-[#000000] text-[16px] md:text-[18px]">
                        Price Range
                        </p>
                        <p className="text-[14px] md:text-[16px] text-[#000000] font-montserrat font-regular mt-1 md:mt-2">
                        2.50 - 3.90 CR.
                        </p>
                    </div>
                    </div>

                </div>

                {/* DESCRIPTION */}
                <p
                    className="
                    text-[#535353] leading-relaxed
                    max-w-full md:max-w-lg
                    font-montserrat font-regular
                    text-[14px] md:text-[16px]
                    text-start md:text-left
                    ml-4 md:ml-0 mr-4 md:mr-0
                    "
                >
                    An exclusive top-tier residence designed for 
                    those seeking unmatched space, privacy, and sophistication.
                </p>

                {/* POINTS */}
                <ul className="space-y-4 text-[#000000] font-montserrat font-regular text-[16px] md:text-[18px]">
                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Villa-like comfort</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Larger Living spaces</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Vastu-compliant planning</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Best-in-class finishes & features</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Premium internal specification</span>
                    </li>

                    <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-6 mt-1 text-[#CE9162]" />
                    <span>Enhanced luxury amenities</span>
                    </li>
                </ul>

                </div>
            </div>
            </section>

            {/* Elevated Living */}
            <section className="w-full bg-[#FEFFF8] py-6 md:py-40">
            <div className="max-w-8xl mx-auto px-4 md:px-0 md:ml-12 md:mr-12">

                {/* HEADING */}
                <h2 className="
                text-center font-playfair font-medium
                text-[32px] md:text-[50px]
                leading-tight text-[#2B2B2B]
                mb-20 md:mb-44
                ">
                Thoughtfully Planned Spaces <br className="hidden md:block" />
                for Elevated Living
                </h2>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

                {/* ITEM 1 */}
                <div>
                    <div className="w-full h-[200px] md:h-[260px] mb-12 md:mb-28 flex items-center justify-center -mt-6 md:-mt-0">
                    <img
                        src="layout-emerald.jpg"
                        alt="Smart Layouts"
                        className="max-h-[260px] md:max-h-[375px] object-contain"
                    />
                    </div>

                    <h3 className="text-[20px] md:text-[24px] font-montserrat font-semibold text-[#2B2B2B] mb-4 md:-mt-14">
                    Smartly Designed Living  <br /> Spaces
                    </h3>

                    <p className="text-[15px] md:text-[16px] ml-4 md:ml-0 mr-4 md:mr-0 font-montserrat font-regular text-[#000000] leading-relaxed">
                    Floor plans designed to maximize space, <br className="hidden md:block" />
                    light, and ventilation with smart layouts  <br className="hidden md:block" />
                    that ensure comfort and privacy.
                    </p>
                </div>

                {/* ITEM 2 */}
                <div>
                    <div className="w-full h-[200px] md:h-[260px] mb-12 md:mb-28 flex items-center justify-center">
                    <img
                        src="layout-emerald2.jpg"
                        alt="Private Spaces"
                        className="max-h-[260px] md:max-h-[375px] object-contain"
                    />
                    </div>

                    <h3 className="text-[20px] md:text-[24px] font-montserrat font-semibold text-[#2B2B2B] mb-4 md:-mt-14">
                    Terrace & Lifestyle  <br /> Amenities
                    </h3>

                    <p className="text-[15px] md:text-[16px] ml-4 md:ml-0 mr-4 md:mr-0 font-montserrat font-regular text-[#000000] leading-relaxed">
                    The terrace combines private and common  <br className="hidden md:block" />
                    open spaces with landscaped areas and  <br className="hidden md:block" />
                    amenities, creating a calm and elevated <br />
                    lifestyle experience.
                    </p>
                </div>

                {/* ITEM 3 */}
                <div>
                    <div className="w-full h-[200px] md:h-[260px] mb-12 md:mb-28 flex items-center justify-center">
                    <img
                        src="layout-emerald3.jpg"
                        alt="Parking"
                        className="max-h-[260px] md:max-h-[375px] object-contain"
                    />
                    </div>

                    <h3 className="text-[20px] md:text-[24px] font-montserrat font-semibold text-[#2B2B2B] mb-4 md:-mt-14">
                    Well-Planned Access &  <br /> Ample Parking
                    </h3>

                    <p className="text-[15px] md:text-[16px] ml-4 md:ml-0 mr-4 md:mr-0 font-montserrat font-regular text-[#000000] leading-relaxed">
                    Designed for smooth movement and  <br className="hidden md:block" />
                    convenience, the parking layout features <br className="hidden md:block" />
                    wide driveways, efficient circulation, and <br />
                    clearly marked parking bays.
                    </p>
                </div>

                </div>
            </div>
            </section>

            {/* Location */}
            <section className="w-full bg-white py-12 md:py-18">
            <div className="max-w-8xl mx-auto px-4 ml-0 md:ml-20 -mt-4 md:mt-0">

                {/* MAIN HEADING */}
                <h2 className="
                text-center font-playfair font-medium
                text-[32px] md:text-[50px]
                text-[#2B2B2B]
                mb-8 md:mb-20
                ">
                Location
                </h2>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* LEFT — GOOGLE MAP */}
                <div className="bg-[#FFF4EA] p-3 rounded-2xl ml-3 md:ml-0 mr-3 md:mr-0">
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123115.16838823623!2d75.02674596588147!3d15.357573267205252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d6d3a2090b17%3A0xae803e207113397!2sHubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1770013491003!5m2!1sen!2sin"
                    className="w-full h-[300px] md:h-[450px] rounded-xl border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>

                {/* RIGHT — TEXT */}
                <div>
                    <h3 className="
                    text-[22px] md:text-[30px]
                    font-montserrat font-medium
                    text-[#2B2B2B]
                    mb-6 
                    -ml-2 md:-ml-6
                    text-center md:text-left
                    ">
                    Live InUnbounded Accessibilty
                    </h3>

                    <ul className="
                    space-y-3 md:space-y-4
                    font-montserrat font-regular
                    text-[15px] md:text-[16px]
                    text-[#535353]
                    list-disc marker:text-black
                    pl-4
                    ml-5 md:-ml-4 mr-5
                    ">
                    <li>Reside amidst a bustling yet tranquil location on Kusugal (Solapur Road)</li>
                    <li>Keshwapur, with excellent transit connectivity.</li>
                    <li>Jain Temple (Walkable)</li>
                    <li>Near Ayyappa Swamy Temple</li>
                    <li>Reliance Smart (Super Market) (5 Min)</li>
                    <li>Sports Park (4 Min)</li>
                    <li>Keshwapur Circle (5 Min)</li>
                    <li>4 Km Railway Station (11 Min)</li>
                    <li>11 Km Hubballi Airport (28 Min)</li>
                    <li>School/College/Shopping Mall/Hotels (Walkable)</li>
                    </ul>
                </div>
                </div>
            </div>
            </section>

            {/* Video */}
            <section className="w-full bg-white py-8 md:py-32">
            <div className="max-w-8xl mx-auto px-4 ml-0 md:ml-20 mr-0 md:mr-20 -mt-6 md:mt-0">

                {/* HEADING */}
                <h2
                className="
                    text-center font-playfair font-medium
                    text-[32px] md:text-[50px]
                    text-[#2B2B2B]
                    mb-10 md:mb-20
                "
                >
                Watch Our Videos
                </h2>

                {/* VIDEOS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 ml-4 md:ml-0 mr-4 md:mr-0">

                {/* VIDEO 1 */}
                <div className="relative h-[450px] lg:h-[600px] rounded-[12px] overflow-hidden group -mt-2 md:mt-0">
                
                {/* Reel Thumbnail */}
                <video
                    src="/reel3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                ></video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition"></div>

                {/* Clickable Instagram Icon */}
                <a
                    href="https://www.instagram.com/reel/DTdAp4okSNe/?igsh=YzZqdWJ5OWw5bHpu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex flex-col items-center justify-center group hover:scale-110 transition">
                <img
                    src="/insta.png"
                    alt="Instagram"
                    className="w-7 h-7 md:w-11 md:h-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <span
                    className="
                        mt-4
                        text-[10px] md:text-[14px]
                        font-montserrat font-medium
                        text-white
                        whitespace-nowrap
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        inline-flex items-center gap-0 underline
                    "
                    >
                    Open Instagram
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
                </a>
                </div>

                {/* VIDEO 2 */}
                <div className="relative h-[450px] lg:h-[600px] rounded-[12px] overflow-hidden group -mt-4 md:mt-0">
                
                {/* Reel Thumbnail */}
                <video
                    src="/reel2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                ></video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition"></div>

                {/* Clickable Instagram Icon */}
                <a
                    href="https://www.instagram.com/reel/DSAKcDggTQn/?igsh=MXBkYjk1dXEzbXJwaA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex flex-col items-center justify-center group hover:scale-110 transition">
                <img
                    src="/insta.png"
                    alt="Instagram"
                    className="w-7 h-7 md:w-11 md:h-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <span
                    className="
                        mt-4
                        text-[10px] md:text-[14px]
                        font-montserrat font-medium
                        text-white
                        whitespace-nowrap
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        inline-flex items-center gap-0 underline
                    "
                    >
                    Open Instagram
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
                </a>
                </div>

                {/* VIDEO 3 */}
                <div className="relative h-[450px] lg:h-[600px] rounded-[12px] overflow-hidden group -mt-4 md:mt-0">
                
                {/* Reel Thumbnail */}
                <video
                    src="/reel1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                ></video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition"></div>

                {/* Clickable Instagram Icon */}
                <a
                    href="https://www.instagram.com/reel/DTXFBGRk1Ys/?igsh=MXI0cjQzZnd1Y3Q2NQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex flex-col items-center justify-center group hover:scale-110 transition">
                <img
                    src="/insta.png"
                    alt="Instagram"
                    className="w-7 h-7 md:w-11 md:h-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <span
                    className="
                        mt-4
                        text-[10px] md:text-[14px]
                        font-montserrat font-medium
                        text-white
                        whitespace-nowrap
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        inline-flex items-center gap-0 underline
                    "
                    >
                    Open Instagram
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
                </a>
                </div>

                </div>
            </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden mt-10 md:mt-0 cta-bg">

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