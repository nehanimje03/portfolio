import React from "react";
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
  return (
    <div class="h-lv p-5 bg-black ">
      <header>
        <nav class="flex justify-around  text-white">
          {/* <img src={logo} /> */}
          <div class=" flex relative">
            <h1 class="text-4xl font-bold z-10 relative">Neha</h1>
            <img
              src={titleimg}
              class="w-14 absolute -bottom-0.5 -right-5 z-[1]"
            />
          </div>
          {/* <span class="text-4xl font-bold">AleX </span> */}
          <ul class="flex gap-10">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <button class="bg-gradient-to-r from-purple-500 to-orange-500 rounded-full px-6 py-2">
            Connect with me
          </button>
          <div class="hidden ">
            <ul class=" gap-10">
              <li>Home</li>
              <li>About Me</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
            <button class="bg-gradient-to-r from-purple-500 to-orange-500 rounded-full px-6 py-2">
              Connect with me
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section class="flex items-center flex-col">
          <img
            src={profile1}
            class="w-60 m-5"
            alt="profile"
          />
          <h1 class="text-center font-bold text-6xl">
            <span class="bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
              I'm Neha Nimje,
            </span>{" "}
            <span class="text-white">
              {" "}
              Fullstack <br />
              developer based in india.
            </span>
          </h1>
          <p class="text-white text-center text-lg p-6">
            I am a frontend developer from California, USA with 10 years of
            experience in multiple <br />
            companies like Microsoft, Tesla and Apple.
          </p>
          <div class="flex gap-8">
            <button className="bg-gradient-to-r from-purple-700 to-orange-600 rounded-full px-8 py-4 text-white hover:border-white hover:border-2">
              Connect with me
            </button>

            <button class="text-white border-2 border-white-500 hover:border-2 hover:border-purple-500 rounded-full px-12 py-4">
              My Resume
            </button>
          </div>
        </section>
        <section class="flex flex-col m-20 items-center text-white">
          <div class="mb-20 flex relative ">
            <h1 class="text-6xl font-bold z-10 relative ">About me</h1>
            <img
              src={titleimg}
              class="w-40 absolute -bottom-1.5 -right-8 z-[1]"
            />
          </div>
          <div class="flex gap-16">
            <img
              src={profile}
              class="rounded-xl w-1/3"
            />
            <div>
              <p class="text-lg">
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field.
                <br /> Throughout my career, I have had the privilege of
                collaborating with prestigious organizations, contributing{" "}
                <br /> to their success and growth.
                <br />
                <br />
                My passion for frontend development is not only reflected in my
                extensive experience but also in the <br />
                enthusiasm and dedication I bring to each project.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-10">
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
                    className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer ${skill.color} group`}
                  >
                    <div className="text-xl">{skill.icon}</div>
                    <p className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section class="text-white flex gap-32 justify-center m-20">
          <div class="flex gap-32  ">
            <div class="text-center hover:scale-125 duration-700 ease-in-out">
              <h1 class="text-4xl mb-3 font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                5+
              </h1>

              <p class="text-lg">YEARS OF EXPERIENCE</p>
            </div>
            <div class="bg-white w-0.5"></div>
          </div>

          <div class="flex gap-32  ">
            <div class="text-center hover:scale-125 duration-700 ease-in-out">
              <h1 class="text-4xl mb-3 font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                30+
              </h1>

              <p class="text-lg">PROJECTS COMPLETED</p>
            </div>
            <div class="bg-white w-0.5"></div>
          </div>

          <div class="flex gap-32 ">
            <div class="text-center hover:scale-125 duration-700 ease-in-out">
              <h1 class="text-4xl mb-3 font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                5+
              </h1>

              <p class="text-lg">HAPPY CLIENTS</p>
            </div>
          </div>
        </section>
        <section class="my-10  flex flex-col items-center text-white">
          <section class="my-10 flex flex-col items-center text-white">
            <div class="mb-20 flex relative">
              <h1 class="text-6xl font-bold z-10 relative">My Services</h1>
              <img
                src={titleimg}
                class="w-40 absolute -bottom-1.5 -right-8 z-[1]"
              />
            </div>

            {/* GRID FIX */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full max-w-6xl">
              {services.map((service, index) => (
                <div
                  key={index}
                  class="border border-white/30 rounded-xl p-8 hover:scale-105 transition-all duration-500"
                >
                  <p class="text-lg mb-4">{service.number}</p>

                  <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                    {service.title}
                  </h2>

                  <p class="text-gray-300 text-sm leading-6 mb-10">
                    {service.description}
                  </p>

                  <div class="flex items-center gap-2 text-white cursor-pointer hover:gap-4 transition-all duration-300">
                    <span>Read more</span>
                    <FaArrowRightLong />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section class="text-white flex flex-col items-center m-10">
          <div class="m-20 flex relative ">
            <h1 class="text-6xl font-bold z-10 relative ">My latest work</h1>
            <img
              src={titleimg}
              class="w-40 absolute -bottom-1.5 -right-8 z-[1]"
            />
          </div>
          <div class="flex flex-wrap gap-8 justify-center ">
            <img
              src={ecommerce}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />

            <img
              src={edusity}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />
            {/* <img
              src={work3}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />
            <img
              src={work4}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />
            <img
              src={work5}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />
            <img
              src={work6}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            /> */}
          </div>
          <button class="flex justify-center items-center gap-3 border-2 rounded-full px-9 py-4 text-xl border-white m-20 hover:scale-105 duration-700 ease-in-out">
            Show More <FaArrowRightLong />
          </button>
        </section>

        <section>
          <div class="text-white flex flex-col items-center  m-10">
            <div class=" flex flex-evenly relative mb-20">
              <h1 class="text-6xl font-bold z-10 relative ">Get in touch</h1>
              <img
                src={titleimg}
                class="w-40 absolute -bottom-1.5 -right-8 z-[1]"
              />
            </div>
          </div>
          <div class="flex-col  md:gap-16  lg:flex-row  sm:flex-col text-white mx-32 justify-evenly">
            <div class="w-full">
              <h1 class="text-5xl pb-3 bg-gradient-to-r font-bold  from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Let's talk
              </h1>

              <p class="py-5">
                I'm currently avaliable to take on new projects, so feel free to
                send <br /> me a message about anything that you want me to work
                on. You can <br /> contact anytime.
              </p>
              <p class="flex gap-5 text-md pb-3">
                <IoIosMail size={30} />
                greatstackdev@gmail.com
              </p>
              <p class="flex gap-5 text-md pb-3">
                <PiPhoneCallFill size={30} /> +772-825-524
              </p>
              <p class="flex gap-5 text-md">
                <MdLocationOn size={30} />
                CA, United States
              </p>
            </div>
            <div class="w-full">
              <form>
                <label>Your Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="bg-slate-800 px-5 py-3 rounded-md my-3 w-full"
                />
                <br />
                <label>Your Email</label>
                <br />

                <input
                  type="text"
                  placeholder="Enter your email"
                  class="bg-slate-800 px-5 py-3 rounded-md my-3 w-full"
                />
                <br />
                <label>Write your message here</label>
                <br />
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="8"
                  cols="50"
                  class="bg-slate-800 px-5 py-3 rounded-md my-3 w-full"
                >
                  Enter your message here
                </textarea>
                <button class="bg-gradient-to-r from-purple-600 to-orange-600 px-10 py-4 hover:scale-105 duration-500 rounded-full">
                  {" "}
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer class="my-20 flex flex-col ">
        <div class="flex  justify-around  ">
          <div class="text-white">
            <img src={logo} />
            <p>
              I am a frontend developer from, USA with 10 years of <br />
              experience in companies like Microsoft, Tesla and Apple.
            </p>
          </div>
          <div>
            <BiUser class="text-slate-400 relative top-9 left-4 -z-[-1]" />
            <input
              type="text"
              class="bg-slate-800 px-12 rounded-full py-4 w-80 me-5"
              placeholder="Enter your email"
            />
            <button class="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full px-10 text-white py-4">
              Subscribe
            </button>
          </div>
        </div>
        <div class="m-5 mx-auto h-0.5 bg-white w-[80%] flex justify-center  items-center">
          {" "}
        </div>
        <div class="text-white flex justify-around  ">
          <div>
            <p>© 2023 Alex Bennett. All rights reserved.</p>
          </div>
          <div>
            <ul class="flex gap-6">
              <li>Term of Services</li>
              <li>Privacy Policy</li>
              <li>Connect with me</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
