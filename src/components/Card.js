import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Card(props) {
    let review = props.review
    return (
        <div className='md:relative flex flex-col '>

            <div className='absolute -top-[7rem] z-[10] mx-auto'>
                <img src={review.image} className='aspect-square rounded-full w-[140px] h-[140px] z-[0] object-cover' alt=''></img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-1]'></div>
            </div>

            <div className='text-center mt-14'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='text-violet-400 uppercase tracker-wider '>{review.job}</p>
            </div>


            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-slate-500'>
                <p>{review.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>


        </div>
    )
}
