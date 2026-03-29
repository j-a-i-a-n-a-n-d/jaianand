"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Blogs() {
    // Boilerplate for blogs inside the /blogs route
    const dummyBlogs = [
        { id: 1, title: 'Understanding GenAI in 2026', date: 'Oct 12, 2026', readTime: '5 min read', desc: 'A deep dive into how LLMs are revolutionizing modern edge architectures.' },
        { id: 2, title: 'Mastering Framer Motion', date: 'Sept 25, 2026', readTime: '8 min read', desc: 'Crafting buttery smooth entrance animations with next generation React.' },
        { id: 3, title: 'Building the Ultimate Portfolio', date: 'Aug 04, 2026', readTime: '4 min read', desc: 'Breaking down the exact tech stack used to build this modern portfolio.' }
    ];

    return (
        <div className="bg-transparent text-primary min-h-screen font-sans overflow-x-hidden relative p-8 md:p-16">
            <Navbar />
            
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="max-w-4xl mx-auto pt-32 pb-16 relative z-10"
            >
                <Link href="/" className="inline-flex items-center text-accent hover:text-white transition duration-300 mb-12 group">
                    <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back Home
                </Link>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Thoughts & Writings
                </h1>
                <p className="text-xl text-secondary/80 mb-16 max-w-2xl leading-relaxed">
                    A collection of my thoughts on software engineering, artificial intelligence, and building scalable modern web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dummyBlogs.map((blog, i) => (
                        <motion.div 
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer group"
                        >
                            <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider uppercase text-secondary group-hover:text-accent/80 transition-colors">
                                <span>{blog.date}</span>
                                <span>{blog.readTime}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                                {blog.title}
                            </h2>
                            <p className="text-secondary/90 leading-relaxed">
                                {blog.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
