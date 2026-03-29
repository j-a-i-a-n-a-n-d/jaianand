"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { commonMotionProperties } from '@/helpers/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactme() {
    const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/emailHandler', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            
            setFormData({ email: "", subject: "", message: "" });
            
            if (data.success) { 
                toast.success(data.data, {
                    position: "bottom-right", autoClose: 5000, theme: "dark"
                });
            } else {
                toast.error("Error sending message", {
                    position: "bottom-right", autoClose: 5000, theme: "dark"
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-between min-h-[80vh] w-full pt-20 pb-12 relative'>
            <div className="px-4 mx-auto w-full max-w-4xl flex-1 flex flex-col justify-center">
                <motion.div {...commonMotionProperties} className="mb-12 text-center uppercase tracking-widest text-2xl text-primary font-black bg-card/60 px-8 py-3 rounded-xl border border-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(128,0,32,0.3)] self-center mx-auto w-max">
                    Contact Me
                </motion.div>
                
                <motion.p {...commonMotionProperties} className="mb-12 font-light text-center text-secondary md:text-lg tracking-wide max-w-2xl mx-auto">
                    Got an idea? Need help with an ambitious project? Or just want to say hi? I'd love to hear from you.
                </motion.p>
                
                <form onSubmit={handleSubmit} className="space-y-6 bg-card/40 backdrop-blur-xl border border-white/5 p-8 rounded-[40px] shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy/20 rounded-full blur-[80px] -z-10"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">Your email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full focus:outline-none bg-zinc-900/60 border border-white/10 text-primary text-sm rounded-xl focus:ring-burgundy focus:border-burgundy block p-3 transition duration-300 hover:border-burgundy/40 hover:bg-zinc-800/80 shadow-inner" placeholder="hello@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-primary">Subject</label>
                            <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full focus:outline-none bg-zinc-900/60 border border-white/10 text-primary text-sm rounded-xl focus:ring-burgundy focus:border-burgundy block p-3 transition duration-300 hover:border-burgundy/40 hover:bg-zinc-800/80 shadow-inner" placeholder="What is this regarding?" required />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">Your message</label>
                        <textarea id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full focus:outline-none bg-zinc-900/60 border border-white/10 text-primary text-sm rounded-xl focus:ring-burgundy focus:border-burgundy block p-4 transition duration-300 hover:border-burgundy/40 hover:bg-zinc-800/80 shadow-inner resize-none" placeholder="Let's build something great together..."></textarea>
                    </div>
                    
                    <motion.button {...commonMotionProperties} type="submit" className="w-full md:w-auto py-3 px-8 text-sm font-bold text-white rounded-full bg-burgundy hover:bg-burgundy/80 focus:ring-4 focus:ring-burgundy/30 transition-all duration-300 shadow-lg shadow-burgundy/20">
                        Send Message
                    </motion.button>
                </form>
            </div>
            
            {/* Footer embedded in contact section */}
            <div className="w-full max-w-7xl px-4 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-sm text-secondary/70 text-center md:text-left">
                    &copy; 2026 Jai Anand. Building the modern web. 
                    <a href='https://github.com/j-a-i-a-n-a-n-d/jaianand' target='_blank' className='underline ml-1 hover:text-white transition-colors'>Source Code</a>
                </span>
                <div className="flex gap-4">
                    <SocialIcon className="hover:scale-125 transition-transform duration-300 opacity-70 hover:opacity-100" target="_blank" url="https://github.com/j-a-i-a-n-a-n-d/" fgColor="currentColor" bgColor="transparent" style={{ height: 32, width: 32 }} />
                    <SocialIcon className="hover:scale-125 transition-transform duration-300 opacity-70 hover:opacity-100" target="_blank" url='https://www.linkedin.com/in/jaiiianand/' fgColor="currentColor" bgColor="transparent" style={{ height: 32, width: 32 }} />
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} theme="dark" hideProgressBar={false} />
        </div>
    )
}