import PopularCuisines from '../Components/PopularCuisines/popularCuisines'
import SearchByPopularCuisines from '../Components/PopularCuisines/searchByPopularCuisines'
import "./pagesStyle.css";

export default function Search() {
  return (
    <div className='flex-grow' >
        <SearchByPopularCuisines />
        <PopularCuisines />
    </div>
  )
}
