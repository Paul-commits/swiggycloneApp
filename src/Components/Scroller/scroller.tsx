import React from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { ScrollRef } from '../../Types/Interface';

const Scroller:React.FC<ScrollRef> = ({refDetails})  => {
    const handleScroll =(scrollPosition : string) => {
        if (refDetails.current){
            refDetails.current.scrollBy({
                left: scrollPosition === 'left' ? -600 : 600,
                behavior : 'smooth'
            })
        }
    }

  return (
            <div>
                <button
                    className='bg-gray-300 text-black p-3 rounded-full font-bold mr-2'
                        onClick={() => handleScroll("left")}
                        >
                        <GoArrowLeft />
                </button>
                <button
                    className='bg-gray-300 text-black p-3 rounded-full text-bold'
                        onClick={() => handleScroll("right")}
                        >
                        <GoArrowRight />
                </button>
            </div>
  )
}


export default Scroller