import { motion } from "motion/react";

export default function Booking() {
  return (
    <section id="booking" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg"
          alt="Moroccan Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/40" />
      </div>

      {/* Booking Form Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="bg-soft-beige p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-navy mb-4">Reserve Your Stay</h2>
            <p className="text-deep-navy/70">Experience the magic of Sefrou</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-deep-navy uppercase tracking-wider">Check-in</label>
              <input
                type="date"
                className="w-full bg-white border border-deep-navy/10 rounded-xl px-4 py-3 text-deep-navy focus:outline-none focus:ring-2 focus:ring-rose-accent transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-deep-navy uppercase tracking-wider">Check-out</label>
              <input
                type="date"
                className="w-full bg-white border border-deep-navy/10 rounded-xl px-4 py-3 text-deep-navy focus:outline-none focus:ring-2 focus:ring-rose-accent transition-all"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-deep-navy uppercase tracking-wider">Guests</label>
              <div className="flex flex-col lg:flex-row gap-4">
                <select className="flex-1 bg-white border border-deep-navy/10 rounded-xl px-4 py-3 text-deep-navy focus:outline-none focus:ring-2 focus:ring-rose-accent transition-all appearance-none">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4+ Adults</option>
                </select>
                <select className="flex-1 bg-white border border-deep-navy/10 rounded-xl px-4 py-3 text-deep-navy focus:outline-none focus:ring-2 focus:ring-rose-accent transition-all appearance-none">
                  <option>0 Kids</option>
                  <option>1 Kid</option>
                  <option>2 Kids</option>
                  <option>3+ Kids</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="button"
                className="w-full bg-rose-accent text-deep-navy py-4 rounded-xl font-medium tracking-wide hover:bg-dusty-blush transition-colors uppercase text-sm"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
