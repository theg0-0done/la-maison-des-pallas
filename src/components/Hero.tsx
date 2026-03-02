import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import bgVideo from "../assets/backgroundVideo.mp4";

export default function Hero({ isLoaded, setIsLoaded }: { isLoaded: boolean, setIsLoaded: (v: boolean) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isLoaded && videoRef.current) {
      videoRef.current.play();
    }
  }, [isLoaded]);

  const text = "A Sanctuary of Moroccan Elegance";
  const words = text.split(" ");

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-soft-beige">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ width: "0px", height: "400px" }}
          animate={{ width: "100vw", height: "100vh" }}
          transition={{
            width: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            height: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.2 }
          }}
          onAnimationComplete={() => setIsLoaded(true)}
          className="relative overflow-hidden bg-deep-navy"
        >
          <video
            ref={videoRef}
            src={bgVideo}
            className="absolute w-full h-full object-cover"
            muted
            loop
            playsInline
          />
        </motion.div>
      </div>

      {isLoaded && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-soft-beige max-w-4xl leading-none">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden -mt-8 mr-4 pb-2">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.33, 1, 0.68, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <a href="#booking" className="px-8 py-4 bg-rose-accent text-deep-navy rounded-full font-medium tracking-wide hover:bg-white transition-colors text-center">
              Book Your Stay
            </a>
            <a href="#rooms" className="px-8 py-4 bg-transparent border border-soft-beige text-soft-beige rounded-full font-medium tracking-wide hover:bg-soft-beige hover:text-deep-navy transition-colors text-center">
              Explore Rooms
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
}
