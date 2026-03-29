"use client";
import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Setup positions
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    // Start ship slightly off-center
    const ship = { x: canvas.width / 2, y: canvas.height / 2 + 50, angle: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    // Support touch for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if(e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Performance-focused Stars
    const stars: { x: number; y: number; radius: number; speed: number; opacity: number; isAccent: boolean }[] = [];
    const numStars = window.innerWidth < 768 ? 80 : 200; // Fewer stars on mobile to guarantee zero lag
    
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.8 + 0.2,
            opacity: Math.random(),
            isAccent: Math.random() > 0.85 // 15% are purple/burgundy
        });
    }

    let animationFrameId: number;

    const render = () => {
      // Clear frame
      ctx.fillStyle = '#050505'; // very dark off-black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render Stars
      ctx.beginPath();
      for (const star of stars) {
         star.y += star.speed;
         
         // Twinkle effect
         star.opacity += (Math.random() - 0.5) * 0.1;
         if (star.opacity < 0.2) star.opacity = 0.2;
         if (star.opacity > 1) star.opacity = 1;

         if (star.y > canvas.height) {
             star.y = 0;
             star.x = Math.random() * canvas.width;
         }

         ctx.beginPath();
         if(star.isAccent) {
            ctx.fillStyle = `rgba(139, 92, 246, ${star.opacity})`; // Accent purple
         } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`; // White
         }
         
         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
         ctx.fill();
      }

      // Physics: Smoothly interpolate ship position towards mouse
      ship.x += (mouse.x - ship.x) * 0.05;
      ship.y += (mouse.y - ship.y) * 0.05;

      const dx = mouse.x - ship.x;
      const dy = mouse.y - ship.y;
      
      const targetAngle = Math.atan2(dy, dx) + Math.PI / 2; 
      
      let deltaAngle = targetAngle - ship.angle;
      while (deltaAngle > Math.PI) deltaAngle -= Math.PI * 2;
      while (deltaAngle < -Math.PI) deltaAngle += Math.PI * 2;
      ship.angle += deltaAngle * 0.08;

      // Draw Spaceship (2x Scale)
      ctx.save();
      ctx.translate(ship.x, ship.y);
      ctx.rotate(ship.angle);

      // Engine Glow / Exhaust
      const dist = Math.sqrt(dx*dx + dy*dy);
      const enginePower = Math.min(dist / 50, 1.2);
      
      if (enginePower > 0.05) {
          ctx.beginPath();
          ctx.moveTo(-8, 20);
          ctx.lineTo(8, 20);
          ctx.lineTo(0, 20 + (50 * enginePower));
          ctx.closePath();
          
          ctx.fillStyle = `rgba(128, 0, 32, ${0.4 + enginePower * 0.5})`; // Burgundy flame
          ctx.shadowBlur = 30;
          ctx.shadowColor = '#8b5cf6'; // Purple smoke glow
          ctx.fill();
          ctx.shadowBlur = 0;
      }

      // Ship Hull (sleek 2026 delta design at 2x scale)
      ctx.beginPath();
      ctx.moveTo(0, -32);  // Nose
      ctx.lineTo(24, 24);  // Right wingtip
      ctx.lineTo(10, 16);  // Back right notch
      ctx.lineTo(-10, 16); // Back left notch
      ctx.lineTo(-24, 24); // Left wingtip
      ctx.closePath();
      
      // Gradient metallic hull
      const gradient = ctx.createLinearGradient(0, -32, 0, 24);
      gradient.addColorStop(0, '#ffffff'); // bright nose
      gradient.addColorStop(0.5, '#aaaaaa');
      gradient.addColorStop(1, '#8b5cf6'); // purple infused engines
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Hull outline
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
    />
  );
}
