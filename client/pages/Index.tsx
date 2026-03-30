import { useState, useEffect } from "react";
import { Layers, Monitor, Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import "swiper/css";
import {
  Home,
  Building2,
  Users,
  Award,
  ArrowRight,
  ArrowDown,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const ServiceCard = ({ service }) => 
  { 
    return ( 
      <div className="flex flex-col items-center"> 
      
      {/* Image Wrapper */} 
      <div className="relative group"> 
        <img src={service.img} 
        alt={service.title} 
        className="w-30 h-30 mb-6 transition-transform duration-300 ease-out group-hover:scale-105" /> 
        
        {/* Soft Popup */} 
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"> </div> 
        </div> 
        
        {/* Title */} 
        <h3 className="text-2xl font-semibold mb-4 text-[#2B2B2B]"> 
          {service.title} 
        </h3> 
        
        {/* Description */} 
        <p className="text-base leading-7 text-[#6B6B6B] max-w-sm text-center"> 
          {service.desc} 
        </p> 
      </div> 
    ); 
};

const testimonials = [
  {
    name: "Ramesh Kulkarni",
    role: "Niketan Emerald, Hubballi",
    message:
      "The attention to detail and quality of construction truly stands out. From planning to execution, the entire experience with Niketan Builders was smooth and transparent.",
    image: "/photo1.png",
  },
  {
    name: "Anita Deshpande",
    role: "Niketan Luxuria, Hubballi",
    message:
      "We were impressed by the thoughtful layout, vastu compliance, and overall finishing. Niketan Builders delivered exactly what they promised, on time.",
    image: "/photo2.png",
  },
  {
    name: "Suresh Patil",
    role: "Homeowner, Hubballi",
    message:
      "What sets Niketan Builders apart is their professionalism and commitment to quality. Even after possession, their support and responsiveness have been excellent.",
    image: "/photo3.png",
  },
  {
    name: "Anita Deshpande",
    role: "Niketan Luxuria, Hubballi",
    message:
      "We were impressed by the thoughtful layout, vastu compliance, and overall finishing. Niketan Builders delivered exactly what they promised, on time.",
    image: "/photo2.png",
  },
  {
    name: "Ramesh Kulkarni",
    role: "Niketan Emerald, Hubballi",
    message:
      "The attention to detail and quality of construction truly stands out. From planning to execution, the entire experience with Niketan Builders was smooth and transparent.",
    image: "/photo1.png",
  },
  {
    name: "Anita Deshpande",
    role: "Niketan Luxuria, Hubballi",
    message:
      "We were impressed by the thoughtful layout, vastu compliance, and overall finishing. Niketan Builders delivered exactly what they promised, on time.",
    image: "/photo2.png",
  },
  {
    name: "Suresh Patil",
    role: "Homeowner, Hubballi",
    message:
      "What sets Niketan Builders apart is their professionalism and commitment to quality. Even after possession, their support and responsiveness have been excellent.",
    image: "/photo3.png",
  },
  {
    name: "Anita Deshpande",
    role: "Niketan Luxuria, Hubballi",
    message:
      "We were impressed by the thoughtful layout, vastu compliance, and overall finishing. Niketan Builders delivered exactly what they promised, on time.",
    image: "/photo2.png",
  },
];

const projects = [
  {
    title: "Niketan Luxuria",
    location: "Raj Nagar, Hubballi",
    description: "A Perfect Balance of Luxury & Affordability",
    status: "Completed",
    rera: true,
    image: "/NiketanBuilding2.jpg",
  },
  {
    title: "Niketan Emerald",
    location: "Keshwapur, Hubballi",
    description:
      "Premium Luxury Residential Project 3, 3.5 & 4 BHK Apartments",
    status: "Ongoing",
    rera: true,
    image: "/NiketanBuilding3.jpg",
  },
  {
    title: "Niketan Platinum",
    location: "",
    description:
      "Premium residential and mixed-use developments planned across prime locations in Hubballi.",
    status: "Coming Soon",
    rera: false,
    image: "/NiketanBuilding4.jpg",
  },
];

export default function Index() {
  const [email, setEmail] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const backgroundImages = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % backgroundImages.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);
  
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[55vh] lg:min-h-[713px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 hero-wrapper">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`hero-image ${
                index === currentImageIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

        {/* ================= HEADER ================= */}
        <header className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-20">

              {/* Logo (DESKTOP SAME) */}
              <img
                src="/NiketanLogo.png"
                alt="Niketan Logo"
                className="h-[120px] w-auto ml-0 lg:ml-8 lg:w-[232px] sm:h-[160px] lg:h-[250px] mt-6 sm:mt-12 lg:mt-32 p-1 rounded"
              />

              {/* DESKTOP NAV (UNCHANGED) */}
              <div className="ml-auto hidden lg:flex items-center gap-[53px] mt-0 lg:mt-12">
                <nav className="flex items-center gap-[53px] mt-12 font-montserrat">
                  <Link to="/" className="text-xl text-[#CE9162] hover:text-[#CE9162] transition">
                    Home
                  </Link>
                  <Link to="/about-us" className="text-xl text-white hover:text-[#CE9162] transition">
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

                {/* TEXT MORE INWARD ON HOVER */}
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
                <Menu size={32} />
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

              <a onClick={() => setOpen(false)} href="#home" className="text-2xl">Home</a>
              <Link onClick={() => setOpen(false)} to="/about-us" className="text-2xl">About Us</Link>
              <a onClick={() => setOpen(false)} href="#projects" className="text-2xl">Projects</a>
              <a onClick={() => setOpen(false)} href="#blog" className="text-2xl">Blogs</a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-2xl">Contact Us</a>

              <a
                href="tel:+919739856222"
                className="mt-6 px-8 py-3 border border-[#CE9162] rounded-lg text-lg"
              >
                Call Now
              </a>
            </div>
          )}
        </header>

        {/* ================= HERO CONTENT ================= */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl w-full mt-0 lg:mt-32">

            {/* TEXT — DESKTOP SAME */}
            <h1 className="text-white font-playfair leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">
              Niketan Builders
            </h1>

            <h1 className="text-white font-playfair leading-tight ml-4 md:ml-0 mr-4 md:mr-0 mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[60px] sm:whitespace-nowrap">
              Redefining Modern Living
            </h1>

            <p className="text-base font-montserrat sm:text-lg md:text-xl text-white/90 ml-4 md:ml-0 mr-4 md:mr-0 mt-4 sm:mt-6 leading-relaxed">
              Premium living spaces shaped by experience and integrity.
            </p>

            {/* BUTTONS — ALWAYS SIDE BY SIDE */}
            <div className="flex flex-row gap-1 justify-center mt-6 sm:mt-8">
              <Link to="/projects">
              <button className="
                px-5 py-2 text-[16px] font-montserrat
                sm:px-4 sm:py-3 sm:text-[18px]
                bg-[#CE9162] border border-[#CE9162] text-white
                rounded-lg hover:bg-transparent hover:text-[#CE9162]
                transition font-medium
              ">
                Explore More
              </button>
            </Link>``
              
              <Link to="/contact-us">
                <button className="
                  relative overflow-hidden text-white font-montserrat
                  text-[16px] sm:text-[18px]
                  font-medium flex items-center justify-center gap-1
                  border border-[#CE9162] rounded-lg
                  px-5 py-2 sm:px-4 sm:py-3
                  group transition
                ">
                  <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[6] transition-transform duration-700"></span>
                  <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-500 group-hover:scale-90">Book a Visit</span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/*Trust Section*/}
      <section id="about" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
              <h1 className="text-xl md:ml-6 font-montserrat font-semibold mb-8 text-[#CE9162]">
                ABOUT US
              </h1>

              <h2 className="
                text-[30px] sm:text-[40px] md:text-[50px]
                font-playfair font-regular text-[#2B2B2B]
                leading-tight mb-4
                md:ml-6
              ">
                Building Trust & Delivering Excellence Since 1989
              </h2>

              <p className="
                text-[#535353] font-montserrat font-medium text-[16px] md:text-[16px]
                leading-[26px] md:leading-[28px]
                px-4 md:px-0
                mt-4 md:mt-0
                md:ml-6 mb-10
              ">
                <span className="font-semibold text-black">
                  Niketan Builders Pvt Ltd
                </span>{" "}
                is a name that has been at the forefront of real estate since 1984. 
                A trusted brand renowned for residential and office spaces, 
                we deliver excellence in every project. 
                Our expertise spans land development, residential apartments, 
                commercial spaces, multipurpose buildings, and more, across Hubli, Dharwad, and Bengaluru.
              </p>

              {/* BUTTON */}
              <Link to="/about-us">
              <button className="
                relative overflow-hidden
                md:ml-6
                text-[#CE9162] text-[18px] font-medium font-montserrat
                inline-flex items-center gap-1
                border border-[#CE9162]
                rounded-lg px-3 py-3
                group transition
                -mt-4 md:-mt-0
              ">
                <span className="
                  absolute left-1/2 top-1/2
                  h-8 w-8
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-[#CE9162]
                  scale-0 group-hover:scale-[6]
                  transition-transform duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                "></span>

                <span className="relative z-10 flex items-center gap-1 group-hover:text-white transition">
                  Read More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            </motion.div>

            {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="relative w-full md:ml-20 flex justify-center md:block"
              >
              <img
                src="/NiketanBuilding1.png"
                alt="Niketan Building"
                className="
                  rounded-[5px] 

                  /* 📱 MOBILE ONLY */
                  h-[300px] w-[320px]
                  -mt-4 md:-mt-0 

                  /* 💻 DESKTOP – EXACT SAME AS BEFORE */
                  md:w-[710px] md:h-[550px] ml-0 md:-ml-16
                "
              />

              {/* EXPERIENCE CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.3,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="
                    absolute
                    bottom-4 left-1/2 -translate-x-1/2
                    md:bottom-10 md:-left-20 md:translate-x-0
                    bg-[#CE9162] rounded-[8px]
                    px-6 py-3 md:px-7 md:py-6
                    shadow-lg -ml-24
                  "
                >
                <div
                  className="
                    flex items-center gap-3 text-left 

                    /* 💻 Desktop & up – EXACT SAME as before */
                    sm:flex-row sm:gap-4 sm:text-left
                  "
                >
                  <p
                    className="
                      text-white 
                      text-[56px]
                      leading-none

                      /* 💻 Desktop sizes – unchanged */
                      sm:text-[48px] lg:text-[54px] font-playfair font-medium
                    "
                  >
                    <img
                      src="/year1.png"
                      alt="year"
                      className="h-[48px] sm:h-[48px] lg:h-[40px] w-auto"
                    />
                  </p>

                  <div className="leading-tight font-montserrat font-regular">
                    <p className="text-white text-sm sm:text-base whitespace-nowrap">
                      Years of
                    </p>
                    <p className="text-white text-sm sm:text-base whitespace-nowrap">
                      experience
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        className="pb-10 py-2 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#FEFFF399] relative"
      >
        {/* Left Shape */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D7A681] rounded-full opacity-10 blur-2xl"></div>

        {/* Right Shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D7A681] rounded-full opacity-10 blur-2xl"></div>

        <div className="max-w-8xl mx-auto px-4 relative z-10">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-16"
          >
            <p className="text-lg md:text-xl tracking-widest text-[#CE9162] font-semibold mb-8 text-center md:text-left">
              PROJECTS
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <h2
                className="
                  text-[30px] sm:text-[40px] md:text-[50px]
                  font-playfair font-regular max-w-3xl leading-tight
                  text-center md:text-left
                "
              >
                Discover Our Ongoing & Completed Projects
              </h2>

              {/* VIEW ALL BUTTON */}
              <Link to="/projects">
              <button
                className="
                  relative overflow-hidden border border-[#CE9162]
                  text-[16px] md:text-[18px]
                  text-[#CE9162]
                  px-6 py-3 rounded-lg font-montserrat font-medium group
                  mt-4 md:-mt-36
                  self-center md:self-auto
                "
              >
                <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[8] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                  View All
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            </div>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-16 mt-24">
            {[
              {
                title: "Niketan Luxuria",
                location: "Raj Nagar, Hubballi",
                description: "A Perfect Balance of Luxury & Affordability",
                status: "Completed",
                rera: true,
                image: "/NiketanBuilding2.jpg",
              },
              {
                title: "Niketan Emerald",
                location: "Keshwapur, Hubballi",
                description:
                  "Premium Luxury Residential Project 3, 3.5 & 4 BHK Apartments",
                status: "Ongoing",
                rera: true,
                image: "/NiketanBuilding3.jpg",
              },
              {
                title: "Niketan Platinum",
                location: "",
                description:
                  "Premium residential and mixed-use developments planned across prime locations in Hubballi.",
                status: "Coming Soon",
                rera: false,
                image: "/NiketanBuilding4.jpg",
              },
            ].map((project, i) => {
              const parts = project.description.split("&");

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="p-4">
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-full
                          h-[220px]
                          sm:h-[320px]
                          md:h-[350px]
                          object-cover
                        "
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      px-5 py-5
                      md:px-8 md:py-6
                      text-center flex flex-col h-full
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-xl
                          md:text-3xl
                          font-playfair font-medium
                          mb-1 md:mb-2
                          -mt-2 md:-mt-4
                        "
                      >
                        {project.title}
                      </h3>

                      {project.location && (
                        <p className="text-gray-500 text-[16px] mb-4 md:mb-6 font-montserrat font-regular">
                          {project.location}
                        </p>
                      )}

                      {i < 2 && (
                        <div className="h-[1px] w-full mb-2 bg-[#E5E5E5]" />
                      )}

                      <div className="text-gray-600 text-sm md:text-[16px] font-montserrat font-regular leading-relaxed mb-6 md:mb-8 min-h-[48px]">
                        {parts.length > 1 ? (
                          <>
                            <p>{parts[0].trim()} &</p>
                            <p>{parts[1]?.trim()}</p>
                          </>
                        ) : (
                          <p>{project.description}</p>
                        )}
                      </div>

                      {project.status !== "Coming Soon" && (
                        <div
                          className="
                            flex justify-center gap-3
                            mb-6 md:mb-10
                            -mt-2 md:-mt-4
                          "
                        >
                          <span className="bg-[#7D7D7D] text-white uppercase text-[12px] md:text-sm px-4 py-1.5 rounded-full font-montserrat font-medium">
                            {project.status}
                          </span>

                          {project.rera && (
                            <span className="bg-[#2B2B2B] text-white text-[12px] md:text-sm px-4 py-1.5 rounded-full font-montserrat font-medium">
                              RERA REGISTERED
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* BUTTON */}
                    <div className="flex justify-center font-montserrat font-medium">
                      {project.status === "Coming Soon" ? (
                        <Link to="/coming-soon">
                        <button className="text-[#CE9162] text-[18px] md:text-[24px] font-medium tracking-wide mt-12 md:mt-20">
                          COMING SOON
                        </button>
                        </Link>
                      ) : (
                        <>
                          {/* FIRST CARD – LUXURIA */}
                          {i === 0 && (
                            <Link to="/view-project-details">
                              <button className="relative overflow-hidden border border-[#CE9162] text-[14px] text-[#CE9162] px-2 py-3 rounded-lg font-medium group">
                                <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[9] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                                  View Project Details
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                              </button>
                            </Link>
                          )}

                          {/* SECOND CARD – EMERALD */}
                          {i === 1 && (
                            <Link to="/View-project-details-emerald">
                              <button className="relative overflow-hidden border border-[#CE9162] text-[14px] text-[#CE9162] px-2 py-3 rounded-lg font-medium group">
                                <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE9162] scale-0 group-hover:scale-[9] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                                  View Project Details
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                              </button>
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/*Video*/}
      <motion.section
        className="
          relative w-screen overflow-hidden
          h-[34vh]
          md:h-screen
        "
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      >
        {/* VIDEO */}
        <video
          className="
            absolute top-0 left-0
            w-full h-full
            object-contain
            md:object-cover 
          "
          src="/NiketanEmerald1R3.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-10 md:py-32 bg-[#FFFEFD]">
        <div className="max-w-[1400px] mx-auto px-4">

          {/* TOP HEADING */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="text-center text-[18px] tracking-widest text-[#CE9162] font-montserrat font-semibold mb-6"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="text-[30px] md:text-5xl font-playfair font-regular text-center mb-6"
          >
            Where Legacy Meets Modern Living
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="
              text-center text-[16px] text-[#7D7D7D]
              max-w-4xl mx-auto mb-14
              px-4 md:px-0
              font-montserrat font-regular
            "
          >
            Every Niketan home reflects superior craftsmanship, customer-focused design,
            and a commitment to building spaces that offer comfort, elegance,
            and lasting value.
          </motion.p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                safety, and <br />long-term value.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
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

      {/* Services Section */}
      <section
        id="services"
        className="py-10 sm:py-22 px-6 sm:px-6 lg:px-8 bg-[#FEFFF399]"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-20">
            <p className="uppercase tracking-widest font-montserrat font-semibold text-[14px] sm:text-[18px] text-[#CE9162] mb-4 sm:mb-6">
              Our Services
            </p>

            {/* MOBILE → 3 lines | DESKTOP → SAME */}
            <h2
              className="
                text-[30px] sm:text-[40px] lg:text-[50px]
                font-playfair font-regular text-[#2B2B2B]
                leading-tight
                max-w-[320px] mx-auto
                sm:max-w-none
              "
            >
              Expertly crafted services that <br className="hidden sm:block" />
              define quality living.
            </h2>
          </div>

          {/* Top Row – 3 Services (UNCHANGED DESKTOP) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 font-montserrat font-regular text-center mb-14 sm:mb-20 -mt-4 md:mt-0">
            {[
              {
                title: "Residential Apartments",
                desc: "Thoughtfully designed homes that combine comfort, aesthetics, and modern living standards, ensuring long-term value for families.",
                img: "/logo1.png",
              },
              {
                title: "Commercial Complexes",
                desc: "Well-planned commercial spaces designed to enhance business functionality and operational efficiency.",
                img: "/logo2.png",
              },
              {
                title: "Multipurpose Buildings",
                desc: "Flexible developments that adapt seamlessly to residential, commercial, or mixed-use requirements.",
                img: "/logo3.png",
              },
            ].map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>

          {/* Bottom Row – 2 Services (MOBILE SMALLER ONLY) */}
          <div
            className="
              grid grid-cols-1 md:grid-cols-2
              gap-10 sm:gap-16
              max-w-[400px] sm:max-w-3xl
              mx-auto text-center
              font-montserrat font-regular
            "
          >
            {[
              {
                title: "Land Development",
                desc: "Strategically planned layouts with future-ready infrastructure and long-term appreciation potential.",
                img: "/logo6.png",
              },
              {
                title: "Custom-Built Workspaces",
                desc: "Tailor-made solutions crafted to match client-specific needs, branding, and operational goals.",
                img: "/logo5.png",
              },
            ].map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 sm:py-40 bg-white">
        <div className="max-w-11xl mx-auto px-4 sm:px-6 md:ml-12 md:mr-12">

          {/* Heading */}
          <p className="text-center tracking-widest text-[14px] sm:text-[18px] text-[#CE9162] font-montserrat font-semibold mb-3 sm:mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-[30px] sm:text-[42px] lg:text-[50px] text-center font-playfair font-regular text-[#2B2B2B] leading-tight mb-8 sm:mb-16">
            {/* MOBILE */}
            <span className="block sm:hidden">
              Voices of Trust,
              <br />
              Stories of Satisfaction
            </span>

            {/* DESKTOP */}
            <span className="hidden sm:inline ">
              Voices of Trust, Stories of <br className="hidden sm:block" />
              Satisfaction
            </span>
          </h2>

          {/* Slider */}
          <div className="mt-4 sm:mt-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            className="!overflow-visible"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>

                {/* CARD */}
                <motion.div
                  whileHover={{ y: -14, scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 min-h-[320px] sm:min-h-[360px] flex flex-col mt-2 sm:mt-10"
                >

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span
                        key={j}
                        className="text-yellow-400 text-[22px] sm:text-3xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-gray-600 text-[15px] sm:text-[16px] font-montserrat font-regular leading-relaxed mb-6 sm:mb-8 flex-grow">
                    “{t.message}”
                  </p>

                  <hr className="mb-5 sm:mb-6" />

                  {/* User */}
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-regular font-playfair text-[16px] sm:text-[18px] text-[#2B2B2B]">
                        {t.name}
                      </p>
                      <p className="text-[11px] font-montserrat font-regular sm:text-[12px] text-gray-500">
                        {t.role}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 sm:py-12 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <h2 className="text-[30px] sm:text-[50px] text-center font-playfair font-regular text-[#2B2B2B] leading-tight mb-12 sm:mb-24">
            Built With Trusted Brands
          </h2>

          {/* Logos */}
          <div className="overflow-hidden relative mb-10 sm:mb-16">

            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }       
                `,
              }}
            />

            <div className="flex items-center gap-x-10 sm:gap-x-20 animate-[scroll_5s_linear_infinite] sm:animate-[scroll_30s_linear_infinite]">
              {[
                { src: "/brand1.png", scale: 1.5 },
                { src: "/brand2.png", scale: 1 },
                { src: "/brand3.png", scale: 2.5 },
                { src: "/brand4.png", scale: 2.5 },
                { src: "/brand5.png", scale: 1 },
                { src: "/brand6.png", scale: 1 },
                { src: "/brand7.png", scale: 1 },
                { src: "/brand8.png", scale: 2.5 },
                { src: "/brand9.png", scale: 2.5 },
                { src: "/brand10.png", scale: 2.5 },
                { src: "/brand11.png", scale: 1.5 },
                { src: "/brand12.png", scale: 2.5 },
                { src: "/brand13.png", scale: 2.3 },
                { src: "/brand14.png", scale: 2.5 },
                { src: "/brand15.png", scale: 1.5 },

                // Duplicate for seamless loop
                { src: "/brand1.png", scale: 1.5 },
                { src: "/brand2.png", scale: 1 },
                { src: "/brand3.png", scale: 2.5 },
                { src: "/brand4.png", scale: 2.5 },
                { src: "/brand5.png", scale: 1 },
                { src: "/brand6.png", scale: 1 },
                { src: "/brand7.png", scale: 1 },
                { src: "/brand8.png", scale: 2.5 },
                { src: "/brand9.png", scale: 2.5 },
                { src: "/brand10.png", scale: 2.5 },
                { src: "/brand11.png", scale: 1.5 },
                { src: "/brand12.png", scale: 2.5 },
                { src: "/brand13.png", scale: 2.3 },
                { src: "/brand14.png", scale: 2.5 },
                { src: "/brand15.png", scale: 1.5 },
              ].map((brand, i) => (
                <div
                  key={i}
                  className="w-24 h-12 sm:w-32 sm:h-14 flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={brand.src}
                    alt="Trusted brand logo"
                    className="max-h-full max-w-full object-contain"
                    style={{
                      transform: `scale(${brand.scale})`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden cta-bg">

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
