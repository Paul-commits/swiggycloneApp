import React from 'react'
import "./foodByRestaurantCard.css"
import { MdStars } from "react-icons/md"
import { GoDotFill } from "react-icons/go"

const FoodByResturantCard: React.FC<any> = ({restaurantDetails ,scrollContainerRef , isScrollEnabled = true}) => {

  return (  
    <>
        <div className={`flex gap-5 p-4 overflow-x-auto scrollbar-hide ${!isScrollEnabled && 'overflow-x-auto flex-wrap '}`} ref={scrollContainerRef}>
            {restaurantDetails.map((item : any) => (
              <div key={item.info.id} className='flex-none w-60 rounded-lg'>
                <a className='block'key={item.info.id} href="hs">
                  <div className={`relative overflow-hidden bg-white ${! isScrollEnabled && 'overflow-hidden'}`}>
                      <img className='w-full h-44 object-fit rounded-lg'
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} 
                        alt=""
                      />
                  <div>
                  <div>
                    <span 
                      className='absolute font-extrabold text-xl text-white mt-[-35px] ml-2'>
                          {`${item?.info?.aggregatedDiscountInfoV3?.header ? item?.info?.aggregatedDiscountInfoV3?.header : '' } 
                          ${item?.info?.aggregatedDiscountInfoV3?.subHeader ? item?.info?.aggregatedDiscountInfoV3?.subHeader : ''}`}</span>
                  </div>
                      <div className='flex flex-col'>
                        <div className='font-bold text-lg'>{item?.info?.name}</div>
                        <div className='flex items-center'>
                          <span className='text-green-700 text-2xl'><MdStars /> </span>
                          <div className='flex items-center'>
                            <span>{item?.info?.avgRating}</span> 
                            <span className='text-xs'><GoDotFill /></span>
                            <span className='font-medium text-base'>{item?.info?.sla?.slaString}</span>
                          </div>
                        </div>
                        <div className='flex text-base font-normal text-slate-500 truncate text-ellipsis'>
                          {item?.info?.cuisines.map((cuisine : string , index:number) => (
                            <div className='mr-1 flex-none'key={cuisine}>
                              <span className='truncate text-ellipsis'>{cuisine}</span>
                              {index !== item.info.cuisines.length - 1 && ','}
                            </div>
                          ))}
                        </div>
                        <div className='text-base font-normal text-slate-500'>{item?.info?.areaName}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
    </>
  )
}


export default FoodByResturantCard