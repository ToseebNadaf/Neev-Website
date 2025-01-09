"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.3 }}
      className="sticky top-0 w-full px-5 md:px-10 lg:px-[64px] z-50 py-8"
    >
      <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        <aside className="flex items-center gap-[6px]">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="neev logo"
            className="shadow-sm"
          />
          <p className="text-3xl font-bold">Neev</p>
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Link href="/#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#team">Team</Link>
            </li>
            <li>
              <Link href="#faqs">FAQs</Link>
            </li>
            <li>
              <Link href="#cta">Connect</Link>
            </li>
          </ul>
        </nav>
        <aside className="flex items-center gap-4">
          <Link
            href="https://wellfound.com/company/neevhq"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            target="_blank"
          >
            <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Careers
            </span>
          </Link>

          {isOpen ? (
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          ) : (
            <button onClick={() => setOpen(true)}>
              <MenuIcon className="md:hidden" />
            </button>
          )}
        </aside>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -5, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -5, x: "-50%" }}
            transition={{ duration: 0.5 }}
            className="border rounded-[20px] bg-[#181717] md:hidden absolute w-full max-w-[90%] mt-12 left-1/2"
          >
            <ul className="flex flex-col gap-6 items-center w-full py-10 px-8">
              <li
                className="text-[#7A7A7A] hover:text-primary transition-colors duration-300 font-inter text-base font-normal"
                onClick={() => setOpen(false)}
              >
                <a href="#">Home</a>
              </li>
              <li
                className="text-[#7A7A7A] hover:text-primary transition-colors duration-300 font-inter text-base font-normal"
                onClick={() => setOpen(false)}
              >
                <a href="#about">About</a>
              </li>
              <li
                className="text-[#7A7A7A] hover:text-primary transition-colors duration-300 font-inter text-base font-normal"
                onClick={() => setOpen(false)}
              >
                <a href="#team">Team</a>
              </li>
              <li
                className="text-[#7A7A7A] hover:text-primary transition-colors duration-300 font-inter text-base font-normal"
                onClick={() => setOpen(false)}
              >
                <a href="#faqs">FAQs</a>
              </li>
              <li
                className="text-[#7A7A7A] hover:text-primary transition-colors duration-300 font-inter text-base font-normal"
                onClick={() => setOpen(false)}
              >
                <a href="#cta">Connect</a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
