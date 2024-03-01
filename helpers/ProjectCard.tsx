import React from 'react'
import { projectDataProperties } from "./types";
import { SocialIcon } from 'react-social-icons';
type Props = {
  props: projectDataProperties
}

export default function ProjectCard({props}: Props) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden h-[450px] bg-[#383838] hover:bg-[#262626] hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-[#878686] cursor-pointer">
      <img className="w-full transition duration-300 hover:scale-110" src={props.image_id} alt="Image" />
      <div className="px-6 py-2">
        <div className=" flex justify-between font-bold text-xl mb-2 uppercase items-center">
          <span>{props.title}</span>
          <SocialIcon bgColor="#383838" url={props.gihtub_link} target="_blank" className='transition duration-200 hover:scale-125' />
        </div>
        <p className="text-white text-base">
          {props.description}
        </p>
      </div>
      <div className="px-6 pt-2 pb-4">
        {props.skills.map((item) => <span key={item} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3 transition duration-200 hover:scale-110">{ item}</span> ) }
      </div>
    </div>
  )
}