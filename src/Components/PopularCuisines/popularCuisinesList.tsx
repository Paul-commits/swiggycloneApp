import React, { useEffect } from 'react'
import { CardsData, PopularCuisineList } from '../../Types/Interface'
import useFetch from '../../CustomHooks/useFetch'
import {setCuisinesData} from "../../Slices/searchDataSlice"
import { useSelector, useDispatch } from 'react-redux'
import PopularCuisinesCard from './popularCuisinesCard'


const PopularCuisinesList : React.FC<PopularCuisineList>= ({selectedDish}) => {

    const dispatch = useDispatch()
    console.log(selectedDish, "selectedDish")
    const {data, loading, error} = useFetch<CardsData>({
        url: `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.89960&lng=80.22090&str=${selectedDish}&trackingId=null&includeIMItem=true`
    })

    const popularCuisinesData = useSelector((state :any) => state.searchData.popularCuisinesData.suggestions);

    console.log(popularCuisinesData, "popular cuisines data")

    useEffect(() => {
        if(data){
            dispatch(setCuisinesData(data.data))
        }
    }, [data])

  return (
    popularCuisinesData &&
    <div><PopularCuisinesCard cuisinesData={popularCuisinesData}/></div>
  )
}

export default PopularCuisinesList


