import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import "./foodByResturant.css"
import Scroller from '../Scroller/scroller';
import FoodByResturantCard from '../FoodByRestaurantCard/foodByRestaurantCard';

const FoodByResturant: React.FC<{}> = () => {

  const resturantByFoodChains = useSelector((state: any) => state?.resturantData?.resturantData?.[1] ?? null);
  const resturantDetails = resturantByFoodChains?.card?.card?.gridElements?.infoWithStyle?.restaurants
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  console.log(resturantByFoodChains, "resturantByFoodChains")
  console.log(resturantDetails, "foodchain")

  return (  
    <>
    {resturantDetails !== undefined && resturantDetails !== null && resturantDetails.length > 0 && (
      <div className='custom-margin overflow-hidden'>
        <div className='flex justify-between mb-5'>
          <h1 className='text-3xl font-bold'>
            {resturantByFoodChains?.card?.card?.header?.title}
          </h1>
          {resturantDetails !== undefined && resturantDetails !== null && resturantDetails.length > 0 && <Scroller refDetails={scrollContainerRef} />}
        </div>
        <FoodByResturantCard 
          resturantDetails={resturantDetails} 
          scrollContainerRef={scrollContainerRef}
        />
        <hr className='font-bold margin-hr'/>
      </div>
    )}
    </>
  )
}


export default FoodByResturant