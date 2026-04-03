'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  color?: string;
  count?: number;
  speed?: number;
  opacity?: number;
}

export default function ParticleField({ color = '#F7941D', count = 80, speed = 0.3, opacity = 0.4 }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? Math.round(count * 0.4) : count;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities[i * 3] = (Math.random() - 0.5) * speed * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * speed * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * speed * 0.01;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: isMobile ? 0.03 : 0.025,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Subtle connecting lines between close particles
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: opacity * 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    let lineGeo = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const pos = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around
        if (Math.abs(pos[i * 3]) > 6) velocities[i * 3] *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 4) velocities[i * 3 + 1] *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 3) velocities[i * 3 + 2] *= -1;
      }
      geo.attributes.position.needsUpdate = true;

      // Update connecting lines (only nearby particles)
      const linePositions: number[] = [];
      const threshold = 1.8;
      for (let i = 0; i < Math.min(particleCount, 40); i++) {
        for (let j = i + 1; j < Math.min(particleCount, 40); j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < threshold) {
            linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
            linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          }
        }
      }
      lineGeo.dispose();
      lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lines.geometry = lineGeo;

      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineMat.dispose();
      lineGeo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, count, speed, opacity]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
