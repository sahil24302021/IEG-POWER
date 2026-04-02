'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  end: number;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({ end, duration = 2000, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}
