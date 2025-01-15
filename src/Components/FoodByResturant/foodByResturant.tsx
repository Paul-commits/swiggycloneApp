import React, { useRef , useEffect} from 'react'
import { useSelector } from 'react-redux'
import "./foodByResturant.css"
import Scroller from '../Scroller/scroller';
import { MdStars } from "react-icons/md"
import { GoDotFill } from "react-icons/go"

const FoodByResturant: React.FC<{}> = () => {

  const resturantByFoodChains = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[1])
  const resturantDetails = resturantByFoodChains?.card?.card?.gridElements?.infoWithStyle?.restaurants
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);


  console.log(resturantByFoodChains, "foodchain")

  return (  
    <>
      {resturantByFoodChains !== null &&
        <div className='custom-margin overflow-hidden'>
          <div className='flex justify-between mb-5'>
            <h1 className='text-3xl font-bold'>{resturantByFoodChains?.card?.card?.header.title}</h1>
            <Scroller refDetails={scrollContainerRef}/>
          </div>
          <div className='flex overflow-x-auto gap-5 p-4 scrollbar-hide' ref={scrollContainerRef}>
            {resturantDetails.map((item : any) => (
              <div key={item.info.id} className='flex-none w-72 rounded-lg'>
                <a className='block'key={item.info.id} href="hs">
                  <div className=' overflow-hidden'>
                      <img className='w-full h-52 object-fit rounded-lg'
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} 
                        alt=""
                      />
                    <div>
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
                        <div className='flex text-base font-normal text-slate-500'>
                          {item?.info?.cuisines.map((cuisine : string , index:number) => (
                            <div className='mr-1 flex-none'key={cuisine}>
                              <span className='overflow-hidden whitespace-nowrap text-ellipsis'>{cuisine}</span>
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
          <hr className='font-bold margin-hr'/>
        </div>
      }
    </>
  )
}


export default FoodByResturant