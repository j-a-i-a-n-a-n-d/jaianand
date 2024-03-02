// Import necessary libraries and styles
import React, { useState } from 'react';
import { skillDataProperties } from './types';
type Props = {
  props: skillDataProperties;
};
function Skills_1({ props }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const overlayHeight = `${props.proficiency}%`;
  const progressBarStyles = {
    clipPath: `polygon(50% 0%, 100% 0%, 100% ${overlayHeight}, 0% ${overlayHeight}, 0% 0%)`,
    transform: `rotate(180deg)`,
    'opacity': 0.92,
    
  };

  return (
    <div
      className='relative hover:scale-125 transition duration-500 hover:shadow-lg hover:shadow-[#878686] rounded-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.image_id}
        className='cursor-pointer flex-shrink-0 text-2xl w-20 h-20 md:w-24 md:h-24 object-contain rounded-full'
      />
      {isHovered && (
        <div className='absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24'>
          <div
            className='rounded-full w-full h-full bg-[rgb(38,38,38)]'
            style={progressBarStyles}
          >
            <div className='flex justify-center items-start pt-4 w-full h-full'>
              <span className='text-2xl text-white font-black rotate-180 tracking-tighter '>
                {props.proficiency}<span className='text-lg'>%</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills_1;
