"use client"
import React from 'react'
import Image from 'next/image';
import SingleCardProps from './SingleCardProps';

export default function CardComponent(props: {props: SingleCardProps}) {
    return (
        <div className='w-[320px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 p-5 flex-shrink-0'>
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