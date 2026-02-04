import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layers, Monitor, Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactUs() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  surname: "",
  phone: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [successMsg, setSuccessMsg] = useState("");
const [errorMsg, setErrorMsg] = useState("");

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => observer.disconnect();
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    setSuccessMsg("Form submitted successfully");
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: "",
    });
  } catch (err) {
    setErrorMsg("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* HERO */}
      <section
        className="h-[45vh] md:h-[490px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/contact.png')" }}
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
            Contact Us
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
              Contact Us
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
                  <Link to="/about-us" className="text-xl text-white hover:text-[#CE9162] transition">
                    About Us
                  </Link>
                  <Link to="/projects" className="text-xl text-white hover:text-[#CE9162] transition">
                    Projects
                  </Link>
                  <a href="#blog" className="text-xl text-white hover:text-[#CE9162] transition">
                    Blog
                  </a>
                  <Link to="/contact-us" className="text-xl text-[#CE9162] hover:text-[#CE9162] transition">
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

      {/* CONNECT WITH US */}
      <section
        ref={sectionRef}
        className="bg-white py-20 md:py-24 px-4 mr-2 md:mr-0 ml-2 md:ml-0"
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div
            className={`
              text-center mb-2 md:mb-16 
              transition-all duration-700 ease-out 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h2 className="text-[30px] md:text-[50px] font-playfair font-medium mb-2">
              Connect With Us
            </h2>

            <p className="text-[#535353] text-[16px] mb-6 font-montserrat font-medium">
              Reach out for project details, availability, and expert guidance.
            </p>

            <div className="flex justify-center gap-4 mt-6 text-[#535353] text-4xl">
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

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">

            {/* FORM CARD */}
            <div
              className={`
                bg-white rounded-xl shadow-lg p-6 md:p-10
                h-auto md:h-[546px]
                w-full md:w-[620px]
                transition-all duration-700 delay-100 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-montserrat font-medium text-[#7D7D7D]">

                <input
                  placeholder="Your Name*"
                  className="border text-[#535353] rounded-lg px-4 py-3 h-[63px]
                  focus:outline-none focus:ring-2 focus:ring-[#CE9162] focus:border-[#CE9162]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                  placeholder="Surname*"
                  className="border text-[#535353] rounded-lg px-4 py-3 h-[63px]
                  focus:outline-none focus:ring-2 focus:ring-[#CE9162] focus:border-[#CE9162]"
                  value={formData.surname}
                  onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                />

                <input
                  placeholder="Phone No.*"
                  className="border text-[#535353] rounded-lg px-4 py-3 h-[63px]
                  focus:outline-none focus:ring-2 focus:ring-[#CE9162] focus:border-[#CE9162]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <input
                  placeholder="Email*"
                  className="border text-[#535353] rounded-lg px-4 py-3 h-[63px]
                  focus:outline-none focus:ring-2 focus:ring-[#CE9162] focus:border-[#CE9162]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <textarea
                rows={5}
                placeholder="Comments*"
                className="border text-[#535353] rounded-lg px-4 py-3 mb-6 h-[180px] w-full
                focus:outline-none focus:ring-2 focus:ring-[#CE9162] focus:border-[#CE9162]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <div className="flex justify-end font-montserrat font-semibold">
                <button
                  type="submit"
                  className="bg-[#CE9162] text-white h-[57px] w-[152px] rounded-lg"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {successMsg && (
                <p className="text-black text-center mt-4">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="text-red-600 text-center mt-4">{errorMsg}</p>
              )}
            </form>
            </div>

            {/* RIGHT INFO */}
            <div
              className={`
                space-y-8 md:space-y-10 py-8
                text-[#555] text-[15px]
                transition-all duration-700 delay-200 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              <div className="flex gap-4 items-start mr-2 md:mr-0 ml-2 md:ml-0 -mt-6 md:mt-4">
                <img src="/location.png" className="w-8 h-8 mt-1 md:mt-10" />
                <div className="text-[16px] md:text-[18px]">
                  <p className="font-montserrat font-bold mb-1 text-[#535353]">Head Office:</p>
                  <p className="font-montserrat font-regular text-[#535353]">
                    1st Floor, Niketan’s Dollars Heights, Dollars Colony, <br />
                    Behind New Bus Stand, Gokul Road, Hubballi – 580030
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start text-[#535353] font-montserrat font-regular text-[16px] md:text-[18px] mr-2 md:mr-0 ml-2 md:ml-0">
                <img src="/call.png" className="w-8 h-8 mt-1 md:mt-2" />
                <div className="space-y-1">
                  <p>
                    <a href="tel:+919739856222" className="hover:text-[#535353] hover:underline transition">
                      +91 97398 56222
                    </a>{" | "}
                    <a href="tel:+919513661236" className="hover:text-[#535353] hover:underline transition">
                      +91 95136 61236
                    </a>{" | "}
                    <a href="tel:+919449838811" className="hover:text-[#535353] hover:underline transition">
                      +91 94498 38811
                    </a>
                  </p>

                  <p>
                    <a href="tel:+919448270209" className="hover:text-[#535353] hover:underline transition">
                      +91 94482 70209
                    </a>{" | "}
                    <a href="tel:+919986789067" className="hover:text-[#535353] hover:underline transition">
                      +91 99867 89067
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start font-montserrat font-regular text-[#535353] text-[16px] md:text-[18px] mr-2 md:mr-0 ml-2 md:ml-0">
                <img src="/email.png" className="w-8 h-8" />
                <a
                  href="mailto:niketanproperties2019@gmail.com"
                  className="hover:text-[#535353] hover:underline transition"
                >
                  niketanproperties2019@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#212121] text-white py-6 md:py-12 px-4 sm:px-6 lg:px-8 -mt-12 md:mt-0"
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

              <div className="flex justify-center md:justify-start items-start gap-3 mt-10"> 
              <p className="text-[#DADADA] font-montserrat font-medium text-[18px] break-all md:break-normal">
                <a
                  href="mailto:niketanproperties2019@gmail.com"
                  className="hover:text-[#DADADA] hover:underline transition"
                >
                  niketanproperties2019@gmail.com
                </a>
              </p>
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
    </>
  );
};
