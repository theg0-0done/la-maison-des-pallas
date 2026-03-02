import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"]
  });

  const text = "Experience the warmth of traditional Moroccan hospitality in a beautifully restored guest house.";
  const letters = text.split("");

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
      <h2 className="text-rose-accent text-sm uppercase tracking-[0.2em] font-semibold mb-6">Our Story</h2>
      <p ref={ref} className="font-serif text-3xl md:text-5xl leading-tight text-deep-navy mb-12 flex flex-wrap justify-center">
        {letters.map((letter, i) => {
          const start = i / letters.length;
          const end = start + (1 / letters.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          return (
            <motion.span key={i} style={{ opacity }}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </p>
      <p className="text-lg text-deep-navy/70 max-w-2xl mx-auto leading-relaxed">
        Nestled in the heart of Sefrou, La Maison des Lallas offers an intimate, culturally authentic retreat. Every detail of our riad tells a story, blending modern luxury with timeless Moroccan architecture to create a sanctuary of calm and elegance.
      </p>
    </section>
  );
}
