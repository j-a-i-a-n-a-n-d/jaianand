import React from 'react';
import { projectDataProperties } from "./types";
import { SocialIcon } from 'react-social-icons';
import { 
  SiDjango, SiPython, SiReact, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiFramer, SiOpencv, SiSendgrid, SiBootstrap, 
  SiSocketdotio, SiExpress, SiMongodb
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const getProjectSkillIcon = (skillName: string) => {
    switch (skillName) {
        case "Django REST": return <SiDjango className="text-[#092E20] text-sm mr-1.5" />;
        case "Python": return <SiPython className="text-[#3776AB] text-sm mr-1.5" />;
        case "React": return <SiReact className="text-[#61DAFB] text-sm mr-1.5" />;
        case "OpenAI": return <span className="text-white text-sm mr-1.5">●</span>;
        case "Azure": return <VscAzure className="text-[#0078D4] text-sm mr-1.5" />;
        case "Nextjs": return <SiNextdotjs className="text-white text-sm mr-1.5 bg-black rounded-full" />;
        case "Tailwind": return <SiTailwindcss className="text-[#06B6D4] text-sm mr-1.5" />;
        case "TypeScript": return <SiTypescript className="text-[#3178C6] text-sm mr-1.5" />;
        case "Framer Motion": return <SiFramer className="text-[#0055FF] text-sm mr-1.5 bg-white rounded-full p-px" />;
        case "OpenCV": return <SiOpencv className="text-[#5C3EE8] text-sm mr-1.5" />;
        case "Sendgrid": return <SiSendgrid className="text-[#1A82E2] text-sm mr-1.5" />;
        case "Paramiko": return <SiPython className="text-[#3776AB] text-sm mr-1.5" />; // python subset
        case "Bootstrap": return <SiBootstrap className="text-[#7952B3] text-sm mr-1.5" />;
        case "Socket.io": return <SiSocketdotio className="text-white text-sm mr-1.5" />;
        case "ExpressJS": return <SiExpress className="text-white text-sm mr-1.5" />;
        case "MongoDB": return <SiMongodb className="text-[#47A248] text-sm mr-1.5" />;
        default: return <span className="text-secondary/30 text-[10px] mr-1.5">◆</span>;
    }
}

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
             <span key={item} className="flex items-center px-3 py-1.5 bg-zinc-900/90 border border-white/5 shadow-inner rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:border-burgundy/30 hover:bg-zinc-800 transition-all duration-300">
               {getProjectSkillIcon(item)}
               {item}
             </span>
          ))}
        </div>
      </div>
    </div>
  )
}