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
    
    const shipImg = new window.Image();
    shipImg.src = '/spaceship.png';

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

      // Draw Realistic GenAI Spaceship
      ctx.save();
      ctx.translate(ship.x, ship.y);
      ctx.rotate(ship.angle);

      if (shipImg.complete && shipImg.width > 0) {
          // The pure black background of the realistic spaceship png
          // perfectly blends out in 'screen' composite mode, leaving only the glowing ship!
          ctx.globalCompositeOperation = 'screen';
          
          const targetWidth = window.innerWidth < 768 ? 90 : 150; // Big impressive scale
          const scale = targetWidth / shipImg.width;
          const w = targetWidth;
          const h = shipImg.height * scale;
          
          // Rotate FIRST so flare + ship share the same coordinate space
          // The generated image's nose points LEFT, thrusters point RIGHT.
          // After this rotation, thrusters point downward (+y) visually.
          ctx.rotate(Math.PI / 2);
          
          const dist = Math.sqrt(dx*dx + dy*dy);
          const enginePower = Math.min(dist / 30, 2.5);
          
          // Draw flare FIRST (behind ship) — emanates from the right edge (thruster side) of the image
          if (enginePower > 0.05) {
              ctx.beginPath();
              // Wide cone shape emanating from thrusters
              const flareStart = w / 2 * 0.7;
              ctx.moveTo(flareStart, -30 * scale);
              ctx.lineTo(flareStart, 30 * scale);
              ctx.quadraticCurveTo(flareStart + (130 * enginePower), 8 * scale, flareStart + (140 * enginePower), 0);
              ctx.quadraticCurveTo(flareStart + (130 * enginePower), -8 * scale, flareStart, -30 * scale);
              ctx.closePath();
              
              const flareGradient = ctx.createLinearGradient(flareStart, 0, flareStart + (120 * enginePower), 0);
              flareGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
              flareGradient.addColorStop(0.2, `rgba(139, 92, 246, ${0.8 + enginePower * 0.1})`);
              flareGradient.addColorStop(0.6, `rgba(128, 0, 32, ${0.5 + enginePower * 0.2})`);
              flareGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
              
              ctx.fillStyle = flareGradient;
              ctx.shadowBlur = 50;
              ctx.shadowColor = '#8b5cf6';
              ctx.fill();
              ctx.shadowBlur = 0;
          }

          // Draw ship on top of flare
          ctx.globalCompositeOperation = 'screen';
          ctx.drawImage(shipImg, -w / 2, -h / 2, w, h);
          ctx.drawImage(shipImg, -w / 2, -h / 2, w, h); 
          
          ctx.globalCompositeOperation = 'source-over'; // reset
      } else {
          // Fallback simple ship if image hasn't loaded
          ctx.beginPath();
          ctx.moveTo(15, 0);
          ctx.lineTo(-10, 10);
          ctx.lineTo(-10, -10);
          ctx.closePath();
          ctx.fillStyle = '#8b5cf6';
          ctx.fill();
      }

      ctx.restore();

      // Thematic Custom Cursor Reticle
      ctx.save();
      ctx.translate(mouse.x, mouse.y);
      
      // Central glowing dot
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#8b5cf6'; // Purple center
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ffffff';
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Outer rotating dashed targeting ring
      ctx.rotate(Date.now() * 0.002);
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 10, 4, 10]);
      ctx.strokeStyle = 'rgba(128, 0, 32, 0.9)'; // Signature Burgundy ring
      ctx.stroke();

      // Inner counter-rotating calibration ring
      ctx.rotate(-Date.now() * 0.004);
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 12]);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'; // White ticks
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
