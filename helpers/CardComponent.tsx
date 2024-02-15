import React from 'react'
import Image from 'next/image';
import SingleCardProps from './SingleCardProps';

// import SingleCardProps from './SingleCardProps';
// export const cardData: SingleCardProps[] = [{
//     id: 1,
//     image: '/about.jpg',
//     title: 'HealthSphere',
//     description: 'Collaborately worked on developing scalable RESTful APIs for the Organizaton using Django Rest Framework. Delivered a compelling proof of concept by Dockerizing diverse backend services showcasing enhanced deployment. Proficiently orchestrated the configuration of Nginx and Gunicorn to establish a seamless and efficient web server setup. Constructed an administrative portal for doctor and pharmacy validation using ReactJS and Material-UI. Developed screens on Figma for mobile application developed using Flutter',
//     role: 'Software Developer Intern',
//     techStack: ['Python', 'Django REST Framework', 'React', 'Flutter', 'Docker'],
//     duration: 'March 2023 - September 2023'
// },
// ]

export default function CardComponent(props: SingleCardProps) {
    // console.log("hi " ,data);
    return (
        <div className='w-80 h-[460px] bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 p-4'>
        <div className="flex flex-col items-center">
            <Image width={150} height={150} className="rounded-full" src={props.props.image} alt="" />
            <div className="">
                <h5 className="text-xl font-medium tracking-tigh text-white">{ props.props.role} @ {props.props.title}</h5>
            </div>
            <div>{props.props.techStack?.map((item) => <button className='btn bg-cyan-50 text-black m-1 p-1 rounded-md'>{item}</button>)}</div>
            <div className='text-sm'>{props.props.description}</div> 
        </div>
            <div className='text-left mt-1 font-semibold uppercase'>{props.props.duration}</div>
        </div>
        )
}