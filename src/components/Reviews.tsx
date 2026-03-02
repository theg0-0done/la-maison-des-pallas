import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";

const reviews = [
  {
    id: 1,
    name: "Sophie Laurent",
    location: "Paris, France",
    rating: 5,
    text: "An absolutely magical stay. The riad is a hidden gem — every corner feels like a work of art. The staff made us feel like family.",
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "London, UK",
    rating: 5,
    text: "The attention to detail is extraordinary. From the hand-carved doors to the fresh mint tea served on arrival, everything was perfect.",
  },
  {
    id: 3,
    name: "Amira El-Fassi",
    location: "Casablanca, Morocco",
    rating: 4,
    text: "A beautiful stay with authentic charm. The traditional decor is stunning and the atmosphere is incredibly welcoming.",
  },
  {
    id: 4,
    name: "Marco Benedetti",
    location: "Rome, Italy",
    rating: 5,
    text: "We've traveled to many riads, but La Maison des Lallas stands apart. The rooftop breakfast with Atlas Mountain views is unforgettable.",
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "The hammam experience was transformative. Combined with the beautiful courtyard and incredible hospitality, this was our best trip yet.",
  },
  {
    id: 6,
    name: "Elena Vasiliev",
    location: "Berlin, Germany",
    rating: 4,
    text: "A peaceful oasis in the heart of Sefrou. The cooking class was a highlight — we learned to make the most delicious tagine.",
  },
  {
    id: 7,
    name: "David Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "From the moment we arrived, we knew this place was special. The intricate zellige tilework alone is worth the visit. Truly exceptional.",
  },
  {
    id: 8,
    name: "Isabella Rossi",
    location: "Milan, Italy",
    rating: 5,
    text: "Pure elegance. The blend of traditional Moroccan architecture with modern comforts is seamless. We didn't want to leave.",
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLDivElement>("[data-review-card]");
    if (cards[index]) {
      const card = cards[index];
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft = card.offsetLeft - container.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % reviews.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext]);

  // Reset timer on manual interaction
  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, 3000);
  }, [goToNext]);

  const handlePrev = () => {
    resetTimer();
    setActiveIndex((prev) => {
      const next = prev === 0 ? reviews.length - 1 : prev - 1;
      scrollToIndex(next);
      return next;
    });
  };

  const handleNext = () => {
    resetTimer();
    goToNext();
  };

  // Detect which card is centered on manual scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = container.querySelectorAll<HTMLDivElement>("[data-review-card]");
        const containerCenter = container.scrollLeft + container.offsetWidth / 2;
        let closestIdx = 0;
        let closestDist = Infinity;
        cards.forEach((card, idx) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(containerCenter - cardCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        setActiveIndex(closestIdx);
        resetTimer();
      }, 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [resetTimer]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-deep-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-rose-accent text-sm uppercase tracking-[0.2em] font-semibold mb-6">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-soft-beige">Guest Experiences</h3>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-soft-beige/30 text-soft-beige hover:bg-rose-accent hover:text-deep-navy hover:border-rose-accent transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-soft-beige/30 text-soft-beige hover:bg-rose-accent hover:text-deep-navy hover:border-rose-accent transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 pb-8"
      >
        {reviews.map((review, i) => (
          <div
            key={review.id}
            data-review-card
            className={`snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[440px] bg-deep-navy border rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ${i === activeIndex
              ? "border-rose-accent/60 shadow-lg shadow-rose-accent/10 scale-100"
              : "border-soft-beige/10 opacity-60 scale-95"
              }`}
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className={`w-5 h-5 ${s < review.rating ? "fill-rose-accent text-rose-accent" : "fill-transparent text-soft-beige/30"
                      }`}
                  />
                ))}
              </div>
              <p className="text-lg md:text-xl text-soft-beige/90 font-serif leading-relaxed mb-8">
                "{review.text}"
              </p>
            </div>
            <div className="border-t border-soft-beige/10 pt-6">
              <p className="text-soft-beige font-medium">{review.name}</p>
              <p className="text-soft-beige/50 text-sm mt-1">{review.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              scrollToIndex(i);
              resetTimer();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-rose-accent w-6" : "bg-soft-beige/30"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
