import React from 'react'
import {ResAndCueButtons} from "../../Types/Interface"

const RestAndCueButtons: React.FC<ResAndCueButtons>= ({restAndCueList}) => {
  return (
    <div className='flex flex-wrap justify-around'>
        {restAndCueList.map((item) => (
            <button className='border-2 w-80 border-gray-200 px-8 py-5 m-2 rounded-lg font-bold text-gray-600' key={item.text}>{item.text}</button>
        ))}
    </div>
  )
}

 
export default RestAndCueButtons