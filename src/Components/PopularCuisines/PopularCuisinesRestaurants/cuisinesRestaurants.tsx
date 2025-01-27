import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../../CustomHooks/useFetch'
import { CardsData } from '../../../Types/Interface'

const CuisinesRestaurants = () => {

  const restaurantData= useSelector((state : any) => state?.selectedPopularCuisine?.filteredRestaurants);

  console.log(restaurantData, "restaurant Data")

  const {data, loading, error} = useFetch<CardsData>({
    url: `https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.89960&lng=80.22090&str=Biryani&trackingId=undefined&submitAction=SUGGESTION&metaData=${restaurantData}`
})

  console.log(data, "restaurant data")

  return (
    <div>cuisinesRestaurants</div>
  )
}


export default CuisinesRestaurants