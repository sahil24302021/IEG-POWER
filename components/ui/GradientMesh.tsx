'use client';

import { useEffect, useRef, memo } from 'react';

interface Props {
  className?: string;
}

/**
 * GradientMesh — GPU-accelerated animated gradient background.
 * 
 * Production optimizations:
 * - Throttled to ~30fps instead of full 60fps (halved CPU usage)
 * - Uses IntersectionObserver to pause when not visible
 * - Prefers reduced-motion respected
 * - Memoized to prevent unnecessary re-renders
 */
function GradientMesh({ className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current.style.background = `
        radial-gradient(ellipse 600px 600px at 50% 40%, rgba(27,111,168,0.06) 0%, transparent 70%),
        radial-gradient(ellipse 500px 500px at 30% 60%, rgba(212,175,55,0.04) 0%, transparent 70%),
        radial-gradient(ellipse 700px 700px at 70% 30%, rgba(26,122,76,0.04) 0%, transparent 70%),
        var(--bg-primary)
      `;
      return;
    }

    let t = 0;
    let animId: number;
    let isVisible = true;
    let lastFrame = 0;
    const FPS_INTERVAL = 1000 / 30; // Cap at 30fps

    // Pause animation when element is not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(ref.current);

    const animate = (timestamp: number) => {
      animId = requestAnimationFrame(animate);
      
      // Skip frames to maintain ~30fps
      if (timestamp - lastFrame < FPS_INTERVAL) return;
      lastFrame = timestamp;
      
      // Don't animate when not visible
      if (!isVisible || !ref.current) return;

      t += 0.002;
      const x1 = 50 + Math.sin(t * 0.7) * 20;
      const y1 = 40 + Math.cos(t * 0.5) * 15;
      const x2 = 30 + Math.cos(t * 0.8) * 25;
      const y2 = 60 + Math.sin(t * 0.6) * 20;
      const x3 = 70 + Math.sin(t * 0.4) * 15;
      const y3 = 30 + Math.cos(t * 0.9) * 20;

      ref.current.style.background = `
        radial-gradient(ellipse 600px 600px at ${x1}% ${y1}%, rgba(27,111,168,0.06) 0%, transparent 70%),
        radial-gradient(ellipse 500px 500px at ${x2}% ${y2}%, rgba(212,175,55,0.04) 0%, transparent 70%),
        radial-gradient(ellipse 700px 700px at ${x3}% ${y3}%, rgba(26,122,76,0.04) 0%, transparent 70%),
        var(--bg-primary)
      `;
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'background',
        contain: 'paint',
      }}
    />
  );
}

export default memo(GradientMesh);
