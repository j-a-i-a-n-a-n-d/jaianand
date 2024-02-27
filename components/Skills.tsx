"use client";
import Skills_1 from '@/helpers/Skills_1';
import React from 'react'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='flex flex-col h-screen gap-24 items-center'>
      <div className='uppercase mt-24'>Skills</div>
      <div className="max-w-md  flex flex-row gap-2 flex-wrap max-h-screen justify-center items-center overflow-y-auto">
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
          <Skills_1 />
      </div>
    </div>
  )
}