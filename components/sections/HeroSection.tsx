'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Three.js energy orb
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Only load Three.js on desktop
    const isMobile = window.innerWidth < 768;
    
    import('three').then((THREE) => {
      const canvas = canvasRef.current!;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 4;
      
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(500, 500);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Wireframe sphere
      const sphereGeo = new THREE.IcosahedronGeometry(1.4, isMobile ? 1 : 2);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0xFF5C00,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphere);

      // Inner glow sphere
      const innerGeo = new THREE.SphereGeometry(1.2, 32, 32);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0xFF5C00,
        transparent: true,
        opacity: 0.04,
      });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      scene.add(inner);

      // Particles orbiting
      const particleCount = isMobile ? 50 : 200;
      const positions = new Float32Array(particleCount * 3);
      const velocities: { x: number; y: number; z: number }[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 1.8 + Math.random() * 1.2;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        velocities.push({
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        });
      }
      
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x00C853,
        size: isMobile ? 0.03 : 0.025,
        transparent: true,
        opacity: 0.7,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Mouse parallax
      let mouseX = 0, mouseY = 0;
      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
      };
      if (!isMobile) window.addEventListener('mousemove', onMouse);

      // Animate
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.003;
        sphere.rotation.x += 0.001;
        inner.rotation.y -= 0.002;
        particles.rotation.y += 0.002;

        // Mouse parallax
        sphere.rotation.x += (mouseY * 0.3 - sphere.rotation.x) * 0.02;
        sphere.rotation.y += (mouseX * 0.3 - sphere.rotation.y) * 0.02;

        // Update particle positions
        const posArr = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          posArr[i * 3] += velocities[i].x;
          posArr[i * 3 + 1] += velocities[i].y;
          posArr[i * 3 + 2] += velocities[i].z;
          // Keep within bounds
          const dist = Math.sqrt(posArr[i*3]**2 + posArr[i*3+1]**2 + posArr[i*3+2]**2);
          if (dist > 3 || dist < 1.5) {
            velocities[i].x *= -1;
            velocities[i].y *= -1;
            velocities[i].z *= -1;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        renderer.dispose();
        window.removeEventListener('mousemove', onMouse);
      };
    });
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2 }); // after loading screen
      tl.from('.hero-label', { y: -20, opacity: 0, duration: 0.6, ease: 'power2.out' });
      tl.from('.hero-title-line', { y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, '-=0.3');
      tl.from('.hero-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
      tl.from('.hero-ctas', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
      tl.from('.hero-pills', { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
      tl.from('.hero-orb-container', { scale: 0.8, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8');
      tl.from('.scroll-indicator', { opacity: 0, duration: 0.8 }, '-=0.3');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Radial orange glow */}
      <div className="hero-glow" style={{ left: '60%', top: '45%', width: '800px', height: '800px' }} />
      
      <div className="ieg-container relative z-10 w-full" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="grid lg:grid-cols-[55%_45%] gap-8 items-center">
          {/* Left — Copy */}
          <div>
            <div className="hero-label flex items-center gap-3 mb-8">
              <div style={{ width: '40px', height: '1.5px', background: 'var(--orange)' }} />
              <span className="section-label">Patented Clean Energy Technology</span>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <h1>
                <span className="hero-title-line display-hero block">The Power</span>
                <span className="hero-title-line display-hero block text-orange-glow">Within.</span>
              </h1>
            </div>

            <p className="hero-sub body-xl" style={{ maxWidth: '500px', marginBottom: '40px' }}>
              Self-sustaining, zero-emission energy systems. No grid. No fuel. No limits.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4 mb-12">
              <Link href="/technology" className="btn-orange">
                Explore Technology
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/contact" className="btn-ghost">
                Watch Demo ▶
              </Link>
            </div>

            <div className="hero-pills flex flex-wrap gap-3">
              <span className="stat-pill">🛡️ 2 Patents Granted</span>
              <span className="stat-pill">⚡ 30+ Years R&D</span>
              <span className="stat-pill" style={{ color: 'var(--green)' }}>✓ IIM Nagpur Verified</span>
            </div>
          </div>

          {/* Right — Three.js Orb */}
          <div className="hero-orb-container hidden lg:flex items-center justify-center">
            <canvas ref={canvasRef} width={500} height={500} style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-3)' }}>
          SCROLL
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="var(--orange)">
            <animate attributeName="cy" values="8;16;8" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  );
}
