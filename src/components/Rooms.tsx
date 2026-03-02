import { Star, BedDouble, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const rooms = [
  {
    id: 1,
    name: "The Royal Suite",
    rating: 4.9,
    beds: "1 King",
    guests: "2 Guests",
    price: 150,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "The Medina Room",
    rating: 4.7,
    beds: "1 Queen",
    guests: "2 Guests",
    price: 95,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "The Courtyard Room",
    rating: 4.8,
    beds: "2 Twin",
    guests: "2 Guests",
    price: 110,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "The Atlas Suite",
    rating: 4.9,
    beds: "1 King",
    guests: "2 Guests",
    price: 180,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "The Oasis Room",
    rating: 4.8,
    beds: "1 Queen",
    guests: "2 Guests",
    price: 120,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-serif font-medium text-deep-navy mb-4">Available Rooms</h2>
          <div className="w-16 h-1 bg-rose-accent"></div>
        </div>
        <div className="flex gap-4">
          <button onClick={scrollLeft} className="p-2 rounded-full border border-deep-navy/20 text-deep-navy hover:bg-rose-accent hover:text-soft-beige hover:border-rose-accent transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollRight} className="p-2 rounded-full border border-deep-navy/20 text-deep-navy hover:bg-rose-accent hover:text-soft-beige hover:border-rose-accent transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8">
        {rooms.map((room, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            key={room.id}
            className="w-full md:w-[360px] h-[420px] snap-start shrink-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-deep-navy/5 flex flex-col"
          >
            <div className="h-48 overflow-hidden shrink-0">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-medium text-deep-navy">{room.name}</h3>
                <div className="flex items-center gap-1 text-sm font-medium text-deep-navy">
                  <Star className="w-4 h-4 fill-rose-accent text-rose-accent" />
                  {room.rating}
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8 text-sm text-deep-navy/60">
                <div className="flex items-center gap-2">
                  <BedDouble className="w-4 h-4" />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{room.guests}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-lg font-medium text-deep-navy">
                  ${room.price} <span className="text-sm text-deep-navy/50 font-normal">/ night</span>
                </div>
                <button className="bg-deep-navy text-soft-beige px-6 py-2.5 rounded-full text-sm font-medium hover:bg-rose-accent hover:text-deep-navy transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
