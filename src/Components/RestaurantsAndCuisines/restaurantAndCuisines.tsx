import { useSelector } from 'react-redux'
import RestAndCueButtons from '../RestAndCueButtons/restAndCueButtons';
const RestaurantAndCuisines = () => {

    const restaurantAndCuisinesDataTitle = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[6].card?.card?.title);
    const restaurantAndCuisinesDataTitle2 = useSelector((state : any) => state?.resturantData);
    const restaurantAndCuisinesData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[6].card?.card?.brands);
    const restaurantData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log(restaurantData, "restaurant data")


    console.log(restaurantAndCuisinesData, "restaurantAndCuisinesData")
    console.log(restaurantAndCuisinesDataTitle2, "restaurantAndCuisinesDataTitle")

    return (
        <>
        {restaurantData && restaurantData.length > 0 && 
        <div className='custom-margin overflow-hidden'>
            <div className='flex justify-between mb-5 flex-col'>
                <h1 className='text-3xl font-bold'>
                    {restaurantAndCuisinesDataTitle}
                </h1>
                <div>
                    <RestAndCueButtons restAndCueList={restaurantAndCuisinesData} />
                </div>
            </div>
        </div>
}
        </>
  )}


export default RestaurantAndCuisines