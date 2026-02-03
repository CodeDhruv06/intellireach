import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 0.5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-12"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-xl">IR</span>
        </div>
        <span className="text-2xl font-semibold text-white">
          Intelli<span className="text-cyan-400">Reach</span>
        </span>
      </motion.div>

      {/* Progress Container */}
      <div className="relative flex flex-col items-center">
        {/* Soft background glow behind the number */}
        <div className="pointer-events-none absolute -inset-x-24 -top-6 -bottom-2 rounded-[999px] blur-3xl" style={{ background: 'radial-gradient(35% 60% at 50% 55%, rgba(59,130,246,0.18), rgba(59,130,246,0) 70%)' }} />

        {/* Progress Percentage with fill-on-load + outline + glow */}
        <div className="relative inline-block leading-none mb-6 select-none tracking-tight">
          {/* Glow clipped to the filled area */}
          <span
            className="absolute inset-0 font-extrabold leading-none text-[96px] md:text-[160px] opacity-60"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(59,130,246,0.9) ${Math.floor(progress)}%, rgba(0,0,0,0) ${Math.floor(progress)}%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'blur(14px)',
            }}
            aria-hidden="true"
          >
            {`${Math.floor(progress)}%`}
          </span>

          {/* Filled part (bottom up) */}
          <span
            className="relative block font-extrabold leading-none text-[96px] md:text-[160px]"
            style={{
              backgroundImage: `linear-gradient(to top, #60a5fa ${Math.floor(progress)}%, transparent ${Math.floor(progress)}%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 6px 24px rgba(59,130,246,0.35), 0 0 60px rgba(59,130,246,0.25)',
            }}
          >
            {`${Math.floor(progress)}%`}
          </span>
        </div>

        {/* Progress Bar Background */}
        <div className="relative h-1 w-64 bg-white/10 rounded-full overflow-visible">
          <motion.div
            className="relative h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6),0_0_24px_rgba(59,130,246,0.4)]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            {/* Moving glow at the leading edge */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300" />
            <div
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full opacity-60"
              style={{
                background: 'radial-gradient(circle, rgba(96,165,250,0.85) 0, rgba(96,165,250,0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          </motion.div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-500 text-sm text-center mt-4">
          Loading experience...
        </p>
      </div>

      {/* Orbiting Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400/50 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: `${-50 - i * 30}px 0px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}