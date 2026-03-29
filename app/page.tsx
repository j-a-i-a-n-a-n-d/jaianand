"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import BlogPreview from "@/components/BlogPreview";
import MobileCardDeck from "@/components/MobileCardDeck";

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Switch to deck on screens < 1024px
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Prevent hydration errors by rendering nothing until mounted
    if (!isMounted) return null;

    if (isMobile) {
        return <MobileCardDeck />;
    }

    return (
        <div className="bg-transparent text-primary min-h-screen font-sans overflow-x-hidden relative selection:bg-accent/40 selection:text-white">
            <Navbar />
            
            <main className="flex flex-col gap-0 pb-24 relative z-10 pt-0 w-full m-0 p-0">
                <section id="home" className="w-full relative z-20 m-0 p-0"><Hero /></section>
                
                {/* Remove heavy container wrappers so elements can stretch full width */}
                <section id="skills" className="w-full m-0 p-0"><Skills /></section>
                <section id="experience" className="w-full mt-24"><Experience /></section>
                <section id="projects" className="w-full mt-24"><Projects /></section>
                <section id="blogs" className="w-full mt-24"><BlogPreview /></section>
                <section id="contact" className="w-full mt-24"><Contactme /></section>
            </main>
        </div>
    );
}
