import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const CuisinesRestaurantsCard = () => {
    const filteredRestaurants = useSelector((state: any) => 
        state?.popularCuisinesData?.selectedPopularCuisine?.filteredRestaurants[0]?.subCategory
    );

    const cuisineRestaurantData = useSelector((state: any) => 
        filteredRestaurants === 'Dish' 
        ? state?.popularCuisinesData?.selectedPopularCuisine?.restaurantsDishes?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards 
        : state?.popularCuisinesData?.selectedPopularCuisine?.restaurantsDishes?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants
    );

    return (
        <>
            {cuisineRestaurantData !== undefined && (
                <div className="p-4 flex flex-wrap gap-4">  
                    {cuisineRestaurantData.map((item: any, index: number) => {
                        if (index > 0) {
                            return (
                                <div key={index} className="flex-1 bg-white shadow-md rounded-xl p-4 basis-[calc(50%-8px)]">
                                    <a className="flex justify-between items-center cursor-pointer">
                                        <div>
                                            <p className="text-lg font-semibold">{`By ${item.card.card.restaurant.info.name}`}</p>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <IoIosStar className="text-yellow-500" />
                                                <span>{item.card.card.restaurant.info.avgRating}</span>
                                                <span>•</span>
                                                <span>{item.card.card.restaurant.info.sla.slaString}</span>
                                            </div>
                                        </div>
                                        <FaArrowRightLong className="text-gray-500 text-lg" />
                                    </a>
                                    <p className="mt-2 text-gray-800 font-medium">{item.card.card.info.name}</p>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </>
    );
};

export default CuisinesRestaurantsCard;
