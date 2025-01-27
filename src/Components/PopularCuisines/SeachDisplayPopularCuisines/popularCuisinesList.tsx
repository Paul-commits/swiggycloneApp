import React, { useState, useEffect } from 'react'
import { CardsData, PopularCuisineList } from '../../../Types/Interface'
import useFetch from '../../../CustomHooks/useFetch'
import {setSelectedPopularCuisine, setFilteredRestaurants} from "../../../Slices/searchDataSlice"
import { useSelector, useDispatch } from 'react-redux'
import PopularCuisinesCard from './popularCuisinesCard'
import CuisinesRestaurants from '../PopularCuisinesRestaurants/cuisinesRestaurants'


const PopularCuisinesList : React.FC<PopularCuisineList>= ({selectedDish}) => {

    const [displayCuisinesRestaurants, setDisplayCuisinesRestaurants] = useState<number | null>(null);
    
    console.log(displayCuisinesRestaurants, "displayCuisinesRestaurants")
    
    const dispatch = useDispatch()
    const {data, loading, error} = useFetch<CardsData>({
        url: `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.89960&lng=80.22090&str=${selectedDish}&trackingId=null&includeIMItem=true`
    })

    const popularCuisinesData = useSelector((state :any) => state.popularCuisinesData.selectedPopularCuisine.cuisineDishes.suggestions);

    console.log(popularCuisinesData, "popularCuisinesData")

    const filterSelectedDish = (index: number) => {
        const filteredRestaurants = popularCuisinesData?.filter((_: any, i: number) => i === index);
        console.log(filteredRestaurants, "filteredRestaurants");
        dispatch(setFilteredRestaurants(filteredRestaurants))

    };

    
    useEffect(() => {
        if(data){
            dispatch(setSelectedPopularCuisine(data.data))
        }
    }, [data])

    useEffect(() => {
        if (popularCuisinesData && displayCuisinesRestaurants !==null ){
            filterSelectedDish(displayCuisinesRestaurants && displayCuisinesRestaurants)
        }
    }, [filterSelectedDish])

  return (
    popularCuisinesData && 
    <div>
        <div>
            <PopularCuisinesCard cuisinesData={popularCuisinesData} 
            displayCuisinesRestaurants={setDisplayCuisinesRestaurants}
            />
        </div>
        {
            displayCuisinesRestaurants!== null &&

        <div>
            <CuisinesRestaurants />
        </div>
        }
    </div>
  )
}

export default PopularCuisinesList


