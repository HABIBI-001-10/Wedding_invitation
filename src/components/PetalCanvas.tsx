import React, { useEffect, useRef } from 'react';

interface PetalCanvasProps {
  petalCount?: number;
  burstTrigger?: number; // Change this number to trigger a petal shower
  intensity?: 'gentle' | 'medium' | 'lush';
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  color: string;
  depth: number; // 0 = background, 1 = mid, 2 = foreground
  swayAmplitude: number;
  swayFrequency: number;
  phase: number;
}

export const PetalCanvas: React.FC<PetalCanvasProps> = ({
  petalCount = 35,
  burstTrigger = 0,
  intensity = 'medium',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const mouseRef = useRef<{ x: number; y: number; vx: number; vy: number; lastX: number; lastY: number }>({
    x: -1000,
    y: -1000,
    vx: 0,
    vy: 0,
    lastX: -1000,
    lastY: -1000,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = prefersReducedMotion 
      ? 8 
      : intensity === 'gentle' ? 20 : intensity === 'lush' ? 55 : petalCount;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(247, 214, 218, ', // Soft Blush
      'rgba(238, 192, 198, ', // Pale Cherry
      'rgba(245, 230, 232, ', // Cream Petal
      'rgba(217, 168, 175, ', // Dusty Rose
      'rgba(255, 240, 243, ', // Dewdrop Rose
    ];

    const createPetal = (startY?: number, isBurst = false): Petal => {
      const depth = Math.random() < 0.2 ? 2 : Math.random() < 0.6 ? 1 : 0; // 0=back, 1=mid, 2=front
      const baseSize = depth === 2 ? 18 + Math.random() * 10 : depth === 1 ? 11 + Math.random() * 7 : 6 + Math.random() * 5;
      const baseSpeedY = depth === 2 ? 1.4 + Math.random() * 1.2 : depth === 1 ? 0.9 + Math.random() * 0.8 : 0.5 + Math.random() * 0.5;

      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * height,
        size: baseSize,
        speedY: isBurst ? baseSpeedY * 2 : baseSpeedY,
        speedX: (Math.random() - 0.3) * (depth === 2 ? 1.5 : 1.0),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.02 + Math.random() * 0.03,
        opacity: depth === 2 ? 0.85 + Math.random() * 0.15 : depth === 1 ? 0.65 + Math.random() * 0.25 : 0.35 + Math.random() * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth,
        swayAmplitude: 20 + Math.random() * 30,
        swayFrequency: 0.008 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
      };
    };

    // Initialize petals
    petalsRef.current = Array.from({ length: count }, () => createPetal());

    // Mouse movement listener for air disturbance
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.vx = e.clientX - mouseRef.current.lastX;
      mouseRef.current.vy = e.clientY - mouseRef.current.lastY;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        mouseRef.current.x = t.clientX;
        mouseRef.current.y = t.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Global wind variation
      const globalWind = Math.sin(time * 0.005) * 0.6 + 0.4;

      const petals = petalsRef.current;
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Motion physics
        p.phase += p.swayFrequency;
        const sway = Math.sin(p.phase) * 0.8;
        p.x += p.speedX + sway + globalWind * (p.depth + 1) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Mouse turbulence effect
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (1 - dist / 120) * 3;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
          p.rotation += 0.05;
        }

        // Reset when leaving screen
        if (p.y > height + 40 || p.x > width + 50 || p.x < -50) {
          petals[i] = createPetal(-30);
        }

        // Draw organic sakura petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        // 3D perspective flip
        const flipScale = Math.sin(p.flip);
        ctx.scale(1, flipScale);

        // Apply depth-of-field blur if foreground
        if (p.depth === 2 && !prefersReducedMotion) {
          ctx.shadowColor = 'rgba(232, 192, 198, 0.4)';
          ctx.shadowBlur = 4;
        }

        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.beginPath();

        // Elegant curved petal shape with notch
        const s = p.size;
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.8, -s * 0.8, s * 1.1, s * 0.3, 0, s);
        ctx.bezierCurveTo(-s * 1.1, s * 0.3, -s * 0.8, -s * 0.8, 0, -s);
        ctx.closePath();
        ctx.fill();

        // Subtle petal vein highlight
        if (p.depth >= 1) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.7);
          ctx.quadraticCurveTo(s * 0.1, 0, 0, s * 0.7);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [petalCount, intensity]);

  // Burst effect when burstTrigger changes
  useEffect(() => {
    if (burstTrigger <= 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const burstPetals: Petal[] = [];
    const colors = [
      'rgba(247, 214, 218, ',
      'rgba(238, 192, 198, ',
      'rgba(255, 240, 243, ',
      'rgba(217, 168, 175, ',
    ];

    for (let i = 0; i < 40; i++) {
      const depth = Math.random() > 0.4 ? 2 : 1;
      burstPetals.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 350,
        y: canvas.height * 0.3 + (Math.random() - 0.5) * 200,
        size: depth === 2 ? 16 + Math.random() * 12 : 10 + Math.random() * 6,
        speedY: 1.5 + Math.random() * 2.5,
        speedX: (Math.random() - 0.5) * 4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.04 + Math.random() * 0.04,
        opacity: 0.9,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth,
        swayAmplitude: 30 + Math.random() * 25,
        swayFrequency: 0.015,
        phase: Math.random() * Math.PI * 2,
      });
    }

    petalsRef.current = [...petalsRef.current, ...burstPetals];
  }, [burstTrigger]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
};
