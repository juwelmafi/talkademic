import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 bg-[#09A49A] text-white rounded-full">
                Let's talk
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none max-w-lg mb-6">
              Speak everything you imagine with{" "}
              <br className="md:hidden"/>
              <span className="inline-block text-[#09A49A]">
                <Typewriter
                  options={{
                    strings: [
                      "dream language!",
                      "open voice!",
                      "global tongue!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <p className="md:text-sm text-xs">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <motion.img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/two-girls-phone.png"
              alt=""
              animate={{ x: [0, 20, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <motion.img
              className="object-cover"
              src="https://i.ibb.co/FLpnq5P2/1750056089448.png"
              alt=""
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
      <Link
        to={"/"}
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </Link>
    </div>
  );
};

export default Header;
