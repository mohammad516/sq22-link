"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const clientLogos = [
  "ADVANCED CAR RENT.png",
  "AL SHAMS ANJAR RESTAURANT.png",
  "ALLO TAXI.png",
  "AOUN FOOD.png",
  "BLACK METAL SECURITY.png",
  "CARREFOUR.png",
  "CREMINO.png",
  "EM SHERIF.png",
  "HOLA DELIVERY COMMPANY.png",
  "METROPOLITAN SECURITY.png",
  "PATCHI.png",
  "SAINT GOERGE SHCOOL.png",
];

export default function ClientsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrolling Logos */}
          <div className="flex items-center h-48 md:h-64 lg:h-80">
            {/* First Set */}
            <motion.div
              className="flex gap-8 md:gap-12 lg:gap-16 flex-shrink-0 items-center h-full"
              animate={{
                x: isPaused ? "0%" : "-50%",
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
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
                    className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>

            {/* Second Set (for seamless loop) */}
            <motion.div
              className="flex gap-8 md:gap-12 lg:gap-16 flex-shrink-0 items-center h-full"
              animate={{
                x: isPaused ? "0%" : "-50%",
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
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
                    className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>
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
      `}</style>
    </section>
  );
}
