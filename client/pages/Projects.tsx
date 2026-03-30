import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
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

type OpenDropdown = "status" | "type" | "location" | null;


const projects = [
  {
    title: "Niketan Luxuria",
    location: "Raj Nagar, Hubballi",
    description: "A Perfect Balance of Luxury & Affordability",
    status: "Completed",
    type: "Apartment",
    rera: true,
    image: "/NiketanBuilding2.jpg",
  },
  {
    title: "Niketan Emerald",
    location: "Keshwapur, Hubballi",
    description:
      "Premium Luxury Residential Project 3, 3.5 & 4 BHK Apartments",
    status: "Ongoing",
    type: "Apartment",
    rera: true,
    image: "/NiketanBuilding3.jpg",
  },
  {
    title: "Niketan Platinum",
    location: "",
    description:
      "Premium residential and mixed-use developments planned across prime locations in Hubballi.",
    status: "Coming Soon",
    type: "Community",
    rera: false,
    image: "/NiketanBuilding4.jpg",
  },
];

export default function Projects() {
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

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

  const filteredProjects = projects.filter((project) => {
  const matchesSearch =
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.location.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesStatus =
    !selectedStatus || project.status === selectedStatus;

  const matchesType =
    !selectedType || project.type === selectedType;

  const matchesLocation =
    !selectedLocation ||
    project.location.toLowerCase().includes(selectedLocation.toLowerCase());

  return matchesSearch && matchesStatus && matchesType && matchesLocation;
});

  return (
    <div className="bg-[#FFFEFD]">

      {/* ================= HERO ================= */}
      <section
        className="h-[45vh] md:h-[490px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/projects1.jpeg')" }}
      >
        <div className="relative z-20 text-center px-4">
          <h1 className="text-white font-playfair font-regular leading-none
              text-3xl sm:text-4xl md:text-[60px]
              top-2 md:top-36 relative
              whitespace-normal md:whitespace-nowrap
              md:-ml-6">
            Projects
          </h1>

          {/* BREADCRUMB */}
          <div className="mt-6 md:mt-16 flex items-center justify-center gap-2 text-sm text-white/80">
            <a
              href="/"
              className="hover:text-[#CE9162] mt-0 md:mt-36 font-montserrat font-regular transition text-[14px] md:text-[16px]"
            >
              Home
            </a>
            <span className="text-white opacity-60 mt-0 md:mt-36 font-montserrat font-regular text-[14px] md:text-[16px]">›</span>
            <span className="text-white text-[14px] md:text-[16px] mt-0 md:mt-36 font-montserrat font-regular">
              Projects
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

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
                  <Link to="/about-us" className="text-xl text-white hover:text-[#CE9162] transition">
                    About Us
                  </Link>
                  <Link to="/projects" className="text-xl text-[#CE9162] hover:text-[#CE9162] transition">
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

      {/* ================= FILTER SECTION ================= */}
      <section ref={sectionRef} className="max-w-8xl mx-auto px-4 mt-16 md:mt-20 ml-4 md:ml-20 mr-4 md:mr-20">
        <div className="flex flex-wrap gap-4 text-[18px] font-montserrat font-regular">

          {/* SEARCH */}
          <div className="flex-[2] min-w-[260px] relative text-[15px] md:text-[18px] font-montserrat font-regular">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7D7D7D]" size={18} />
            <input
              type="text"
              placeholder="Search by project name or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-[15px] border border-[#CE9162] outline-none"
            />
          </div>

          <Dropdown
            label={selectedStatus || "Project Status"}
            name="status"
            open={openDropdown}
            setOpen={setOpenDropdown}
            options={["All Projects", "Completed", "Ongoing", "Coming Soon"]}
            onSelect={(value) =>
              setSelectedStatus(value === "All Projects" ? null : value)
            }
          />

          <Dropdown
            label={selectedType || "Project Type"}
            name="type"
            open={openDropdown}
            setOpen={setOpenDropdown}
            options={["All Types", "Apartment", "Commercial", "Community"]}
            onSelect={(value) =>
              setSelectedType(value === "All Types" ? null : value)
            }
          />

          <Dropdown
            label={selectedLocation || "Project Location"}
            name="location"
            open={openDropdown}
            setOpen={setOpenDropdown}
            options={["All Locations", "Hubballi", "Bengaluru"]}
            onSelect={(value) =>
              setSelectedLocation(value === "All Locations" ? null : value)
            }
          />
        </div>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        className="pb-10 py-0 sm:py-0 px-4 sm:px-6 lg:px-20 bg-[#FEFFF399] relative -mt-12 md:-mt-10 -mb-12 md:mb-44"
      >
        <div className="max-w-8xl mx-auto px-4 relative z-10">

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-16 mt-24">
            {filteredProjects.map((project, i) => {
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
                          <span className="bg-[#7D7D7D] text-white text-[12px] md:text-sm px-4 py-1.5 uppercase rounded-full font-montserrat font-medium">
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

/* ================= DROPDOWN ================= */

type DropdownProps = {
  label: string;
  name: OpenDropdown;
  options: string[];
  open: OpenDropdown;
  setOpen: (val: OpenDropdown) => void;
  onSelect: (value: string) => void;
};

function Dropdown({ label, name, options, open, setOpen, onSelect }: DropdownProps) {
  const isOpen = open === name;

  return (
    <div className="relative flex-1 min-w-[220px] text-[#000000]">
      <button
        onClick={() => setOpen(isOpen ? null : name)}
        className="w-full px-6 py-4 rounded-[15px] border border-[#CE9162] bg-white flex justify-between items-center text-[#7D7D7D]"
      >
        <span>{label}</span>
        <ChevronDown size={18} />
      </button>

      {isOpen && (
        <div className="absolute top-[110%] left-4 w-[90%] bg-white rounded-[8px] shadow-lg z-20 overflow-hidden">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                onSelect(item);   // ✅ ADDED (FILTER WORKS)
                setOpen(null);    // existing behaviour
              }}
              className="px-6 py-1 hover:text-[#CE9162] cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
