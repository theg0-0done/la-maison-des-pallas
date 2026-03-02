import { Instagram, Facebook, Mail } from "lucide-react";
import logo from "../assets/lallas-logo-white.png"

export default function Footer() {
  return (
    <footer className="h-full flex flex-col justify-between pt-28 lg:pt-[20vh] pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-serif text-soft-beige mb-6">La Maison des Lallas</h3>
          <p className="text-soft-beige/70 max-w-sm">
            A sanctuary of Moroccan elegance in the heart of Sefrou. Experience authentic hospitality and timeless design.
          </p>
        </div>
        <div>
          <h4 className="text-rose-accent font-medium mb-6 uppercase tracking-widest text-sm">Explore</h4>
          <ul className="space-y-4 text-soft-beige/80">
            <li><a href="#about" className="hover:text-white transition-colors">Story</a></li>
            <li><a href="#rooms" className="hover:text-white transition-colors">Rooms</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-rose-accent font-medium mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-beige/70 hover:text-rose-accent hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-beige/70 hover:text-rose-accent hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@lamaisondeslallas.com"
              className="text-soft-beige/70 hover:text-rose-accent hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-soft-beige/50 text-sm mt-6">(Temporarily Closed)</p>
        </div>
      </div>

      <div className="">
        <img className="w-full h-auto hidden lg:block" src={logo} alt="footer logo" />
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-soft-beige/20 text-sm text-soft-beige/50 gap-4">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          <p>made by <strong>Said Fateh</strong></p>
        </div>
      </div>
    </footer>
  );
}
