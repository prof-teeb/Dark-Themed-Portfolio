'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`glass-card p-8 shadow-lg transition-all duration-300 ${className}`}
      whileHover={hover ? {
        scale: 1.03,
        boxShadow: '0 12px 40px rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(30px)',
      } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
