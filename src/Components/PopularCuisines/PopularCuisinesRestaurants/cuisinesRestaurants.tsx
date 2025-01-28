import React, { useEffect, useState } from 'react'
import {setRestaurantsDishes} from "../../../Slices/searchDataSlice"
import { useSelector, useDispatch } from 'react-redux'
import useFetch from '../../../CustomHooks/useFetch'
import { CardsData } from '../../../Types/Interface'
import CuisinesRestaurantsCard from './cuisinesRestaurantsCard'

const CuisinesRestaurants = () => {

  const [metaData, setMetadata] = useState<string | null>(null);

  const dispatch = useDispatch();
  const restaurantMetadata= useSelector((state : any) => state?.popularCuisinesData?.selectedPopularCuisine?.filteredRestaurants[0] && state?.popularCuisinesData?.selectedPopularCuisine?.filteredRestaurants[0].metadata);
  const selectedDish= useSelector((state : any) => state.popularCuisinesData.selectedPopularCuisine.selectedDish);
  const selectedDish2= useSelector((state : any) => state?.popularCuisinesData?.selectedPopularCuisine?.filteredRestaurants[0]?.text);
  // const selectedFoodChain= useSelector((state : any) => state?.popularCuisinesData?.selectedPopularCuisine?.filteredRestaurants[0].text);

  // console.log(selectedFoodChain, "selectedFoodChain")
  console.log(selectedDish2, "selectedDish2")


  useEffect(() => {
    if(restaurantMetadata !== undefined){
      formatMetadata()
    }
  }, [])

  const formatMetadata = () => {
    let newMetadata = restaurantMetadata.substring(1, restaurantMetadata.length -1 );
    setMetadata(newMetadata)
  }

  const {data, loading, error} = useFetch<CardsData>({
    url: `https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.89960&lng=80.22090&str=${selectedDish2}&trackingId=undefined&submitAction=SUGGESTION&metaData=${metaData}`
  })

  useEffect(() => {
    if (data){
      dispatch(setRestaurantsDishes(data))
    }
  }, [data])

  return (
    <div className='bg-gray-100 h-full'>
      {!loading && <CuisinesRestaurantsCard />}
    </div>  
      
  )
}


export default CuisinesRestaurants