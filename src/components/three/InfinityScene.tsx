import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface InfinitySceneProps {
  className?: string;
  scrollProgress?: number;
}

export const InfinityScene: React.FC<InfinitySceneProps> = ({
  className = '',
  scrollProgress = 0
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
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

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070b, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for entire interactive construct
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Infinity Lemniscate Curve
    class LemniscateCurve extends THREE.Curve<THREE.Vector3> {
      scale: number;
      constructor(scale = 5.2) {
        super();
        this.scale = scale;
      }
      getPoint(t: number, optionalTarget = new THREE.Vector3()) {
        const u = t * Math.PI * 2;
        const denom = 1 + Math.sin(u) * Math.sin(u);
        const x = (this.scale * Math.cos(u)) / denom;
        const y = (this.scale * Math.sin(u) * Math.cos(u)) / denom;
        const z = Math.sin(u * 2) * 1.1; // Deep 3D loop warp
        return optionalTarget.set(x, y, z);
      }
    }

    const curve = new LemniscateCurve(5.0);

    // High-Definition Metallic Outer Chrome Shell
    const tubeGeometry = new THREE.TubeGeometry(curve, 220, 0.16, 16, true);
    const tubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x083344,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.15,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: false
    });
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    masterGroup.add(tubeMesh);

    // Glowing Inner Circuit Core Wireframe
    const coreWireGeometry = new THREE.TubeGeometry(curve, 180, 0.19, 8, true);
    const coreWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeometry, coreWireMaterial);
    masterGroup.add(coreWireMesh);

    // 3D Integrated Upward Vector Arrow
    const arrowGroup = new THREE.Group();
    const arrowCurvePoints = [
      new THREE.Vector3(0.5, 0.2, 0),
      new THREE.Vector3(2.5, 1.8, 0.5),
      new THREE.Vector3(4.2, 3.2, 0.8)
    ];
    const arrowCurve = new THREE.CatmullRomCurve3(arrowCurvePoints);
    const arrowShaftGeo = new THREE.TubeGeometry(arrowCurve, 40, 0.12, 8, false);
    const arrowShaftMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8
    });
    const arrowShaftMesh = new THREE.Mesh(arrowShaftGeo, arrowShaftMat);
    arrowGroup.add(arrowShaftMesh);

    // Arrow Cone Head
    const coneGeo = new THREE.ConeGeometry(0.45, 1.1, 16);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.position.set(4.2, 3.2, 0.8);
    coneMesh.rotation.z = -Math.PI / 4.2;
    arrowGroup.add(coneMesh);
    masterGroup.add(arrowGroup);

    // Scene Point Lights for Metallic Chrome Gleam
    const cyanLight1 = new THREE.PointLight(0x22d3ee, 4, 30);
    cyanLight1.position.set(8, 8, 10);
    scene.add(cyanLight1);

    const cyanLight2 = new THREE.PointLight(0x0284c7, 3, 30);
    cyanLight2.position.set(-8, -6, 6);
    scene.add(cyanLight2);

    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    // 2. Data Flow Glowing Particles along Infinity Curve
    const particleCount = window.innerWidth < 768 ? 100 : 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleOffsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particleOffsets[i] = Math.random();
      particleSpeeds[i] = 0.0012 + Math.random() * 0.0025;
      const pt = curve.getPoint(particleOffsets[i]);
      particlePositions[i * 3] = pt.x;
      particlePositions[i * 3 + 1] = pt.y;
      particlePositions[i * 3 + 2] = pt.z;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom Particle Texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const pCtx = particleCanvas.getContext('2d')!;
    const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(34, 211, 238, 0.9)');
    grad.addColorStop(0.8, 'rgba(6, 182, 212, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 32, 32);

    const particleTexture = new THREE.CanvasTexture(particleCanvas);
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.25,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particles);

    // 3. Constellation Circuit Nodes
    const nodeCount = 24;
    const nodeGroup = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.15, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      wireframe: false
    });

    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const t = i / nodeCount;
      const pt = curve.getPoint(t);
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      mesh.position.copy(pt);
      nodeGroup.add(mesh);
      nodePositions.push(pt);
    }
    masterGroup.add(nodeGroup);

    // 4. Background Starfield / Floating Data Micro-Particles
    const bgStarCount = window.innerWidth < 768 ? 180 : 450;
    const bgStarGeo = new THREE.BufferGeometry();
    const bgStarPos = new Float32Array(bgStarCount * 3);
    for (let i = 0; i < bgStarCount * 3; i += 3) {
      bgStarPos[i] = (Math.random() - 0.5) * 45;
      bgStarPos[i + 1] = (Math.random() - 0.5) * 35;
      bgStarPos[i + 2] = (Math.random() - 0.5) * 30 - 8;
    }
    bgStarGeo.setAttribute('position', new THREE.BufferAttribute(bgStarPos, 3));
    const bgStarMat = new THREE.PointsMaterial({
      size: 0.16,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5
    });
    const bgStars = new THREE.Points(bgStarGeo, bgStarMat);
    scene.add(bgStars);

    // 5. Interaction & Parallax Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer for robust responsive canvas sizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Intersection Observer to pause rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    });
    observer.observe(container);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();
    let dynamicRotationAngle = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Fast & Slow Mix velocity curve:
        // Spikes to fast rotational speed, smoothly decelerates to slow inspection, then bursts fast again!
        
        

        // Dynamic 3D Rotation with Fast and Slow Mix
        masterGroup.rotation.y = time * 0.06 + mouseX * 0.15;
        masterGroup.rotation.x = Math.sin(time * 0.15) * 0.1 - mouseY * 0.15;
        masterGroup.rotation.z = Math.cos(time * 0.2) * 0.05;
        masterGroup.position.y = Math.sin(time * 0.4) * 0.15;

        // Pulsing light intensity matching the fast/slow cycle
        
        tubeMaterial.emissiveIntensity = 0.25;
        coreWireMaterial.opacity = 0.55;

        // Scroll influence
        camera.position.z = 16 - (scrollProgress || 0) * 4;

        // Particle stream progression along 3D infinity curve
        const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          particleOffsets[i] = (particleOffsets[i] + particleSpeeds[i] * 0.6) % 1;
          const pt = curve.getPoint(particleOffsets[i]);
          posAttr.setXYZ(i, pt.x, pt.y, pt.z);
        }
        posAttr.needsUpdate = true;

        // Background starfield rotation
        bgStars.rotation.y = time * 0.015;
        bgStars.rotation.x = time * 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      observer.disconnect();

      // Resource disposals
      tubeGeometry.dispose();
      tubeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      bgStarGeo.dispose();
      bgStarMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scrollProgress]);

  return (
    <div
      ref={containerRef}
      id="infinity-3d-scene"
      className={`relative w-full h-full pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* High-quality CSS / SVG fallback if WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="relative w-80 h-44 border border-cyan-500/30 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-48 h-24 border border-cyan-400/50 rounded-full rotate-45" />
            <div className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-ping" />
          </div>
        </div>
      )}
    </div>
  );
};
