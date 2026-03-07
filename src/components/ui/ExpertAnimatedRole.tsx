'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'React & Next.js Specialist',
  'UI Animation Expert',
];

export default function ExpertAnimatedRole() {
  const shouldReduceMotion = useReducedMotion();

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const typingSpeed = useRef(100);
  const deletingSpeed = useRef(50);
  const pauseTime = 1200;

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(roles[roleIndex]);
      return;
    }

    if (isPaused) return;

    const currentRole = roles[roleIndex];

   const timeout = setTimeout(() => {
  if (!isDeleting) {
    const nextText = currentRole.slice(0, displayText.length + 1);
    setDisplayText(nextText);

    // ✅ FIX: use nextText instead of displayText
    if (nextText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    }
  } else {
    const nextText = currentRole.slice(0, displayText.length - 1);
    setDisplayText(nextText);

    // ✅ FIX: check nextText
    if (nextText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }
}, isDeleting ? deletingSpeed.current : typingSpeed.current);

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    roleIndex,
    isPaused,
    shouldReduceMotion,
  ]);

  return (
    <div
      className="inline-flex items-center gap-1 h-[40px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.p
        className="text-xl sm:text-2xl text-muted-foreground font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {displayText}
      </motion.p>

      {/* blinking cursor */}
      {!shouldReduceMotion && (
        <motion.span
          className="text-xl sm:text-2xl font-medium"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          |
        </motion.span>
      )}
    </div>
  );
}