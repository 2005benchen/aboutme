// src/components/AnimatedHeading.tsx
"use client"; // Add this line
import "@/utils/suppressErrors"; // Import the suppressErrors utility

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedHeadingProps {
  title: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ title }) => {
  return (
    <motion.h1
      className="text-5xl font-extrabold mb-6 text-center text-gray-800 leading-tight dark:text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {title}
    </motion.h1>
  );
};

export default AnimatedHeading;
