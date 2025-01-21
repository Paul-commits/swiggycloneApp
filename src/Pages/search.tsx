import React from 'react'
import PopularCuisines from '../Components/PopularCuisines/popularCuisines'
import SearchByPopularCuisines from '../Components/SearchByPopularCuisines/searchByPopularCuisines'

export default function Search() {
  return (
    <div className='custom-margin w-[860px] flex flex-col justify-center mx-auto'>
      <SearchByPopularCuisines />
      <PopularCuisines />
    </div>
  )
}
