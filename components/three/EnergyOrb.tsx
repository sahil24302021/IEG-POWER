'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * EnergyOrb — Premium Three.js 3D scene
 * 
 * Redesigned to be more subtle and premium:
 * - Dark translucent core with subtle green emission
 * - Wireframe overlay at low opacity
 * - Thin delicate rings
 * - Smaller amber particles
 * - Overall darker/moodier tone
 */
export default function EnergyOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const W = container.clientWidth;
    const H = container.clientHeight;

    if (W === 0 || H === 0) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.8;
    container.appendChild(renderer.domElement);

    // ── CORE — dark translucent icosahedron with subtle green glow ──
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0A1A0A,
      emissive: 0x0D2E1A,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── WIREFRAME — delicate overlay ──
    const wireGeo = new THREE.IcosahedronGeometry(0.72, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x22C55E,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wire);

    // ── OUTER GLOW — soft sphere ──
    const glowGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x22C55E,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    // ── ORBITING RINGS — thin and elegant ──
    const rings: THREE.Mesh[] = [];
    const ringConfigs = [
      { radius: 1.3, tube: 0.004, tiltX: 0.3,  tiltZ: 0.1,  speed: 0.3,  opacity: 0.25 },
      { radius: 1.7, tube: 0.003, tiltX: 1.2,  tiltZ: 0.4,  speed: -0.2, opacity: 0.18 },
      { radius: 2.1, tube: 0.002, tiltX: 0.6,  tiltZ: 1.1,  speed: 0.12, opacity: 0.12 },
    ];

    ringConfigs.forEach((cfg) => {
      const geo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 6, 100);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x22C55E,
        transparent: true,
        opacity: cfg.opacity,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = cfg.tiltX;
      ring.rotation.z = cfg.tiltZ;
      ring.userData.speed = cfg.speed;
      scene.add(ring);
      rings.push(ring);
    });

    // ── PARTICLES — small, sparse, amber energy dots ──
    const particleCount = 40;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleGeo = new THREE.BufferGeometry();

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const ringIdx = i % 3;
      const r = ringConfigs[ringIdx].radius;
      particlePositions[i * 3] = Math.cos(angle) * r;
      particlePositions[i * 3 + 1] = Math.sin(angle) * r;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xF59E0B,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── LIGHTING — subtle, moody ──
    const ambientLight = new THREE.AmbientLight(0x22C55E, 0.15);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x22C55E, 1.5, 10);
    pointLight1.position.set(3, 2, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xF59E0B, 0.5, 8);
    pointLight2.position.set(-3, -1, 2);
    scene.add(pointLight2);

    // Subtle rim light
    const rimLight = new THREE.PointLight(0x22C55E, 0.3, 6);
    rimLight.position.set(0, 0, -3);
    scene.add(rimLight);

    // ── MOUSE PARALLAX ──
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ── ANIMATION ──
    let t = 0;
    let animFrameId: number;

    const animate = () => {
      t += 0.006;
      animFrameId = requestAnimationFrame(animate);

      // Core: slow rotation + very subtle breathing
      core.rotation.y = t * 0.2;
      core.rotation.x = t * 0.08;
      const breathe = 1 + Math.sin(t * 1.5) * 0.01;
      core.scale.setScalar(breathe);

      // Wireframe: opposite rotation
      wire.rotation.y = -t * 0.15;
      wire.rotation.z = t * 0.1;

      // Glow: subtle pulse
      glowMat.opacity = 0.02 + Math.sin(t * 2) * 0.01;
      glow.scale.setScalar(1 + Math.sin(t * 1.2) * 0.02);

      // Rings
      rings.forEach((ring) => {
        ring.rotation.y += ring.userData.speed * 0.008;
      });

      // Particles orbit
      const pos = particleGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const baseAngle = (i / particleCount) * Math.PI * 2;
        const ringIdx = i % 3;
        const r = ringConfigs[ringIdx].radius;
        const speed = ringConfigs[ringIdx].speed;
        const angle = baseAngle + t * speed;
        const z = Math.sin(angle * 2 + i) * 0.15;
        pos.setXYZ(i, Math.cos(angle) * r, Math.sin(angle) * r, z);
      }
      pos.needsUpdate = true;

      // Camera parallax — very gentle
      camera.position.x += (mouseX * 0.2 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newW = mountRef.current.clientWidth;
      const newH = mountRef.current.clientHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      [coreGeo, wireGeo, glowGeo, particleGeo].forEach(g => g.dispose());
      [coreMat, wireMat, glowMat, particleMat].forEach(m => m.dispose());
      rings.forEach(r => { r.geometry.dispose(); (r.material as THREE.Material).dispose(); });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" style={{ minHeight: '300px' }} />;
}
