import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { delay, motion } from "framer-motion";
import Foreground from "./Foreground";

const Background = () => {
  return (
    <motion.div
     animate={{
        opacity: 1,
        transitionDelay : 0.2,
        transitionDuration: 2

      }}
      className=" z-[1] opacity-0 relative bottom-0 w-11/12 h-full bg-white rounded-[25px] border-solid border-2 border-slate-200 overflow-auto"
    >
      <div className=" z-[2] relative flex items-center justify-between w-ful py-11 gap-5 px-12">
        <img
          src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg"
          alt=""
        />
        <div className=" flex ">
          <p className=" hover:bg-slate-100 py-2 px-5 rounded-3xl delay-150 duration-300">
            Product
          </p>

          <p className=" hover:bg-slate-100 py-2 px-5 rounded-3xl delay-150 duration-300 flex items-center justify-center gap-2">
            <span>Compare</span>
            <MdKeyboardArrowDown className=" font-extrabold text-lg"></MdKeyboardArrowDown>
          </p>

          <p className=" hover:bg-slate-100 py-2 px-5 rounded-3xl delay-150 duration-300">
            Pricing
          </p>
          <p className=" hover:bg-slate-100 py-2 px-5 rounded-3xl delay-150 duration-300">
            Contact
          </p>
        </div>
        <div className=" flex justify-center items-center gap-5">
          <a
            href="#"
            className=" py-2 px-4 border-solid border-2 border-zinc-600 rounded-[20px] hover:bg-slate-900 hover:text-white duration-300"
          >
            <button>Login</button>
          </a>
          <a
            href="#"
            className=" py-2 px-4 font-semibold border-solid border-2 border-zinc-600 bg-slate-900 text-white rounded-3xl"
          >
            <button className=" flex items-center justify-center gap-1 ">
              Let's Talk <MdArrowOutward></MdArrowOutward>
            </button>
          </a>
        </div>
      </div>

      <motion.div
        className=" z-[1] absolute top-5 h-screen right-0 w-2/6 py-2 px-2 opacity-0 "
        animate={{
          y: -60,
          scale: 1,
          rotate: 0,
          opacity: 2,
          transition: { delay: 0.2, duration: 1 },
        }}
      >
        <img
          className=" translate-y-[60px]  h-full rounded-[25px] border-solid border-2 border-slate-200"
          src="https://framerusercontent.com/images/hY7dz3uD5cYp9mzioTBHqQvUw.png?scale-down-to=1024"
          alt=""
        />
      </motion.div>

      <Foreground />
    </motion.div>
  );
};

export default Background;
