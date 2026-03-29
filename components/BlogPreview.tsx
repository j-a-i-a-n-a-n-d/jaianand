"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { commonMotionProperties } from '@/helpers/data';
import Link from 'next/link';

export default function BlogPreview() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:max-w-6xl mx-auto mt-12 mb-24">
       <motion.div {...commonMotionProperties} className="uppercase tracking-widest text-xl text-secondary mb-12 bg-card px-4 py-2 rounded-lg border border-zinc-800/50">
           Thoughts & Blogs
       </motion.div>
       <motion.div {...commonMotionProperties} className="w-full text-center py-10">
           <Link href="/blogs" className="px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition duration-300 shadow-lg shadow-accent/20">
               Explore My Articles
           </Link>
       </motion.div>
    </div>
  );
}
