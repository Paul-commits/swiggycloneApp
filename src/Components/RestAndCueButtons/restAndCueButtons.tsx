import React, {useState} from 'react'
import {ResAndCue, ResAndCueButtons} from "../../Types/Interface"
import { useSelector } from 'react-redux'
import { RiArrowDropDownLine } from "react-icons/ri";
import "./resAndCueButtons.css"

const RestAndCueButtons: React.FC<ResAndCueButtons>= ({restAndCueList, isShowMoreEnabled}) => {

  const [displayAllLocations, setDisplayAllLocations] = useState(false)

  const resAndCuebuttonTitle = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[5].card?.card?.message);

  return (
    <div className='flex flex-wrap gap-4 mb-10'>
        {restAndCueList.map((item : ResAndCue, index : number) => (
            <a className={`border-2 py-5 custom-width border-gray-200 px-2 rounded-lg font-bold text-gray-600 ${!displayAllLocations && index > 10 && 'hidden'}`} 
              key={item.text} 
              href={item.link}>
                {item.text}
            </a>
        ))}
        <button className={`border-2 w-60 border-gray-200 px-8 py-4 m-2 rounded-lg font-bold text-gray-600 ${((!isShowMoreEnabled) || (displayAllLocations)) && 'hidden'}`}
          onClick={() =>setDisplayAllLocations(true)}>
              <div className='flex align-center justify-center'>
                <span>{resAndCuebuttonTitle}
                </span>
                <span className='text-3xl'><RiArrowDropDownLine /></span>
              </div>
        </button>
    </div>
  )
}

 
export default RestAndCueButtons