import React from "react";
import profile from "./assets/profile.svg";
import profile1 from "./assets/profile1.svg";
import work from "./assets/work.svg";
import work1 from "./assets/work1.svg";
import work3 from "./assets/work3.svg";
import work4 from "./assets/work4.svg";
import work5 from "./assets/work5.svg";
import work6 from "./assets/work6.svg";
import titleimg from "./assets/title-img.svg";
import logo from "./assets/logo.svg";
import { IoIosMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div class="h-lv p-5 bg-black ">
      <header>
        <nav class="flex justify-around  text-white">
          <img src={logo} />
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
          <img src={profile} class="w-60 m-5" alt="profile" />
          <h1 class="text-center font-bold text-6xl">
            <span class="bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
              I'm Akshay kumbhare,
            </span>{" "}
            <span class="text-white">
              {" "}
              frontend <br />
              developer based in USA.
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
            <img src={profile1} class="rounded-xl w-80" />
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
              <div class="flex  gap-8 mt-10 hover:scale-105 duration-500  items-center">
                <p class="grid-cols-3 text-xl">HTML & CSS</p>
                <div className=" h-4 grid-cols-7 rounded-full">
                  <div className="h-2 w-52 bg-gradient-to-r from-purple-700 to-orange-600 rounded-full"></div>
                </div>
              </div>
              <div class="flex w-full gap-[4.5rem] mt-4 hover:scale-105 duration-500">
                <p class="text-xl">React JS</p>
                <div className=" h-4  rounded-full">
                  <div className="h-2 w-80 bg-gradient-to-r from-purple-700 to-orange-600 rounded-full"></div>
                </div>
              </div>
              <div class="flex gap-[3.4rem] mt-4 hover:scale-105 duration-500">
                <p class="text-xl">JavaScript</p>
                <div className=" h-4  rounded-full">
                  <div className="h-2 w-64 bg-gradient-to-r from-purple-700 to-orange-600 rounded-full"></div>
                </div>
              </div>
              <div class="flex gap-20 mt-4 hover:scale-105 duration-500">
                <p class="grid-cols-4 text-xl">Next JS</p>
                <div className=" h-4 grid-cols-6  rounded-full">
                  <div className="h-2 w-52 bg-gradient-to-r from-purple-700 to-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-white flex gap-32 justify-center m-20">
          <div class="flex gap-32  ">
            <div class="text-center hover:scale-125 duration-700 ease-in-out">
              <h1 class="text-4xl mb-3 font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                10+
              </h1>

              <p class="text-lg">YEARS OF EXPERIENCE</p>
            </div>
            <div class="bg-white w-0.5"></div>
          </div>

          <div class="flex gap-32  ">
            <div class="text-center hover:scale-125 duration-700 ease-in-out">
              <h1 class="text-4xl mb-3 font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                90+
              </h1>

              <p class="text-lg">PROJECTS COMPLETED</p>
            </div>
            <div class="bg-white w-0.5"></div>
          </div>

          <div class="flex gap-32 ">
            <div class="text-center hover:scale-125 duration-700 ease-in-out">
              <h1 class="text-4xl mb-3 font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                15+
              </h1>

              <p class="text-lg">HAPPY CLIENTS</p>
            </div>
          </div>
        </section>
        <section class="my-10  flex flex-col items-center text-white">
          <div class="mb-20 flex relative ">
            <h1 class="text-6xl font-bold z-10 relative ">My Services</h1>
            <img
              src={titleimg}
              class="w-40 absolute -bottom-1.5 -right-8 z-[1]"
            />
          </div>

          <div class="flex flex-wrap gap-8 items-center justify-center">
            <div class="border-2 border-white px-10 py-5 rounded-lg hover:bg-gradient-to-tr from-purple-950 via-red-900 to-orange-950 hover:border-purple hover:scale-105 duration-700 ease-in-out">
              <p class="text-2xl pb-3">01</p>
              <p class="text-3xl pb-3 bg-gradient-to-r font-bold from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Web design
              </p>
              <p class="text-xl pb-10">
                Web development is the process <br />
                of building, programming...
              </p>
              <p class="flex items-center gap-3 text-xl">
                Read more
                <FaArrowRightLong />
              </p>
            </div>

            <div class="border-2 border-white px-10 py-5 rounded-lg hover:bg-gradient-to-tr from-purple-950 via-red-900 to-orange-950 hover:border-purple hover:scale-105 duration-700 ease-in-out">
              <p class="text-2xl pb-3">01</p>
              <p class="text-3xl pb-3 bg-gradient-to-r font-bold from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Web design
              </p>
              <p class="text-xl pb-10">
                Web development is the process <br />
                of building, programming...
              </p>
              <p class="flex items-center gap-3 text-xl">
                Read more
                <FaArrowRightLong />
              </p>
            </div>

            <div class="border-2 border-white px-10 py-5 rounded-lg hover:bg-gradient-to-tr from-purple-950 via-red-900 to-orange-950 hover:border-purple hover:scale-105 duration-700 ease-in-out">
              <p class="text-2xl pb-3">01</p>
              <p class="text-3xl pb-3 bg-gradient-to-r font-bold from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Web design
              </p>
              <p class="text-xl pb-10">
                Web development is the process <br />
                of building, programming...
              </p>
              <p class="flex items-center gap-3 text-xl">
                Read more
                <FaArrowRightLong />
              </p>
            </div>

            <div class="border-2 border-white px-10 py-5 rounded-lg hover:bg-gradient-to-tr from-purple-950 via-red-900 to-orange-950 hover:border-purple hover:scale-105 duration-700 ease-in-out">
              <p class="text-2xl pb-3">01</p>
              <p class="text-3xl pb-3 bg-gradient-to-r font-bold from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Web design
              </p>
              <p class="text-xl pb-10">
                Web development is the process <br />
                of building, programming...
              </p>
              <p class="flex items-center gap-3 text-xl">
                Read more
                <FaArrowRightLong />
              </p>
            </div>

            <div class="border-2 border-white px-10 py-5 rounded-lg hover:bg-gradient-to-tr from-purple-950 via-red-900 to-orange-950 hover:border-purple hover:scale-105 duration-700 ease-in-out">
              <p class="text-2xl pb-3">01</p>
              <p class="text-3xl pb-3 bg-gradient-to-r font-bold from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Web design
              </p>
              <p class="text-xl pb-10">
                Web development is the process <br />
                of building, programming...
              </p>
              <p class="flex items-center gap-3 text-xl">
                Read more
                <FaArrowRightLong />
              </p>
            </div>

            <div class="border-2 border-white px-10 py-5 rounded-lg hover:bg-gradient-to-tr from-purple-950 via-red-900 to-orange-950 hover:border-purple hover:scale-105 duration-700 ease-in-out">
              <p class="text-2xl pb-3">01</p>
              <p class="text-3xl pb-3 bg-gradient-to-r font-bold from-purple-600 to-orange-500 inline-block text-transparent bg-clip-text">
                Web design
              </p>
              <p class="text-xl pb-10">
                Web development is the process <br />
                of building, programming...
              </p>
              <p class="flex items-center gap-3 text-xl">
                Read more
                <FaArrowRightLong />
              </p>
            </div>
          </div>
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
              src={work}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />

            <img
              src={work1}
              class="w-96 hover:border-4 border-pink-600 hover:rounded-xl hover:scale-105 duration-700 ease-in-out"
            />
            <img
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
            />
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
