'use client';

import { motion } from 'framer-motion';
import { RiReactjsFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const FeaturedIn = () => {
  const platforms = [
    { name: 'React JS', icon: <RiReactjsFill className="text-cyan-400" /> },
    { name: 'Next JS', icon: <RiNextjsFill className="text-white" /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-sky-300" /> },
    { name: 'Framer', icon: <SiFramer className="text-pink-400" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-300" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
  ];

  return (
    <section className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-light uppercase tracking-widest text-white/60 mb-2">
            Featured In
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl">
                {platform.icon}
              </div>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
