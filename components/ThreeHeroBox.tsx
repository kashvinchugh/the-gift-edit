'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeHeroBoxProps {
  className?: string;
}

export default function ThreeHeroBox({ className = '' }: ThreeHeroBoxProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Group for the entire floating gift
    const giftGroup = new THREE.Group();
    scene.add(giftGroup);

    // Brand Palette Materials
    // Box: Deep Burgundy #5F3848
    const boxMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#5F3848'),
      roughness: 0.35,
      metalness: 0.08,
      clearcoat: 0.3,
      clearcoatRoughness: 0.2,
    });

    // Lid: Dusty Rose #CB9996
    const lidMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#CB9996'),
      roughness: 0.3,
      metalness: 0.1,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
    });

    // Ribbon: Soft Warm Blush / Champagne Gold
    const ribbonMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FEDED7'),
      roughness: 0.2,
      metalness: 0.4,
    });

    // Gold Tag Accent
    const goldTagMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E5CCC8'),
      roughness: 0.25,
      metalness: 0.6,
    });

    // 1. Box Base Geometry
    const boxGeo = new THREE.BoxGeometry(1.6, 1.4, 1.6);
    const boxMesh = new THREE.Mesh(boxGeo, boxMaterial);
    boxMesh.position.y = 0;
    boxMesh.castShadow = true;
    boxMesh.receiveShadow = true;
    giftGroup.add(boxMesh);

    // 2. Box Lid Geometry (slightly wider, sits on top)
    const lidGeo = new THREE.BoxGeometry(1.72, 0.32, 1.72);
    const lidMesh = new THREE.Mesh(lidGeo, lidMaterial);
    lidMesh.position.y = 0.8;
    lidMesh.castShadow = true;
    lidMesh.receiveShadow = true;
    giftGroup.add(lidMesh);

    // 3. Ribbons wrapping the box base
    const ribbonVGeo = new THREE.BoxGeometry(0.24, 1.42, 1.62);
    const ribbonVMesh = new THREE.Mesh(ribbonVGeo, ribbonMaterial);
    giftGroup.add(ribbonVMesh);

    const ribbonHGeo = new THREE.BoxGeometry(1.62, 1.42, 0.24);
    const ribbonHMesh = new THREE.Mesh(ribbonHGeo, ribbonMaterial);
    giftGroup.add(ribbonHMesh);

    // 4. Ribbons crossing the lid
    const lidRibbonVGeo = new THREE.BoxGeometry(0.24, 0.34, 1.74);
    const lidRibbonVMesh = new THREE.Mesh(lidRibbonVGeo, ribbonMaterial);
    lidRibbonVMesh.position.y = 0.8;
    giftGroup.add(lidRibbonVMesh);

    const lidRibbonHGeo = new THREE.BoxGeometry(1.74, 0.34, 0.24);
    const lidRibbonHMesh = new THREE.Mesh(lidRibbonHGeo, ribbonMaterial);
    lidRibbonHMesh.position.y = 0.8;
    giftGroup.add(lidRibbonHMesh);

    // 5. 3D Bow atop the lid
    const bowGroup = new THREE.Group();
    bowGroup.position.set(0, 1.0, 0);

    // Central knot
    const knotGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const knotMesh = new THREE.Mesh(knotGeo, ribbonMaterial);
    knotMesh.scale.set(1, 0.8, 1.2);
    bowGroup.add(knotMesh);

    // Left and right loops
    const loopGeo = new THREE.TorusGeometry(0.32, 0.09, 16, 32, Math.PI * 1.5);
    const leftLoop = new THREE.Mesh(loopGeo, ribbonMaterial);
    leftLoop.rotation.set(Math.PI / 4, 0, Math.PI / 3);
    leftLoop.position.set(-0.24, 0.12, 0);
    bowGroup.add(leftLoop);

    const rightLoop = new THREE.Mesh(loopGeo, ribbonMaterial);
    rightLoop.rotation.set(Math.PI / 4, 0, -Math.PI / 3);
    rightLoop.position.set(0.24, 0.12, 0);
    bowGroup.add(rightLoop);

    // Forward and back loops
    const fwdLoop = new THREE.Mesh(loopGeo, ribbonMaterial);
    fwdLoop.rotation.set(Math.PI / 3, Math.PI / 2, 0);
    fwdLoop.position.set(0, 0.12, 0.24);
    bowGroup.add(fwdLoop);

    const backLoop = new THREE.Mesh(loopGeo, ribbonMaterial);
    backLoop.rotation.set(-Math.PI / 3, Math.PI / 2, 0);
    backLoop.position.set(0, 0.12, -0.24);
    bowGroup.add(backLoop);

    // Dainty gift tag
    const tagGeo = new THREE.BoxGeometry(0.3, 0.45, 0.02);
    const tagMesh = new THREE.Mesh(tagGeo, goldTagMaterial);
    tagMesh.position.set(0.28, -0.15, 0.4);
    tagMesh.rotation.set(0.3, 0.4, -0.2);
    bowGroup.add(tagMesh);

    giftGroup.add(bowGroup);

    // 6. Ambient Sparkle Particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 4.5;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 3.5 + 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      particleScales[i] = Math.random() * 0.04 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#FEDED7'),
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Ground shadow receiver plane
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 8. Studio Lighting (Warm Editorial Feel)
    const ambientLight = new THREE.AmbientLight(0xfff6f0, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfff5ee, 2.4);
    mainKeyLight.position.set(3, 4.5, 3.5);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    mainKeyLight.shadow.camera.near = 0.5;
    mainKeyLight.shadow.camera.far = 15;
    mainKeyLight.shadow.bias = -0.001;
    scene.add(mainKeyLight);

    const softFillLight = new THREE.DirectionalLight(0xe5ccc8, 1.2);
    softFillLight.position.set(-3.5, 2, -1);
    scene.add(softFillLight);

    const rimLight = new THREE.PointLight(0xcb9996, 1.5, 8);
    rimLight.position.set(0, -1, -2);
    scene.add(rimLight);

    // Initial group tilt
    giftGroup.rotation.x = 0.22;
    giftGroup.rotation.y = -0.55;

    // Mouse / Touch Parallax Target
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.22;
    let targetRotationY = -0.55;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x;
      mouseY = y;
      targetRotationY = -0.55 + mouseX * 0.45;
      targetRotationX = 0.22 - mouseY * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Visibility Observer to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Floating motion
        giftGroup.position.y = Math.sin(elapsed * 1.4) * 0.12;

        // Smooth rotation towards target pointer angle + subtle idle drift
        giftGroup.rotation.y += (targetRotationY + Math.sin(elapsed * 0.5) * 0.08 - giftGroup.rotation.y) * 0.05;
        giftGroup.rotation.x += (targetRotationX + Math.cos(elapsed * 0.6) * 0.04 - giftGroup.rotation.x) * 0.05;

        // Sparkle particles subtle rotation and drift
        particles.rotation.y = elapsed * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      boxGeo.dispose();
      lidGeo.dispose();
      ribbonVGeo.dispose();
      ribbonHGeo.dispose();
      lidRibbonVGeo.dispose();
      lidRibbonHGeo.dispose();
      knotGeo.dispose();
      loopGeo.dispose();
      tagGeo.dispose();
      particleGeo.dispose();
      shadowGeo.dispose();
      boxMaterial.dispose();
      lidMaterial.dispose();
      ribbonMaterial.dispose();
      goldTagMaterial.dispose();
      particleMat.dispose();
      shadowMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] flex items-center justify-center select-none ${className}`}
      aria-label="Interactive 3D The Gift Edit Luxury Gift Box"
    >
      {!hasWebGL && (
        <div className="text-center p-6 bg-brand-cream/60 rounded-3xl border border-brand-blush">
          <div className="w-48 h-48 mx-auto rounded-2xl bg-brand-blush/40 flex items-center justify-center">
            <span className="text-4xl">🎁</span>
          </div>
          <p className="mt-3 font-serif text-brand-burgundy font-medium">The Gift Edit Signature Box</p>
        </div>
      )}

      {hasWebGL && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-brand-dusty-rose border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
