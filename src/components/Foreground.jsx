import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { motion } from "framer-motion";
const Foreground = () => {
  return (
    <div className=" relative w-full h-screen overflow-hidden top-10">
      <motion.div
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
        className=" flex ml-20 flex-col w-[50%] items-start flex-shrink-0"
      >
        <div className=" flex justify-center items-center w-48 border-solid border-2 border-slate-300 py-2 rounded-3xl mb-5">
          <p>Financal Management</p>
        </div>

        <div className=" flex flex-col flex-shrink-0 text-[90px] font-semibold leading-[95px] mb-5">
          <h1>A simpler,</h1>
          <h1>smarter basic</h1>
          <h1>
            credit{" "}
            <span className=" text-sky-400">
              ca<span className="text-sky-300">rd.</span>
            </span>
          </h1>
        </div>

        <div className=" flex items-start mb-10">
          <p className=" flex flex-col text-slate-600">
            <span>
              Your powerful companion on the road to financial success! Explore
            </span>
            <span>personal budget management, investment opportunities.</span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center justify-center gap-2 w-30 bg-black text-white font-semibold rounded-3xl py-3 px-4">
            <IoLogoApple className=" text-lg"></IoLogoApple>
            <p>App Store</p>
          </div>
          <div className="flex items-center justify-center ml-7">
            <img
              className="w-12 h-12 border-2 border-slate-100 rounded-full p-1"
              src="https://framerusercontent.com/images/mjpixPbzIMix5MtxX2IOrVDtKA.png?scale-down-to=512"
              alt=""
            />
            <img
              className="w-12 h-12 border-2 border-slate-100 rounded-full p-1"
              src="https://framerusercontent.com/images/ChLTRKDcxHYxLN5gf9LJPecpk8.png?scale-down-to=512"
              alt=""
            />
            <img
              className="w-12 h-12 border-2 border-slate-100 rounded-full p-1"
              src="https://framerusercontent.com/images/8TysGUZ0I12C6YWxZUdhVfEus.png?scale-down-to=512"
              alt=""
            />
          </div>
          <div className=" flex flex-col">
            <p className=" font-semibold tracking-tight">24K+</p>
            <p className=" text-xs text-slate-500 tracking-tight">
              Active User
            </p>
          </div>
        </div>
      </motion.div>

      <div className="image w-[50%] h-60">
        <motion.img
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, duration: 1.5, type: "tween" }}
          className=" z-[3] absolute top-0 right-[13%] w-[30%]"
          src="https://framerusercontent.com/images/1JFj3FwlaG94oqSBTQUOdyY6nHA.png?scale-down-to=1024"
          alt=""
        />
      </div>
    </div>
  );
};

export default Foreground;
