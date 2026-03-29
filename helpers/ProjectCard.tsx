import React from 'react'
import { projectDataProperties } from "./types";
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

type Props = {
  props: projectDataProperties
}

export default function ProjectCard({props}: Props) {
  return (
    <div className="w-full relative group rounded-3xl overflow-hidden bg-card border border-white/5 hover:border-burgundy/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(128,0,32,0.15)] h-full flex flex-col">
      {/* Image Header */}
      <div className="relative h-56 w-full overflow-hidden shrink-0 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10"></div>
        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src={props.image_id} alt={props.title} />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-20 -mt-8">
        <div className="bg-background/90 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl flex justify-between items-center shadow-xl">
           <h3 className="font-bold text-lg text-primary tracking-wide">
             {props.title}
           </h3>
           <SocialIcon bgColor="transparent" fgColor="currentColor" url={props.gihtub_link} target="_blank" className='text-secondary hover:text-white transition-all duration-300 scale-[0.6] hover:scale-75 z-10 m-0 p-0' />
        </div>
        
        <p className="text-secondary/80 text-sm leading-relaxed mt-6 mb-6 flex-1">
          {props.description}
        </p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {props.skills.map((item) => (
             <span key={item} className="px-3 py-1.5 bg-white/5 hover:bg-burgundy/20 border border-white/5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:border-burgundy/30 transition-all duration-300">
               {item}
             </span>
          ))}
        </div>
      </div>
    </div>
  )
}