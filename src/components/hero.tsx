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
      <div id="home" className="flex flex-col mt-32 sm:mt-24 md:mt-20 lg:mt-16">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl lg:max-w-6xl mx-auto text-center mt-6 relative z-20 py-4 sm:py-6 bg-clip-text text-transparent bg-gradient-to-b 
            from-neutral-800 via-neutral-700 to-neutral-700 
            dark:from-neutral-800 dark:via-white dark:to-white"
        >
          Connecting Patients and <br /> Providers Through{" "}
          <Cover>Precision</Cover>
        </h1>

        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <p
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 
              dark:text-neutral-400 text-center px-2 sm:px-4"
          >
            Making healthcare simple, smart, and more human-centric by reducing
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
          className="rounded-[50px] p-[10px] border flex items-center mt-8 sm:mt-10 md:mt-12 max-w-[90%] sm:max-w-[450px] md:max-w-[500px] mx-auto gap-2 z-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-[#0D0D0D] flex-1 text-[#7D7F78] text-sm sm:text-base font-inter placeholder:text-primary/60 rounded-[50px] 
              focus:outline-none py-3 sm:py-[14.5px] px-4 sm:px-[16px] w-full"
          />
          <button
            type="submit"
            className="bg-[#e4a1a1] hover:bg-white group transition-all rounded-[50px] py-3 sm:py-[14.5px] px-4 sm:px-[16px] text-xs sm:text-sm 
              font-medium text-[#0D0D0D] shadow-custom-shadow hover:shadow-neutral-500 duration-500"
          >
            Join Waitlist
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Hero;
