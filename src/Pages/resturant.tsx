import FoodAndFilter from '../Components/FoodAndFilter/foodAndFilter';
import FoodByItem from '../Components/FoodByItem/foodByItem';
import FoodByResturant from '../Components/FoodByResturant/foodByResturant';
import RestaurantAndCuisines from '../Components/RestaurantsAndCuisines/restaurantAndCuisines';
import "./pagesStyle.css"

export default function Resturant() {

  return (
          <div className='flex w-full h-full flex-col bg-[#fff]'>
            <FoodByItem />
            <FoodByResturant />
            <FoodAndFilter />
            <RestaurantAndCuisines />  
          </div>
  )
}

{/* <div className='max-width-screen-l flex justify-center flex flex-col restaurantStyle'> */}