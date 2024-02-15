"use client";
import React from 'react'
import { cardData } from './card-data';
import CardComponent from './CardComponent';
import Slider from 'infinite-react-carousel';

type Props = {}

export default function Card({ }: Props) {
  return (
    <div className='max-w-6xl w-[1152px]'>
      <Slider dots autoplay={true} slidesToShow={3} arrows={false} autoplaySpeed={ 2000} centerMode={true}>
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      <CardComponent props={cardData[0]} />
      </Slider>
      </div>)
}