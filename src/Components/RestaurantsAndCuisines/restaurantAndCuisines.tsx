import { useSelector } from 'react-redux'
import RestAndCueButtons from '../RestAndCueButtons/restAndCueButtons';
import "./restaurantAndCuisines.css"

const RestaurantAndCuisines = () => {

    const restaurantAndCuisinesDataTitle2 = useSelector((state : any) => state?.resturantData);
    const restaurantByLocationTitle = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[6].card?.card?.title);
    const restaurantByCuisinesTitle= useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[7].card?.card?.title);
    const restaurantByLocationData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[6].card?.card?.brands);
    const restaurantByCuisinesData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[7].card?.card?.brands);
    const restaurantNearmeTitle = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[8].card?.card?.title);
    const restaurantNearmeData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[8].card?.card?.brands); 

    const restaurantData = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    console.log(restaurantAndCuisinesDataTitle2, "restaurantAndCuisinesDataTitle2")

    return (
        <>
        {restaurantData && restaurantData.length > 0 && 
            <div className='custom-margin overflow-hidden'>
                <div className='flex justify-between mb-5 flex-col'>
                    <h1 className='text-2xl font-bold mb-5'>
                        {restaurantByLocationTitle}
                    </h1>
                    <div>
                        <RestAndCueButtons  restAndCueList={restaurantByLocationData} isShowMoreEnabled={true}/>
                    </div>
                    <h1 className='text-2xl font-bold mb-5'>
                        {restaurantByCuisinesTitle}
                    </h1>
                    <div>
                        <RestAndCueButtons  restAndCueList={restaurantByCuisinesData} isShowMoreEnabled={true}/>
                    </div>
                    <h1 className='text-2xl font-bold mb-5'>
                        {restaurantNearmeTitle}
                    </h1>
                    <div>
                        <RestAndCueButtons  restAndCueList={restaurantNearmeData} isShowMoreEnabled={false}/>
                    </div>
                </div>
                <hr className='font-bold margin-hr'/>
            </div>
        }
        </>
  )}


export default RestaurantAndCuisines