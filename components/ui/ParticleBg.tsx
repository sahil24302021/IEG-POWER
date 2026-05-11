'use client';

import { useEffect, useRef, memo } from 'react';

interface Props {
  color?: string;
  count?: number;
  opacity?: number;
}

/**
 * ParticleBg — SSR-safe particle background using Canvas 2D.
 * 
 * Production optimizations:
 * - IntersectionObserver pauses animation when off-screen
 * - 30fps throttle to reduce CPU usage
 * - Reduced particle count on mobile
 * - Prefers-reduced-motion support
 * - Debounced resize handler
 * - Memoized component
 */
function ParticleBg({ color = '#2E86C1', count = 50, opacity = 0.3 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip entirely for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;
    let isVisible = true;
    let lastFrame = 0;
    const FPS_INTERVAL = 1000 / 30;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    // IntersectionObserver for visibility-based animation pause
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const isMobile = w < 768;
      const pCount = isMobile ? Math.round(count * 0.3) : count;
      particles.length = 0;
      for (let i = 0; i < pCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      } : { r: 247, g: 148, b: 29 };
    };

    const rgb = hexToRgb(color);
    const threshold = 120; // Reduced from 150 for fewer line calculations

    const draw = (timestamp: number) => {
      animId = requestAnimationFrame(draw);

      // 30fps throttle
      if (timestamp - lastFrame < FPS_INTERVAL) return;
      lastFrame = timestamp;

      // Skip when not visible
      if (!isVisible) return;

      ctx.clearRect(0, 0, w, h);

      // Update & draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`;
        ctx.fill();
      }

      // Draw connecting lines (limit to first 30 particles to reduce O(n²) cost)
      const maxLines = Math.min(particles.length, 30);
      for (let i = 0; i < maxLines; i++) {
        for (let j = i + 1; j < maxLines; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy; // Skip sqrt for perf
          if (distSq < threshold * threshold) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity * 0.12 * (1 - dist / threshold)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    init();
    animId = requestAnimationFrame(draw);

    // Debounced resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 200);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [color, count, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        contain: 'strict',
      }}
    />
  );
}

export default memo(ParticleBg);
