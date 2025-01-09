"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Box1 from "../../public/box-1.svg";
import Box2 from "../../public/box-2.svg";
import Box3 from "../../public/box-3.svg";

const Working = () => {
  const featuresBox = [
    {
      title: "Effortless Documentation",
      description:
        "Automate your documentation process with Neev to streamline healthcare workflows.",
      image: Box1,
    },
    {
      title: "Revolutionizing Patient Care",
      description:
        "Neev’s AI-driven solutions are custom-built for the healthcare industry.",
      image: Box2,
    },
    {
      title: "Redefining the Future of Healthcare",
      description:
        "Experience innovative technology that empowers healthcare providers and patients alike.",
      image: Box3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container overflow-hidden">
      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mt-20 p-1 bg-gradient-to-br from-neutral-300 to-neutral-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
          Next-Gen Innovation, Transforming Patient Care.
        </h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-[1280px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuresBox.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full bg-custom-box-gradient rounded-[30px] p-10 border border-[#262626]"
            variants={boxVariants}
          >
            <div className="w-[98px] h-[98px] bg-[#e4a1a1] hover:bg-white flex justify-center items-center rounded-full border border-[#262626] hover:shadow-neutral-500 duration-500">
              <Image
                src={feature.image}
                alt={feature.title}
                height={45}
                width={45}
              />
            </div>
            <div className="mt-6">
              <h3 className="font-poppins text-primary text-[22px]">
                {feature.title}
              </h3>
              <p className="font-inter text-base text-[#7A7A7A]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Working;
