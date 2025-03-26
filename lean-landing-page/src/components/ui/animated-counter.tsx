'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * AnimatedCounter component that animates a number from 0 to the target value
 */
const AnimatedCounter = ({ value, duration = 2000, className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState('0');
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Extract numeric part and suffix if any (e.g., "90%" -> [90, "%"])
  const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
  const suffix = value.replace(/[\d.-]/g, '');

  useEffect(() => {
    // Set up intersection observer to trigger animation when in view
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      }, { threshold: 0.1 });

      if (countRef.current) {
        observerRef.current.observe(countRef.current);
      }
    } else {
      // Fallback for environments without IntersectionObserver
      setHasAnimated(true);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || typeof window === 'undefined') return;

    let startTimestamp: number;
    const startValue = 0;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (numericValue - startValue) + startValue);
      
      setCount(`${currentCount}${suffix}`);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value); // Ensure final value is exactly as provided
      }
    };
    
    window.requestAnimationFrame(step);
  }, [hasAnimated, numericValue, duration, suffix, value]);

  return <span ref={countRef} className={className}>{count}</span>;
};

export default AnimatedCounter;