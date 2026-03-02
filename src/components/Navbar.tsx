import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import logoLight from "../assets/lallas-logo-white.png";
import logoDark from "../assets/lallas-logo-black.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#activities", label: "Activities" },
  { href: "#location", label: "Location" },
];

export default function Navbar({ isLoaded }: { isLoaded: boolean }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > window.innerHeight - 100);
  });

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: isLoaded ? 0 : "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-colors duration-500 ${scrolled ? "bg-soft-beige text-deep-navy shadow-sm" : "bg-transparent text-soft-beige"
        }`}
    >
      <a href="#" className="flex-shrink-0">
        <img src={scrolled ? logoDark : logoLight} alt="La Maison des Lallas" className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300" />
      </a>
      <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-rose-accent transition-colors">{link.label}</a>
        ))}
        <a href="#booking" className="hover:bg-rose-accent hover:text-soft-beige px-6 py-2 rounded-full bg-transparent border border-rose-accent text-rose-accent transition-colors">Book Now</a>
      </div>
      <div onClick={() => setOpen(!open)} className="lg:hidden flex flex-col items-center gap-1 transition-all duration-300 ease-out cursor-pointer">
        <span className={`h-1 w-8 transition-all duration-300 ease-out ${scrolled ? "bg-deep-navy" : "bg-soft-beige"} ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`h-1 w-6 transition-all duration-300 ease-out ${scrolled ? "bg-deep-navy" : "bg-soft-beige"} ${open ? "w-0 h-0 opacity-0" : ""}`}></span>
        <span className={`h-1 w-8 transition-all duration-300 ease-out ${scrolled ? "bg-deep-navy" : "bg-soft-beige"} ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-20 right-6 lg:hidden w-[90vw] sm:w-[50vw] bg-soft-beige text-deep-navy rounded-2xl p-6 shadow-2xl flex flex-col items-start gap-6 border border-deep-navy/10 origin-top-right"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="text-lg hover:text-rose-accent transition-colors w-full border-b border-deep-navy/10 pb-2"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              className="w-full mt-2 text-center hover:bg-rose-accent hover:text-deep-navy px-6 py-3 rounded-full bg-deep-navy border border-deep-navy text-soft-beige transition-colors font-medium"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
