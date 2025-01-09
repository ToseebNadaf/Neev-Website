"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./sparkles";

export function LampComponent() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl"
      >
        Meet Our Team
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      id="team"
      className={cn(
        "relative flex min-h-[700px] sm:min-h-[700px] md:min-h-[700px] flex-col items-center justify-center overflow-hidden bg-neutral-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 sm:h-56 w-[20rem] sm:w-[30rem] bg-gradient-conic from-neutral-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-neutral-950 h-32 sm:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 sm:h-56 w-[20rem] sm:w-[30rem] bg-gradient-conic from-transparent via-transparent to-neutral-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-full right-0 bg-neutral-950 h-32 sm:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-36 sm:h-48 w-full scale-x-125 bg-neutral-950 blur-2xl"></div>
        <div className="w-[20rem] sm:w-[40rem] h-20 sm:h-40 relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>

      <div className="relative z-50 flex -translate-y-40 sm:-translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
