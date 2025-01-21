
import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchByPopularCuisines = () =>  {
  return (
    <div className='w-full mt-8 mb-16 h-12 rounded-sm border border-gray-300 flex justify-between align-center'>
        <div className='w-full'>
            <input className='w-full h-full font-medium text-l text-gray-500 border-none leading-6 focus:outline-none mx-4' 
            type="textbox" 
            placeholder='Search for restaurants and food'
            />
        </div>
        <div> 
            <span > <IoSearch className='h-full text-2xl text-gray-500 mx-4'/> </span>
        </div>
    </div>
  )
}

export default SearchByPopularCuisines
