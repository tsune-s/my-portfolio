'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800"
      >
        オフィスツネへようこそ。
      </motion.h1>
    </main>
  );
}
