import { useSelector } from 'react-redux'
import Filter from '../Filter/filter'
import FoodByResturantCard from '../FoodByRestaurantCard/foodByRestaurantCard'

const FoodAndFilter:React.FC<{}> = ()  => {

    const restaurantDataHeader = useSelector((state : any) => state?.resturantData?.resturantData !== null && state?.resturantData?.resturantData[2])
    const restaurantData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log(restaurantData, "restaurant data")

    return (
        <>
        {restaurantData && restaurantData.length > 0 && 
        <div className='custom-margin overflow-hidden'>
            <div className='flex justify-between mb-5 flex-col'>
                <h1 className='text-3xl font-bold'>
                    {restaurantDataHeader?.card?.card?.title}
                </h1>
                <Filter />
                <div>
                    <FoodByResturantCard restaurantDetails={restaurantData} scrollContainerRef={null} isScrollEnabled={false}/>
                </div>
            </div>
            <hr className='font-bold margin-hr'/>
        </div>
        }
        </>
  )
}

export default FoodAndFilter
