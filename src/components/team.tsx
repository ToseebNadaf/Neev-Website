import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "Neev's advanced AI capabilities and innovative solutions have redefined how we approach complex workflows, making everything seamless and efficient.",
      name: "Abhinav Singh",
      designation: "Al/ML Engineer, IIT Madras Alumnus",
      src: "/abhinav.png",
    },
    {
      quote:
        "The platform's precision and ease of use have revolutionized our medical workflows, enabling better focus on patient care and research.",
      name: "Dr. Saurabh Bajpai",
      designation: "Doctor, Leading Research",
      src: "/saurabh.png",
    },
    {
      quote:
        "The solution's accuracy and efficiency have streamlined our financial processes, making complex calculations and compliance tasks effortless.",
      name: "Mayank Agarwal",
      designation: "CA, SRCC Alumnus",
      src: "/mayank.jpg",
    },
    {
      quote:
        "The platform's powerful features and seamless integration have revolutionized the way we handle data pipelines, ensuring accuracy and efficiency at every step.",
      name: "Prabesh Goyal",
      designation: "Data Engineer",
      src: "/pravesh.jpg",
    },
    {
      quote:
        "The intuitive design and user-centric features have redefined our approach to product development, enabling us to craft seamless experiences with ease.",
      name: "Ricky Bahrey",
      designation: "Product Designer",
      src: "/ricky.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
