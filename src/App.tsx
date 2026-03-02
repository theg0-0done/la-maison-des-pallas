import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Activities from './components/Activities';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-soft-beige min-h-screen text-deep-navy font-sans selection:bg-rose-accent selection:text-deep-navy">
      <Navbar isLoaded={isLoaded} />

      <main className="relative z-10 bg-soft-beige">
        <div className="relative w-full h-[200vh] -mb-[100vh]">
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-deep-navy">
            <Hero isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
          </div>
        </div>

        <div className="relative z-20 bg-soft-beige shadow-[0_20px_50px_rgba(11,25,87,0.5)]">
          <About />
          <Rooms />
          <Gallery />
          <Activities />
          <Reviews />
          <Amenities />
          <Booking />
          <Location />
        </div>
      </main>

      <div className="relative w-full bg-black h-[200vh] -mt-[100vh] z-0">
        <div className="sticky top-0 h-screen w-full bg-deep-navy text-soft-beige flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  );
}
