"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";

const clientLogos = [
  "advanced.png",
  "alshams1.png",
  "allotaxi.png",
  "aoun.png",
  "black.png",
  "carr.png",
  "cremino1.png",
  "emsherif.png",
  "hola.png",
  "metro.png",
  "pat.png",
  "sant.png",
];

export default function ClientsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#171717] via-[#DA0037] to-[#171717] bg-clip-text text-transparent animate-gradient">
              Our Clients
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DA0037] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Scrolling Logos */}
          <div className="flex items-center h-[150px] md:h-[200px] lg:h-[260px]">
            {/* Wrapper for seamless infinite scroll */}
            <div
              className={`flex gap-8 md:gap-12 lg:gap-16 flex-shrink-0 items-center h-full carousel-scroll ${isPaused ? 'paused' : ''}`}
              style={{
                width: "200%",
              }}
            >
              {/* First Set */}
              <div className="flex gap-8 md:gap-12 lg:gap-16 flex-shrink-0 items-center h-full">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 h-full w-auto relative flex items-center justify-center"
                  >
                    <Image
                      src={`/customers logo/${logo}`}
                      alt={logo.replace(".png", "")}
                      width={800}
                      height={320}
                      loading="lazy"
                      className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Second Set (for seamless loop) */}
              <div className="flex gap-8 md:gap-12 lg:gap-16 flex-shrink-0 items-center h-full">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 h-full w-auto relative flex items-center justify-center"
                  >
                    <Image
                      src={`/customers logo/${logo}`}
                      alt={logo.replace(".png", "")}
                      width={800}
                      height={320}
                      loading="lazy"
                      className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-scroll {
          animation: scroll 35s linear infinite;
        }
        .carousel-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
