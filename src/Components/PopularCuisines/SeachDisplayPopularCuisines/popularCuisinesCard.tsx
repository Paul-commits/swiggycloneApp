import React from 'react'
import { CuisinesDataProps } from '../../../Types/Interface'
import "../popularCuisines.css"
    
const PopularCuisinesCard: React.FC<CuisinesDataProps> = ({cuisinesData, displayCuisinesRestaurants}) => {

    const handleSelectedDish = (index: number) => {
        displayCuisinesRestaurants(index)
    }

    return (
        <div>
            {cuisinesData.map((item, index) => (
                <button className='flex ml-4 px-4 py-4 items-center w-full hover:bg-sky-50' 
                    key={item.cloudinaryId}
                    onClick={() => handleSelectedDish(index)}
                    >
                    <div className='w-16 h-16'>
                        <img 
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${item.cloudinaryId}`}
                            className='rounded-md'
                            />
                    </div>
                    <div className='flex flex-col justify-center ml-4'>
                        <p className='flex justtify-start'>{item.text}</p>
                        <p className='flex justtify-start text-neutral-500'>{item.tagToDisplay}</p>
                    </div>
                </button>
            ))}
        </div>
      )
    }
    

export default PopularCuisinesCard