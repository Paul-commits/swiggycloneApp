import React, { useState, useEffect } from 'react'
import { CardsData, PopularCuisineList } from '../../../Types/Interface'
import useFetch from '../../../CustomHooks/useFetch'
import {setSelectedPopularCuisine, setFilteredRestaurants} from "../../../Slices/searchDataSlice"
import { useSelector, useDispatch } from 'react-redux'
import PopularCuisinesCard from './popularCuisinesCard'
import CuisinesRestaurants from '../PopularCuisinesRestaurants/cuisinesRestaurants'


const PopularCuisinesList : React.FC<PopularCuisineList>= ({selectedDish}) => {

    const [cuisineRestaurantIndex, setCuisineRestaurantIndex] = useState<number | null>(null);
    
    const dispatch = useDispatch()
    const {data, loading, error} = useFetch<CardsData>({
        url: `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.89960&lng=80.22090&str=${selectedDish}&trackingId=null&includeIMItem=true`
    })

    const popularCuisinesData = useSelector((state :any) =>   state?.popularCuisinesData?.selectedPopularCuisine?.cuisineDishes?.suggestions);
    
    useEffect(() => {
        if(data){
            dispatch(setSelectedPopularCuisine(data.data))
        }
    }, [data, dispatch])

    useEffect(() => {
        if (popularCuisinesData && cuisineRestaurantIndex !==null ){
            const filteredRestaurants = popularCuisinesData?.filter((_: any, i: number) => i === cuisineRestaurantIndex);
            console.log(filteredRestaurants, "filteredRestaurants");
            dispatch(setFilteredRestaurants(filteredRestaurants))
        }
    }, [popularCuisinesData, cuisineRestaurantIndex, dispatch])

  return (
    popularCuisinesData && 
    <div>
        {cuisineRestaurantIndex === null ? (
            <PopularCuisinesCard 
                cuisinesData={popularCuisinesData} 
                displayCuisinesRestaurants={setCuisineRestaurantIndex}
            />
        ) : (
            data && 
            <CuisinesRestaurants />
        )}
    </div>
  )
}

export default PopularCuisinesList


