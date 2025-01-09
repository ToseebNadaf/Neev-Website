"use client";

import { motion } from "framer-motion";

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      id="cta"
      className="container md:pt-[90px] pb-[90px] overflow-hidden"
    >
      <motion.div
        className="bg-cta-gradient rounded-3xl py-[60px] px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        layout="position"
      >
        <motion.h2
          className="mt-20 bg-gradient-to-br from-neutral-300 to-neutral-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
          variants={boxVariants}
        >
          Join the Future of Healthcare
        </motion.h2>
        <motion.p
          className="mt-8 text-center text-[#7D7F78] max-w-[450px] mx-auto"
          variants={boxVariants}
        >
          Be among the first to experience the next generation of healthcare
          technology
        </motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.8 },
          }}
          className="rounded-[50px] p-[10px] border-border border flex items-center mt-12 max-w-[470px] mx-auto gap-2 z-10"
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
      </motion.div>
    </section>
  );
};

export default Cta;
