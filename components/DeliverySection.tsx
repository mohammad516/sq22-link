"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function DeliverySection() {
  const text = "We Deliver All Over The World";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const currentIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const typingSpeed = 100; // سرعة الكتابة (ms لكل حرف)
    const deletingSpeed = 50; // سرعة الحذف (ms لكل حرف)
    const pauseAfterTyping = 2000; // وقت الانتظار بعد اكتمال الكتابة (ms)
    const pauseAfterDeleting = 500; // وقت الانتظار بعد اكتمال الحذف (ms)

    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (isDeletingRef.current) {
        // حالة الحذف
        if (currentIndexRef.current > 0) {
          currentIndexRef.current--;
          setDisplayedText(text.slice(0, currentIndexRef.current));
          timeoutId = setTimeout(type, deletingSpeed);
        } else {
          // انتهى الحذف، انتظر ثم ابدأ الكتابة
          isDeletingRef.current = false;
          setIsTyping(true);
          timeoutId = setTimeout(type, pauseAfterDeleting);
        }
      } else {
        // حالة الكتابة
        if (currentIndexRef.current < text.length) {
          setDisplayedText(text.slice(0, currentIndexRef.current + 1));
          currentIndexRef.current++;
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          // انتهت الكتابة، انتظر ثم ابدأ الحذف
          setIsTyping(false);
          timeoutId = setTimeout(() => {
            isDeletingRef.current = true;
            type();
          }, pauseAfterTyping);
        }
      }
    };

    // بدء الكتابة
    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-[#EDEDED]/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#DA0037" }}
          >
            <span className="inline-block min-h-[1.2em]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block w-1 h-[1em] bg-[#DA0037] ml-1"
              />
            </span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}

