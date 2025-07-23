'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'phosphor-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of projects do you build?",
      answer: "I specialize in crafting smooth, responsive UIs — portfolio sites, landing pages, and full-stack apps (Excellent in Frontend). Think clean code meets crisp motion.",
    },
    {
      question: "Which tools do you use the most?",
      answer: "React, Next.js, JavaScript, Tailwind, Framer Motion, GSAP and many other. My stack is minimal, fast, and scalable.",
    },
    {
      question: "Do you design too or just code?",
      answer: "Both. I often design directly in code — but I’m comfortable translating from Figma, refining existing designs, or building components from scratch with your brand in mind.",
    },
    {
      question: "Do yuu just do Frontend Development?",
      answer: "No, I do have knowledge on Api integration, backend and surely Database too.",
    },
    {
      question: "How long does a typical build take?",
      answer: "Depends on scope — a landing page might take 1 week, a full-stack app ~3–6 weeks. I'm quick, but I don’t rush.",
    },
    {
      question: "Can we collaborate long-term?",
      answer: "Yes. I prefer building meaningful things with people who care about craft. If we click, I’m in.",
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection className="py-20 bg-black text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Questions? Answers.
          </h2>
          <p className="text-gray-400">
            Some common things people ask before we start working.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <h3 className="text-lg font-medium pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-muted-foreground" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10 mt-4">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
