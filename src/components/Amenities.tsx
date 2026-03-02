import { Coffee, Baby, Home, Map } from "lucide-react";

const amenities = [
  {
    icon: Coffee,
    title: "Breakfast Included",
    description: "Start your day with a traditional Moroccan breakfast."
  },
  {
    icon: Baby,
    title: "Kid-Friendly",
    description: "A welcoming and safe atmosphere for families."
  },
  {
    icon: Home,
    title: "Traditional Style",
    description: "Authentic riad architecture and interior design."
  },
  {
    icon: Map,
    title: "Local Experience",
    description: "Immerse yourself in the rich culture of Sefrou."
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 md:px-12 bg-dusty-blush/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-navy mb-4">The Experience</h2>
          <p className="text-deep-navy/70 max-w-2xl mx-auto">Everything you need for a comfortable and memorable stay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {amenities.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-soft-beige flex items-center justify-center mb-6 text-deep-navy shadow-sm">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-deep-navy mb-2">{item.title}</h3>
              <p className="text-sm text-deep-navy/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
