"use client";
import React from 'react'
import { cardData } from './card-data';
import CardComponent from './CardComponent';

type Props = {}

export default function Card({ }: Props) {
  return (
    <div className='w-full flex space-x-10 overflow-x-scroll snap-x snap-mandatory m-20 pt-10 md:pt-28'>
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      </div>)
}