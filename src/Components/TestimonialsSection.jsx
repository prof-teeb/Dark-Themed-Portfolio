'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star } from 'phosphor-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Product Designer – Freelance Client",
      avatar: "AK",
      quote: "Working with you was a dream. The UI/UX was stunning, and you turned feedback into flawless final designs almost instantly.",
      result: "Flawless Figma-to-Code execution"
    },
    {
      name: "Rizwan Haider",
      role: "Founder – LaunchKart",
      avatar: "RH",
      quote: "He built our MVP in record time using Next.js and Framer Motion. Everything felt smooth, scalable, and user-first.",
      result: "MVP launched in under 3 weeks"
    },
    {
      name: "Sana Iqbal",
      role: "Creative Director – Digital Agency",
      avatar: "SI",
      quote: "His sense of visual direction is clean and timeless. Clients kept asking who built our site. It truly stood out.",
      result: "Visual identity praised by clients"
    },
    {
      name: "Junaid Ahmed",
      role: "Senior Developer – Collaboration",
      avatar: "JA",
      quote: "Working together was super efficient. Clean code, no ego, and thoughtful UI logic. I'd collaborate again anytime.",
      result: "10+ seamless handoffs"
    },
    {
      name: "Zoya Rehman",
      role: "Startup Founder – SaaS",
      avatar: "ZR",
      quote: "He brought luxury-level polish to a boring SaaS idea. Typography, spacing, scroll effects — all elevated.",
      result: "Increased user retention by 35%"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-black text-white border-t border-white/10" id="testimonials">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            What <span className="text-white font-semibold">Clients & Collaborators</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A few words from people I’ve worked with — from founders to designers to dev teams.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl text-center max-w-2xl mx-auto border border-white/10 shadow-md"
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} weight="fill" className="text-primary mx-1" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Result Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-sm">
                    <span className="text-white font-medium">{testimonial.result}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
