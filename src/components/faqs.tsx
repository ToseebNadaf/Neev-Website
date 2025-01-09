"use client";

import { GoPlus } from "react-icons/go";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQsProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

const FAQs = () => {
  const faqs = [
    {
      question: "What is the main focus of this platform?",
      answer:
        "The platform connects patients and providers through precision, making healthcare simpler, smarter, and more human-centric by reducing administrative tasks, saving time, and allowing doctors to focus on patient care.",
    },
    {
      question: "How does this platform benefit healthcare providers?",
      answer:
        "It streamlines documentation processes, automates tedious tasks, and ensures seamless integration with EMRs, enabling providers to focus on delivering quality care.",
    },
    {
      question: "What makes the platform's AI unique?",
      answer:
        "The AI is custom-built with medically fine-tuned models that ensure accurate transcription of clinical terms, diagnoses, and treatment details.",
    },
    {
      question: "What is RAG Architecture, and how does it help?",
      answer:
        "RAG (Retrieval Augmented Graph) Architecture enhances the platform's real-time transcription and summarization accuracy by integrating advanced retrieval mechanisms.",
    },
    {
      question: "How does this platform save time for healthcare providers?",
      answer:
        "By automating administrative tasks such as transcription and summarization, the platform reduces workload, enabling providers to focus on patient care.",
    },
    {
      question: "What problem does this platform solve for doctors?",
      answer:
        "It minimizes administrative burdens, improves documentation accuracy, and ensures seamless integration with existing EMR systems.",
    },
  ];

  const Faq = ({ faq, index }: FAQsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
      if (index === 0) setIsOpen(true);
    }, []);

    return (
      <motion.div
        layout
        className={`w-full  rounded-[30px] ${
          isOpen ? "mt-4 bg-[#161616]" : ""
        }  overflow-hidden p-5`}
      >
        <button
          onClick={toggleOpen}
          className="flex items-center justify-between w-full gap-4"
        >
          <h3 className="font-poppins text-start text-primary text-sm md:text-[22px]">
            {faq.question}
          </h3>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <GoPlus className="text-primary" size={24} />
          </motion.div>
        </button>

        {/* Animated content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="font-inter text-start text-base text-[#7A7A7A] whitespace-pre-wrap pt-4">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      id="faqs"
      className="container md:pt-[90px] pb-[90px] overflow-hidden"
    >
      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mt-20 bg-gradient-to-br from-neutral-300 to-neutral-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 mt-14 max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {faqs.map((faq, index) => (
          <Faq key={index} faq={faq} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQs;
