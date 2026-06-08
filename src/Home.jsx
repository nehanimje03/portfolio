import React, { useEffect, useState } from "react";
import profile1 from "./assets/profile1.png";
import profile from "./assets/profile.jpeg";
import ecommerce from "./assets/ecommerce.png";
import edusity from "./assets/edusity.png";
// import work3 from "./assets/work3.svg";
// import work4 from "./assets/work4.svg";
// import work5 from "./assets/work5.svg";
// import work6 from "./assets/work6.svg";
import titleimg from "./assets/title-img.svg";
import logo from "./assets/logo.svg";
import { IoIosMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "./Services";
import {
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    // { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {" "}
      <header className="fixed top-0 left-0 right-0 md:py-8 py-6 z-50 bg-black/90 backdrop-blur-md px-8 sm:px-16 lg:px-[10%]">
        {" "}
        <nav className="flex items-center justify-between text-white relative">
          {/* Logo */}
          <div className="flex relative">
            <h1 className="text-3xl sm:text-4xl font-bold z-10 relative">
              Neha
            </h1>
            <img
              src={titleimg}
              alt="title"
              className="w-10 sm:w-14 absolute -bottom-1 -right-4 z-[1]"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative cursor-pointer pb-6 transition-all duration-300 ${
                  active === item.id
                    ? "text-white -translate-y-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}

                {active === item.id && (
                  <img
                    src={titleimg}
                    alt="active"
                    className="absolute w-10 left-1/2 -translate-x-1/2 top-7"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Connect Button */}
          <button className="hidden md:block bg-gradient-to-r from-purple-500 to-orange-500 rounded-full px-6 py-2 hover:scale-105 transition">
            Connect with me
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-slate-900 border border-slate-700 rounded-xl p-6 md:hidden z-50">
              <ul className=" md:flex gap-10 items-center">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.id);
                      setMenuOpen(false);
                    }}
                    className={`relative cursor-pointer py-2 ${
                      active === item.id
                        ? "text-white font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}

                    {active === item.id && (
                      <img
                        src={titleimg}
                        alt="active"
                        className="absolute w-8 left-14 -translate-x-1/2 top-7"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
      <main className="pt-24 px-8 sm:px-16 lg:px-[10%]">
        {" "}
        <section
          id="home"
          className="flex flex-col items-center text-center md:py-16 py-6 "
        >
          {/* Profile Image */}
          <img
            src={profile1}
            alt="profile"
            className="w-32 sm:w-44 md:w-52 lg:w-60 m-5 transition-transform duration-500 hover:scale-105"
          />

          {/* Heading */}
          <h1 className="font-bold leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
              I'm Neha Nimje,
            </span>{" "}
            <span className="text-white block sm:inline">
              Fullstack <br className="hidden sm:block" />
              developer based in India.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-white text-sm sm:text-base md:text-lg text-center px-2 sm:px-6 py-6 max-w-2xl">
            I am a frontend developer passionate about building modern,
            responsive web applications. I enjoy working with React, Tailwind
            CSS, and backend technologies to create full-stack solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
            <button className="bg-gradient-to-r from-purple-700 to-orange-600 rounded-full px-6 sm:px-16 py-3 sm:py-4 text-white hover:scale-105 transition duration-300">
              Connect with me
            </button>

            <button className="text-white border-2 border-white/40 hover:border-purple-500 rounded-full sm:px-16  py-3 sm:py-4 hover:scale-105 transition duration-300">
              My Resume
            </button>
          </div>
        </section>
        <section
          id="about"
          className="flex flex-col items-center text-white md:py-16 py-6 "
        >
          {/* Title */}
          <div className="mb-8 sm:mb-16 flex relative justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold z-10">
              About me
            </h1>
            <img
              src={titleimg}
              alt="title"
              className="w-20 sm:w-32 lg:w-40 absolute -bottom-2 -right-6 z-[1]"
            />
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center w-full">
            {/* Profile Image */}
            <img
              src={profile}
              alt="profile"
              className="rounded-xl w-2/3 sm:w-1/2 lg:w-1/3 object-cover"
            />

            {/* Text Section */}
            <div className="w-full">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-7">
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field.
                <br />
                <br />
                Throughout my career, I have collaborated with prestigious
                organizations, contributing to their success and growth.
                <br />
                <br />
                My passion for frontend development is reflected in both my
                experience and the dedication I bring to every project.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 py-16">
                {[
                  {
                    name: "HTML & CSS",
                    icon: <SiHtml5 className="text-orange-500" />,
                    color: "hover:border-orange-500",
                  },
                  {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss className="text-cyan-400" />,
                    color: "hover:border-cyan-400",
                  },
                  {
                    name: "Bootstrap",
                    icon: <SiBootstrap className="text-purple-500" />,
                    color: "hover:border-purple-500",
                  },
                  {
                    name: "React JS",
                    icon: <SiReact className="text-cyan-400" />,
                    color: "hover:border-cyan-400",
                  },
                  {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-yellow-400" />,
                    color: "hover:border-yellow-400",
                  },
                  {
                    name: "Next JS",
                    icon: <SiNextdotjs className="text-white" />,
                    color: "hover:border-white",
                  },
                  {
                    name: "Python",
                    icon: <SiPython className="text-blue-400" />,
                    color: "hover:border-blue-400",
                  },
                  {
                    name: "Django",
                    icon: <SiDjango className="text-green-600" />,
                    color: "hover:border-green-600",
                  },
                  {
                    name: "Django REST",
                    icon: <TbApi className="text-indigo-400" />,
                    color: "hover:border-indigo-400",
                  },
                  {
                    name: "Flask",
                    icon: <SiFlask className="text-gray-400" />,
                    color: "hover:border-gray-400",
                  },
                  {
                    name: "FastAPI",
                    icon: <SiFastapi className="text-teal-400" />,
                    color: "hover:border-teal-400",
                  },
                  {
                    name: "MySQL",
                    icon: <SiMysql className="text-blue-500" />,
                    color: "hover:border-blue-500",
                  },
                  {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="text-sky-500" />,
                    color: "hover:border-sky-500",
                  },
                  {
                    name: "SQLite",
                    icon: <SiSqlite className="text-gray-500" />,
                    color: "hover:border-gray-500",
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-3 sm:px-8 py-2 sm:py-3 border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer ${skill.color} group`}
                  >
                    <div className="text-lg sm:text-xl">{skill.icon}</div>
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="text-white flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-32 md:py-16 py-6  "
        >
          {/* Experience */}
          <div className="text-center hover:scale-110 transition duration-500">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
              5+
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">
              YEARS OF EXPERIENCE
            </p>
          </div>

          {/* Divider (hidden on mobile) */}
          <div className="hidden md:block w-0.5 h-16 bg-white/40"></div>

          {/* Projects */}
          <div className="text-center hover:scale-110 transition duration-500">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
              30+
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">
              PROJECTS COMPLETED
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-0.5 h-16 bg-white/40"></div>

          {/* Clients */}
          <div className="text-center hover:scale-110 transition duration-500">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
              5+
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">HAPPY CLIENTS</p>
          </div>
        </section>
        <section
          id="portfolio"
          className="md:py-16 py-6 flex flex-col items-center text-white  "
        >
          {/* Title */}
          <div className=" sm:mb-16 mb-8 lg:mb-20 flex relative justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold z-10 text-center">
              My Services
            </h1>

            <img
              src={titleimg}
              alt="title"
              className="w-20 sm:w-32 lg:w-40 absolute -bottom-2 -right-6 z-[1]"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 
        hover:scale-105 transition-all duration-500 hover:border-purple-500"
              >
                {/* Number */}
                <p className="text-sm sm:text-base mb-3 text-gray-300">
                  {service.number}
                </p>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-6 mb-8">
                  {service.description}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-white cursor-pointer hover:gap-4 transition-all duration-300">
                  <span className="text-sm sm:text-base">Read more</span>
                  <FaArrowRightLong />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="text-white flex flex-col items-center   md:py-16 py-6"
        >
          {/* Title */}
          <div className="mb-8 sm:mb-16 lg:mb-20 flex relative justify-center text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold z-10">
              My Latest Work
            </h1>

            <img
              src={titleimg}
              alt="title"
              className="w-20 sm:w-32 lg:w-40 absolute -bottom-2 -right-6 z-[1]"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
            <img
              src={ecommerce}
              alt="project 1"
              className="w-full rounded-xl border border-white/10 hover:border-pink-500 
      hover:scale-105 transition duration-500 object-cover"
            />

            <img
              src={edusity}
              alt="project 2"
              className="w-full rounded-xl border border-white/10 hover:border-pink-500 
      hover:scale-105 transition duration-500 object-cover"
            />
          </div>

          {/* Button */}
          <button className="mt-12 flex items-center gap-3 border border-white/40 rounded-full px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-lg hover:scale-105 hover:border-pink-500 transition duration-500">
            Show More <FaArrowRightLong />
          </button>
        </section>
        <section className="text-white flex flex-col items-center   md:py-16 py-6">
          {/* Title */}
          <div className="mb-8 sm:mb-16 lg:mb-20 flex relative justify-center text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold z-10">
              Get In Touch{" "}
            </h1>

            <img
              src={titleimg}
              alt="title"
              className="w-20 sm:w-32 lg:w-40 absolute -bottom-2 -right-6 z-[1]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Side */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Let's talk
              </h1>

              <p className="py-6 text-sm sm:text-base text-gray-300 leading-7">
                I'm currently available to take on new projects. Feel free to
                send me a message about anything you'd like me to work on. I
                respond quickly and am open to freelance opportunities.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <IoIosMail size={24} />
                <span className="text-sm sm:text-base">
                  greatstackdev@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <PiPhoneCallFill size={24} />
                <span className="text-sm sm:text-base">+772-825-524</span>
              </div>

              <div className="flex items-center gap-4">
                <MdLocationOn size={24} />
                <span className="text-sm sm:text-base">CA, United States</span>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2">
              <form className="space-y-4">
                <div>
                  <label className="text-sm">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-slate-800 px-5 py-3 rounded-md w-full mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800 px-5 py-3 rounded-md w-full mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm">Your Message</label>
                  <textarea
                    rows={6}
                    placeholder="Enter your message"
                    className="bg-slate-800 px-5 py-3 rounded-md w-full mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-orange-600 sm:px-16 py-3 rounded-full hover:scale-105 transition duration-500 w-full sm:w-auto">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="sm:my-20 my-10 flex flex-col px-8 md:px-10  sm:px-16 lg:px-[10%] md:py-16 py-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <div className=" flex flex-col md:items-start items-center   py-16 text-white text-center md:text-left">
            <div className="flex relative items-center justify-center md:justify-start">
              <h1 className="text-3xl sm:text-4xl font-bold z-10 relative">
                Neha
              </h1>

              <img
                src={titleimg}
                alt="title"
                className="w-10 sm:w-14 absolute -bottom-1 -right-6  z-0"
              />
            </div>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              I am a fullstack developer from INDIA with 5 years of{" "}
              <br className="hidden md:block" />
              experience in companies
            </p>
          </div>

          {/* Right (Subscribe) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-0">
            <div className="relative w-full sm:w-auto">
              <BiUser className="text-slate-400 absolute top-1/2 left-4 -translate-y-1/2" />
              <input
                type="text"
                className="bg-slate-800 px-12 rounded-full py-4 w-full sm:w-80 text-white"
                placeholder="Enter your email"
              />
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full px-10 text-white py-4 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-0.5 bg-white w-full opacity-30" />

        {/* Bottom Section */}
        <div className="text-white flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2023 Alex Bennett. All rights reserved.</p>

          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <li className="cursor-pointer hover:underline">
              Terms of Services
            </li>
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
            <li className="cursor-pointer hover:underline">Connect with me</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
