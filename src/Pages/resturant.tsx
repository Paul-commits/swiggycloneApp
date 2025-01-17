import FoodAndFilter from '../Components/FoodAndFilter/foodAndFilter';
import FoodByItem from '../Components/FoodByItem/foodByItem';
import FoodByResturant from '../Components/FoodByResturant/foodByResturant';
import RestaurantAndCuisines from '../Components/RestaurantsAndCuisines/restaurantAndCuisines';

export default function Resturant() {

  return (
    <div className='max-width-screen-l flex justify-center flex flex-col'>
        <FoodByItem />
        <FoodByResturant />
        <FoodAndFilter />
        <RestaurantAndCuisines />
        
    </div>
  )
}