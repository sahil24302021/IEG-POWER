'use client';

import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
}

/**
 * Animated gradient mesh background — vastspace / fluid.glass inspired.
 * Multiple layered radial gradients that slowly drift and morph.
 */
export default function GradientMesh({ className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let t = 0;
    let animId: number;

    const animate = () => {
      t += 0.002;
      if (ref.current) {
        const x1 = 50 + Math.sin(t * 0.7) * 20;
        const y1 = 40 + Math.cos(t * 0.5) * 15;
        const x2 = 30 + Math.cos(t * 0.8) * 25;
        const y2 = 60 + Math.sin(t * 0.6) * 20;
        const x3 = 70 + Math.sin(t * 0.4) * 15;
        const y3 = 30 + Math.cos(t * 0.9) * 20;

        ref.current.style.background = `
          radial-gradient(ellipse 600px 600px at ${x1}% ${y1}%, rgba(247,148,29,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 500px 500px at ${x2}% ${y2}%, rgba(27,115,64,0.05) 0%, transparent 70%),
          radial-gradient(ellipse 700px 700px at ${x3}% ${y3}%, rgba(247,148,29,0.04) 0%, transparent 70%),
          var(--bg-primary)
        `;
      }
      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
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
        transition: 'background 0.1s ease',
      }}
    />
  );
}
