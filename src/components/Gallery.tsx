import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", h: "h-48" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", h: "h-56" },
];

// Split images into columns
const col1 = images.filter((_, i) => i % 3 === 0);
const col2 = images.filter((_, i) => i % 3 === 1);
const col3 = images.filter((_, i) => i % 3 === 2);

function ImageCard({ img, index }: { img: { src: string; h: string }; index: number }) {
  return (
    <div className={`rounded-2xl overflow-hidden bg-white shadow-lg relative group ${img.h}`}>
      <img
        src={img.src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
}

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Alternating directions with different speeds for a random feel
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -140]);

  const columns = [
    { items: col1, y: y1 },
    { items: col2, y: y2 },
    { items: col3, y: y3 },
  ];

  return (
    <section id="gallery" ref={containerRef} className="max-h-[180vh] py-32 px-6 md:px-12 bg-deep-navy overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-rose-accent text-sm uppercase tracking-[0.2em] font-semibold mb-6">Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-soft-beige">Glimpses of Elegance</h3>
      </div>

      {/* Desktop: 3 columns, Mobile: 2 columns */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {columns.map((col, colIndex) => (
          <motion.div
            key={colIndex}
            style={{ y: col.y }}
            className={`flex flex-col gap-4 md:gap-6 ${colIndex === 2 ? "hidden lg:flex" : ""}`}
          >
            {col.items.map((img, i) => (
              <ImageCard img={img} index={colIndex * col.items.length + i} />
            ))}
          </motion.div>
        ))}

        {/* On mobile (2 cols), redistribute col3 images into col1 and col2 */}
        <div className="contents lg:hidden">
          {col3.map((img, i) => (
            <div key={`mobile-extra-${i}`} className={i % 2 === 0 ? "col-start-1" : "col-start-2"}>
              <ImageCard img={img} index={100 + i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
