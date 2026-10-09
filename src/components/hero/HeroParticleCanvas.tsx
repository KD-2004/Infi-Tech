import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  hue: number;
  orbitT: number;
  orbitSpeed: number;
  orbitRadiusX: number;
  orbitRadiusY: number;
  isInfinityNode: boolean;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const HeroParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setCanvasDimensions = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.parentElement.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions();

    const resizeObserver = new ResizeObserver(() => {
      setCanvasDimensions();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Mouse coordinates and velocity tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
      active: false,
      speed: 0,
      lastX: 0,
      lastY: 0
    };

    const ripples: Ripple[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      // Track mouse speed for dynamic particle repulsion
      const distMoved = Math.hypot(currentX - mouse.lastX, currentY - mouse.lastY);
      mouse.speed = Math.min(distMoved * 0.1, 8);
      mouse.lastX = currentX;
      mouse.lastY = currentY;

      mouse.targetX = currentX;
      mouse.targetY = currentY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 5,
        maxRadius: 160,
        alpha: 0.7
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Generate responsive particles
    const isMobile = width < 768;
    const particleCount = isMobile ? 45 : 85;
    const particles: Particle[] = [];

    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < particleCount; i++) {
      const isInfinity = i < (isMobile ? 24 : 42);
      const orbitT = (i / (isMobile ? 24 : 42)) * Math.PI * 2;
      const scale = Math.min(width, height) * 0.32;

      // Lemniscate of Bernoulli parametric path initial positioning
      const denom = 1 + Math.sin(orbitT) * Math.sin(orbitT);
      const infX = centerX + (scale * Math.cos(orbitT)) / denom + (Math.random() - 0.5) * 60;
      const infY = centerY + (scale * 0.7 * Math.sin(orbitT) * Math.cos(orbitT)) / denom + (Math.random() - 0.5) * 60;

      const randomX = Math.random() * width;
      const randomY = Math.random() * height;

      const posX = isInfinity ? infX : randomX;
      const posY = isInfinity ? infY : randomY;

      particles.push({
        x: posX,
        y: posY,
        originX: posX,
        originY: posY,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.45 + 0.2,
        hue: Math.random() > 0.35 ? 190 : 210, // Vibrant Cyan (190) to Deep Sky Blue (210)
        orbitT: orbitT,
        orbitSpeed: (0.002 + Math.random() * 0.003) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadiusX: scale * (0.8 + Math.random() * 0.4),
        orbitRadiusY: scale * 0.65 * (0.8 + Math.random() * 0.4),
        isInfinityNode: isInfinity
      });
    }

    let clock = 0;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      clock += 0.015;

      // Smooth mouse interpolation (spring lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Clear with slight trailing for subtle motion blur
      ctx.clearRect(0, 0, width, height);

      const currentCenterX = width / 2;
      const currentCenterY = height / 2;

      // 1. Process & Draw Shockwave Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += 4;
        ripple.alpha *= 0.94;

        ctx.save();
        ctx.strokeStyle = `rgba(34, 211, 238, ${ripple.alpha * 0.7})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        if (ripple.radius >= ripple.maxRadius || ripple.alpha <= 0.02) {
          ripples.splice(r, 1);
        }
      }

      // 2. Interactive Cursor Halo Reticle
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        const haloGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        haloGrad.addColorStop(0, 'rgba(34, 211, 238, 0.05)');
        haloGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.01)');
        haloGrad.addColorStop(1, 'rgba(2, 6, 23, 0)');

        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();

        // Delicate rotating targeting ticks around mouse
        ctx.strokeStyle = 'rgba(103, 232, 249, 0.25)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 8]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 28, clock * 2, clock * 2 + Math.PI * 1.5);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // 3. Update & Draw Particles with Mouse Physics & Infinite Path Attraction
      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          if (p.isInfinityNode) {
            // Flow along the Lemniscate of Bernoulli
            p.orbitT += p.orbitSpeed;
            const t = p.orbitT;
            const denom = 1 + Math.sin(t) * Math.sin(t);
            const targetX = currentCenterX + (p.orbitRadiusX * Math.cos(t)) / denom;
            const targetY = currentCenterY + (p.orbitRadiusY * Math.sin(t) * Math.cos(t)) / denom;

            // Gentle harmonic attraction to trajectory
            p.vx += (targetX - p.x) * 0.003;
            p.vy += (targetY - p.y) * 0.003;
          } else {
            // Free floating cosmic data particles with soft boundary reflection
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 20 || p.x > width - 20) p.vx *= -1;
            if (p.y < 20 || p.y > height - 20) p.vy *= -1;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.95;
          p.vy *= 0.95;

          // Mouse Physics: Electromagnetic Repulsion + Swirling Vortex
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 0.1) {
              const force = (1 - dist / mouse.radius);
              const angle = Math.atan2(dy, dx);
              
              // Radial repulsion
              const pushX = Math.cos(angle) * force * (4.5 + mouse.speed * 0.8);
              const pushY = Math.sin(angle) * force * (4.5 + mouse.speed * 0.8);

              // Tangential vortex rotation around cursor
              const tangentX = -Math.sin(angle) * force * 2.2;
              const tangentY = Math.cos(angle) * force * 2.2;

              p.vx += pushX + tangentX;
              p.vy += pushY + tangentY;

              // Flare brightness near cursor
              p.alpha = Math.min(0.9, p.baseAlpha + force * 0.55);
            } else {
              p.alpha += (p.baseAlpha - p.alpha) * 0.04;
            }
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.04;
          }

          // Ripple shockwave interaction
          ripples.forEach((ripple) => {
            const rdx = p.x - ripple.x;
            const rdy = p.y - ripple.y;
            const rdist = Math.hypot(rdx, rdy);
            if (Math.abs(rdist - ripple.radius) < 25) {
              const angle = Math.atan2(rdy, rdx);
              p.vx += Math.cos(angle) * 3 * ripple.alpha;
              p.vy += Math.sin(angle) * 3 * ripple.alpha;
              p.alpha = Math.min(1, p.alpha + 0.4);
            }
          });
        }

        // Draw Particle Core & Luminous Halo
        ctx.save();
        ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, ${p.alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 65%, 0.8)`;
        ctx.shadowBlur = p.size > 2 ? 8 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 4. Cursor Connection Filaments (when mouse is close)
        if (mouse.active) {
          const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (distToMouse < mouse.radius * 0.85) {
            const lineAlpha = (1 - distToMouse / (mouse.radius * 0.85)) * 0.35;
            ctx.strokeStyle = `rgba(103, 232, 249, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // 5. Inter-Particle Quantum Circuit Filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = isMobile ? 60 : 80;

          if (dist < maxDist) {
            const connectAlpha = (1 - dist / maxDist) * 0.22 * Math.min(p.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(34, 211, 238, ${connectAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-particle-canvas"
      className="absolute inset-0 pointer-events-none z-[1] w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
};
