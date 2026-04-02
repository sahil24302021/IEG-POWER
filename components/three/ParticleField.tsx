'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * ParticleField — Full-screen WebGL canvas background
 * 
 * Floating particles that drift slowly, responding to mouse.
 * Subtle, ambient — not decorative. Immersive background layer.
 */
export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const W = window.innerWidth;
    const H = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── Particles ──
    const count = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      velocities[i * 3]     = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      sizes[i] = Math.random() * 1.5 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color: 0x22C55E,
      size: 0.8,
      transparent: true,
      opacity: 0.15,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ── A few brighter amber particles ──
    const amberCount = 60;
    const amberGeo = new THREE.BufferGeometry();
    const amberPos = new Float32Array(amberCount * 3);
    for (let i = 0; i < amberCount; i++) {
      amberPos[i * 3]     = (Math.random() - 0.5) * 60;
      amberPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      amberPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    amberGeo.setAttribute('position', new THREE.BufferAttribute(amberPos, 3));
    const amberMat = new THREE.PointsMaterial({
      color: 0xF59E0B,
      size: 0.6,
      transparent: true,
      opacity: 0.1,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
    const amberParticles = new THREE.Points(amberGeo, amberMat);
    scene.add(amberParticles);

    // ── Thin connecting lines between close particles ──
    // (Skip for performance — particles alone create the effect)

    // ── Mouse interaction ──
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / W - 0.5) * 2;
      mouseY = (e.clientY / H - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Animate ──
    let frame: number;
    let t = 0;

    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += 0.003;

      // Drift particles
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        pos.array[i * 3]     += velocities[i * 3];
        pos.array[i * 3 + 1] += velocities[i * 3 + 1];
        pos.array[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around
        if (Math.abs(pos.array[i * 3]) > 40) velocities[i * 3] *= -1;
        if (Math.abs(pos.array[i * 3 + 1]) > 40) velocities[i * 3 + 1] *= -1;
        if (Math.abs(pos.array[i * 3 + 2]) > 20) velocities[i * 3 + 2] *= -1;
      }
      pos.needsUpdate = true;

      // Slow rotation + mouse influence
      particles.rotation.y = t * 0.05 + mouseX * 0.05;
      particles.rotation.x = mouseY * 0.03;
      amberParticles.rotation.y = t * 0.03 - mouseX * 0.03;

      // Gentle camera sway
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ──
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      amberGeo.dispose();
      amberMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}
