/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="pb-[90px] overflow-hidden mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1280px] mx-auto px-4">
          <motion.div
            className="flex flex-col justify-center items-center md:items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* first */}
            <motion.blockquote
              className="text-3xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap"
              variants={childVariants}
            >
              Effortless Documentation For <br />
              <span className="text-left inline-block bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% bg-clip-text text-transparent w-fit">
                Smarter Healthcare
              </span>
            </motion.blockquote>

            {/* second */}
            <motion.div
              className="text-base sm:text-lg mb-6 text-white"
              variants={childVariants}
            >
              <h3 className="text-base sm:text-lg mb-6 text-gray-500 font-dmsans">
                Automate your documentation process with Neev - seamless,
                accurate, and ready for your EMRs.
              </h3>
            </motion.div>

            {/* third */}
            <motion.a
              className="text-primary flex items-center gap-[6px]"
              variants={childVariants}
            >
              <div className="flex flex-col gap-4">
                <div className="text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
                  <span className="font-extrabold">
                    Transcribe Conversations
                  </span>{" "}
                  Record and summarise doctor-patient interactions with speaker
                  diarisation.
                </div>
                <div className="text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
                  <span className="font-bold">Empower Patients</span> Share
                  Patient Visit Summaries (PVS) for continuity in care.
                </div>
                <div className="text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
                  <span className="font-bold">Integrate Seamlessly</span> Send
                  summaries directly to EMR.
                </div>
              </div>
            </motion.a>
          </motion.div>
          <motion.div
            className="md:max-w-[614px] max-h-[430px] mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <img
              src="/doc1.png"
              className="rounded-3xl w-96 h-80 object-center"
              loading="lazy"
              alt="doc1"
            />
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="pb-[90px] overflow-hidden mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1280px] mx-auto px-4">
          <motion.div
            className="md:max-w-[614px] max-h-[430px] mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <img
              src="/doc2.png"
              className="rounded-3xl w-96 h-80 object-center"
              loading="lazy"
              alt="doc1"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center md:items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* first */}
            <motion.blockquote
              className="text-3xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap flex flex-wrap"
              variants={childVariants}
            >
              Precision AI for &nbsp;
              <span className="text-left inline-block bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% bg-clip-text text-transparent w-fit">
                Modern Healthcare
              </span>
            </motion.blockquote>

            {/* second */}
            <motion.div
              className="text-base sm:text-lg mb-6 text-white"
              variants={childVariants}
            >
              <h3 className="text-base sm:text-lg mb-6 text-gray-500 font-dmsans">
                Custom-built intelligence to simplify, secure, and redefine
                patient care.
              </h3>
            </motion.div>

            {/* third */}
            <motion.a
              className="text-primary flex items-center gap-[6px]"
              variants={childVariants}
            >
              <div className="flex flex-col gap-4">
                <div className="text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
                  <span className="font-extrabold">
                    Medically Fine-Tuned Models &nbsp;
                  </span>
                  Neev&apos;s transcription and summarization models ensure
                  accurate capture of clinical terms, diagnoses, and treatment
                  details.
                </div>
                <div className="text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
                  <span className="font-extrabold">
                    RAG Architecture &nbsp;
                  </span>
                  Share Patient Visit Summaries (PVS) for continuity in care.
                </div>
                <div className="text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
                  <span className="font-extrabold">
                    Secure, Grade-A Data Privacy &nbsp;
                  </span>
                  Send summaries directly to EMR.
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
