"use client";
import React, { useState,ChangeEvent, FormEvent} from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { commonMotionProperties } from '@/helpers/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

export default function Contactme({ }: Props) {
    
    const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
    
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });};
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setFormData({ email:"",subject: "",message: ""});
        e.preventDefault();
        try {
            // console.log(formData);
            const response = await fetch('/api/emailHandler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    message: formData.message,
                    subject: formData.subject
                }),
            });
            // console.log("Frontend", formData);
            const data = await response.json();
            if (data.success === true) { 
            toast.success(data.data, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            } else {
                toast.error("Error", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
        }
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <div className='h-screen flex flex-col items-center justify-between pt-24'>
        <div className="px-4 mx-auto max-w-screen-md">
              <motion.h2 {...commonMotionProperties} className="mb-16 md:mb-4 text-center uppercase tracking-widest text-xl text-[#aaaaaa]"><span className='shadow-sm shadow-[#878686]'>Contact ME</span></motion.h2>
              <motion.p {...commonMotionProperties} className="mb-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-md tracking-wider">Wanna share a feedback? Would Like to work with me? Wanna to reach out to me? </motion.p>
        <form onSubmit={handleSubmit} className="space-y-2">
            <div>
                <label {...commonMotionProperties} htmlFor="email" className="block mb-2 text-md font-base text-sm text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="focus:outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#535353] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:scale-105 transition duration-300 hover:border-rose-50" placeholder="johndoe@gmail.com" required />
            </div>
            <div>
                <label {...commonMotionProperties} htmlFor="subject" className="block mb-2 text-md font-base text-sm text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="focus:outline-none block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#535353] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:scale-105 transition duration-300 hover:border-rose-50" placeholder="Subject" required />
            </div>
            <div className="sm:col-span-2">
                <label {...commonMotionProperties} htmlFor="message" className="block mb-2 text-md font-base text-sm text-gray-900 dark:text-gray-300">Your message</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#535353] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 hover:scale-105 transition duration-300 hover:border-rose-50" placeholder="Leave a feedback..."></textarea>
            </div>
                  <button {...commonMotionProperties} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#151515] sm:w-fit hover:bg-black focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-800 transition duration-200">Send message</button>
              </form>
              <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
    </div>
    <div className="w-11/12 mx-auto max-w-screen-xl flex items-center justify-between my-0">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made by Jai Anand. Find code on <a href='https://github.com/j-a-i-a-n-a-n-d/jaianand' target='_blank' className='underline'>github</a></span>
        <ul className="flex flex-wrap items-center mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
                <SocialIcon className="hover:scale-110 hover:shadow-md hover:rounded-full transition duration-200" target="_blank" url="http://www.github.com/j-a-i-a-n-a-n-d/" fgColor="gray" bgColor="transparent"/>
            </li>
            <li>
                <SocialIcon className="hover:scale-110 hover:shadow-md hover:rounded-full transition duration-200" target="_blank" url='https://www.linkedin.com/in/jaiiianand/' fgColor="gray" bgColor="transparent"/>
            </li>
        </ul>
    </div>
    </div>)
}