"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import BlogPreview from '@/components/BlogPreview';
import Contactme from '@/components/Contactme';
import { SocialIcon } from 'react-social-icons';

const SECTIONS = [
  { id: 'hero', title: 'Start', Component: Hero },
  { id: 'experience', title: 'Experience', Component: Experience },
  { id: 'skills', title: 'Arsenal', Component: Skills },
  { id: 'projects', title: 'Work', Component: Projects },
  { id: 'blogs', title: 'Insights', Component: BlogPreview },
  { id: 'contact', title: 'Contact', Component: Contactme },
];

export default function MobileCardDeck() {
  const [cards, setCards] = useState(SECTIONS);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  // Listen to hash routes (#contact, #projects) to manually bring them to the top of the deck
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCards(currentCards => {
          const index = currentCards.findIndex(c => c.id === hash);
          if (index > 0) {
            const next = [...currentCards];
            const [item] = next.splice(index, 1);
            next.unshift(item); // Pull requested card to the top
            return next;
          }
          return currentCards;
        });
      }
    };
    
    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleDragEnd = (e: any, info: any) => {
    const swipeThresholdHorz = 100;
    
    if (Math.abs(info.offset.x) > swipeThresholdHorz) {
      setDragDirection(info.offset.x > 0 ? 'right' : 'left');
      
      setTimeout(() => {
          setCards((prev) => {
            const next = [...prev];
            const shifted = next.shift(); 
            if (shifted) next.push(shifted);
            return next;
          });
          setDragDirection(null);
      }, 50);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-black overflow-hidden flex flex-col items-center pt-6 pb-6 px-0 z-50">
      
      {/* Top Mobile Bar */}
      <div className="w-full flex justify-between items-center px-6 mb-2 z-40">
        <h1 className="text-xl font-black tracking-widest text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">JA</h1>
        <div className="flex gap-2">
            <SocialIcon target="_blank" url="https://www.leetcode.com/anand_jai/" fgColor="currentColor" bgColor="transparent" className='text-zinc-400 hover:text-white transition duration-300' style={{ height: 32, width: 32 }} />
            <SocialIcon target="_blank" url="https://www.github.com/j-a-i-a-n-a-n-d/" fgColor="currentColor" bgColor="transparent" className='text-zinc-400 hover:text-white transition duration-300' style={{ height: 32, width: 32 }} />
            <SocialIcon target="_blank" url='https://www.linkedin.com/in/jaiiianand/' fgColor="currentColor" bgColor="transparent" className='text-zinc-400 hover:text-white transition duration-300' style={{ height: 32, width: 32 }} />
            <SocialIcon target="_blank" url='https://www.twitter.com/jaianand5789/' fgColor="currentColor" bgColor="transparent" className='text-zinc-400 hover:text-white transition duration-300' style={{ height: 32, width: 32 }} />
        </div>
      </div>

      <div className="text-secondary/60 text-[10px] font-semibold tracking-widest uppercase animate-pulse mb-4 z-40 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/5">
         Swipe Card Away
      </div>

      <div className="relative w-full flex-1 max-w-[94%] sm:max-w-md flex items-center justify-center mt-2">
        <AnimatePresence>
          {cards.map((section, index) => {
            if (index > 2) return null; // Only render top 3 for performance
            
            const isTop = index === 0;
            const shouldMountHeavyContent = index === 0 || index === 1;

            return (
              <motion.div
                key={section.id + index}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={isTop ? handleDragEnd : undefined}
                initial={{ 
                  scale: 0.8, 
                  y: 100, 
                  opacity: 0,
                  rotate: index % 2 === 0 ? 2 : -2
                }}
                animate={{
                  scale: 1 - index * 0.05,
                  y: index * 20,
                  opacity: 1 - index * 0.1, // Fixed: 10% decrease per card natively
                  zIndex: cards.length - index,
                  rotate: isTop ? 0 : (index % 2 === 0 ? 2 : -2),
                  boxShadow: isTop 
                    ? "0 0 40px rgba(139, 92, 246, 0.25), inset 0 0 20px rgba(255,255,255,0.05)" 
                    : "0 10px 30px rgba(0,0,0,0.8)"
                }}
                exit={{ 
                  x: dragDirection === 'left' ? -400 : 400,
                  opacity: 0, 
                  rotate: dragDirection === 'left' ? -15 : 15,
                  transition: { duration: 0.25 } 
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="absolute w-full h-[95%] sm:h-full bg-card/90 backdrop-blur-md rounded-[32px] flex flex-col overflow-hidden will-change-transform shadow-2xl border-[1.5px] border-white/20"
              >
                {/* Visual Drag Handle Area */}
                <div className="w-full shrink-0 flex flex-col items-center justify-center py-2.5 bg-zinc-950/80 border-b border-white/20 sticky top-0 z-50">
                   <div className="w-12 h-1.5 mb-1.5 bg-white/40 rounded-full cursor-grab active:cursor-grabbing"></div>
                   <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent to-burgundy drop-shadow-md">
                      {String(index + 1).padStart(2, '0')} // {section.title}
                   </div>
                </div>

                {/* Content Frame */}
                <div className="w-full flex-1 overflow-y-auto overflow-x-hidden pb-12 custom-scrollbar touch-pan-y relative z-0">
                   <div className="min-h-full flex flex-col pointer-events-auto px-1">
                     {shouldMountHeavyContent ? <section.Component /> : <div className="w-full h-full bg-zinc-900/50" />}
                   </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
