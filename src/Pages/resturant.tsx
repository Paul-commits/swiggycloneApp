import FoodByItem from '../Components/FoodByItem/foodByItem';
import FoodByResturant from '../Components/FoodByResturant/foodByResturant';

export default function Resturant() {

  return (
    <div className='max-width-screen-l flex justify-center flex flex-col'>
        <FoodByItem />
        <FoodByResturant />
    </div>
  )
}