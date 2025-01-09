"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Client {
  href: string;
}

interface InfiniteMovingCardsProps {
  items: Client[];
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({ items }) => {
  return (
    <section
      id="about"
      className="py-14 overflow-hidden max-w-[90vw] lg:max-w-[1000px] mx-auto [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      aria-labelledby="company-banner"
    >
      <div className="flex items-center pt-8 relative">
        {/* Shadows */}
        <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-main to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-main to-transparent pointer-events-none z-10" />

        {/* Marquee Content */}
        <motion.ul
          className="flex gap-4 sm:gap-6 items-center pr-6"
          initial={{ x: 0 }}
          animate={{
            x: `-50%`,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item, index) => (
            <li key={index} className="max-h-max w-20 sm:w-28">
              <Image
                src={item.href}
                alt={`Client Logo ${index + 1}`}
                width={150}
                height={150}
                className="object-contain rounded-md opacity-50"
              />
            </li>
          ))}

          {items.map((item, index) => (
            <li key={`duplicate-${index}`} className="max-h-max w-20 sm:w-28">
              <Image
                src={item.href}
                alt={`Client Logo ${index + 1} (duplicate)`}
                width={150}
                height={150}
                className="object-contain rounded-md opacity-50"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export const clients = [...new Array(10)].map((_, index) => ({
  href: `/${index + 1}.png`,
}));

export default InfiniteMovingCards;
