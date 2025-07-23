'use client';

import React, { useEffect, useRef } from 'react';
import { GiWineGlass } from "react-icons/gi";
import CircleType from 'circletype';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Certificate = () => {
  const headingRef = useRef([]);
  const textRef = useRef(null);
  const outerRef = useRef();
  const buttonRef = useRef();

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const headingWords = ['The', 'most', 'hated', 'piece', 'of', 'paper.'];
  const headingLines = [];
  for (let i = 0; i < headingWords.length; i += 2) {
    headingLines.push(headingWords.slice(i, i + 2));
  }

  useEffect(() => {
    new CircleType(textRef.current).radius(85);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX - innerWidth / 2) / innerWidth) * 60;
      const y = ((e.clientY - innerHeight / 2) / innerHeight) * 60;
      target.current = { x, y };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      if (buttonRef.current) {
        const buttonX = pos.current.x * 1.2;
        const buttonY = pos.current.y * 1.2;
        buttonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative py-16 bg-black flex flex-col items-center h-screen bg-no-repeat bg-center text-white"
      style={{ backgroundImage: "url('/herosection-bg.png')"}}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-6 relative"
      >
        <GiWineGlass size={40} />
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight space-y-2 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {headingLines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex justify-center">
            {line.map((word, wordIndex) => {
              const refIndex = lineIndex * 2 + wordIndex;
              return (
                <motion.span
                  key={refIndex}
                  ref={(el) => (headingRef.current[refIndex] = el)}
                  className={`inline-block mx-1 relative ${
                    word === 'hated' ? 'text-[#E32375]' : ''
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        ))}
      </motion.h1>

      <a href="/resume.pdf" download>
  <motion.div
    ref={outerRef}
    className="relative w-64 h-64 flex items-center justify-center will-change-transform"
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
  >
    <div
      ref={textRef}
      className="absolute top-1/2 left-1/2 text-2xl font-bold text-white transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center"
    >
      GET RESUME - GET RESUME -
    </div>

    <motion.button
      ref={buttonRef}
      className="w-24 h-24 rounded-full text-3xl font-semibold text-white z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform border border-white hover:bg-white hover:text-black transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      GO
    </motion.button>
  </motion.div>
</a>

    </motion.div>
  );
};

export default Certificate;
