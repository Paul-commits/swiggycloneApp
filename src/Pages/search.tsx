import PopularCuisines from '../Components/PopularCuisines/SeachDisplayPopularCuisines/popularCuisines'
import SearchByPopularCuisines from '../Components/PopularCuisines/SeachDisplayPopularCuisines/searchByPopularCuisines'
import "./pagesStyle.css";

export default function Search() {
  return (
    <div className='flex-grow' >
        <SearchByPopularCuisines />
        <PopularCuisines />
    </div>
  )
}
