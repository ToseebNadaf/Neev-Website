"use client";

import React from "react";
import { Cover } from "./ui/cover";
import { BackgroundLines } from "./ui/background-lines";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ scale: 0, y: 50 }}
      animate={{ scale: 1, y: 0, transition: { duration: 1.2 } }}
    >
      <div id="home" className="flex flex-col mt-40 md:mt-20">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Connecting Patients and <br /> Providers Through
          <Cover>Precision</Cover>
        </h1>

        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Making healthcare simple, smart, and more human centric by reducing
            admin work, saving time, and enabling doctors to focus on what truly
            matters - Patients
          </p>
        </BackgroundLines>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.8 },
          }}
          className="rounded-[50px] p-[10px] border flex items-center mt-12 max-w-[410px] mx-auto gap-2 z-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-[#0D0D0D] flex-1 text-[#7D7F78] text-sm font-inter placeholder:text-primary/60 rounded-[50px] focus:outline-none py-[14.5px] px-[16px] sm:px-[28px] sm:pl-[22px] w-full"
          />
          <button
            type="submit"
            className="bg-[#e4a1a1] hover:bg-white group transition-all rounded-[50px] py-[14.5px] px-[16px] sm:px-[28px] text-[#0D0D0D] font-poppins text-xs sm:text-[15px] font-medium shadow-custom-shadow text-nowrap hover:shadow-neutral-500 duration-500"
          >
            Join Waitlist
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Hero;
