"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";

const Footer = () => {
  const links = [
    {
      id: 1,
      href: "https://neevhq.notion.site/privacypolicy",
      title: "Privacy Policy",
    },
    {
      id: 2,
      href: "https://neevhq.notion.site/termsandconditions",
      title: "Terms & Conditions",
    },
  ];

  return (
    <footer className="px-5 md:px-10 lg:px-[64px] py-8">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-32">
        <div className="flex-grow basis-0 flex-shrink-0">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="neev logo"
            className="shadow-sm"
          />
        </div>

        <ul className="flex items-center justify-center gap-8 flex-col md:flex-row">
          {links.map((link) => (
            <li key={link.id} className="text-[#d6d1d1] font-inter text-sm">
              <a href={link.href} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-grow basis-0 flex-shrink-0 justify-end flex items-center mt-8 xl:mt-0">
          <p className="text-primary font-inter text-sm text-center">
            <Link
              href="https://x.com/NeevHQ"
              target="_blank"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Twitter />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
