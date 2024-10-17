import React, { useState } from 'react'
import Card from './Card';
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
function Testimonial(props){

let reviews=props.reviews;
const[index,setIndex]=useState(0);
const n=reviews.length;
console.log(n);

function leftShiftHandler(){
  if(index===0){
    setIndex(n-1);
  }else{
    setIndex(index-1);
  }
} 

function rightShiftHandler(){
  if(index===n-1){
    setIndex(0);
  }else{
    setIndex(index+1);
  }
} 

function surpriseHandler(){
  let randomIndex=Math.floor(Math.random()*n);
  setIndex(randomIndex);
} 

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={reviews[index]}></Card>
        <div className='flex justify-center text-3xl gap-3 mt-7 text-violet-400 font-bold'>
                <button  onClick={leftShiftHandler}  className='cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>
                <button  onClick={rightShiftHandler}  className='cursor-pointer hover:text-violet-500'><FiChevronRight/> </button>
            </div>

            <div className='mt-6'>
                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white'>
                    Surprise Me
                </button>
            </div>
    </div>
  )
}

export default Testimonial;
