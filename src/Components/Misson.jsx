'use client';
import { motion } from 'framer-motion';
import AnimatedSection from './UI/AnimatedSection';
import GlassCard from './UI/GlassCard';

const Mission = () => {
  return (
    <AnimatedSection className="py-20 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <GlassCard className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              "I'm not just building websites — I'm crafting{' '}
              <span className="font-semibold gradient-text">
                immersive experiences
              </span>{' '}
              that connect brands with their audiences."
            </blockquote>
            <div className="mt-8 pt-6 border-t border-white/20">
              <cite className="text-sm text-white/60 not-italic">
                Muhammad Muteeb, Frontend Developer
              </cite>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
};

export default Mission;
