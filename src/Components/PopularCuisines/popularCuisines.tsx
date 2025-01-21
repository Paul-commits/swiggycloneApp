import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setSearchData} from "../../Slices/searchDataSlice"
import useFetch from '../../CustomHooks/useFetch'
import {CardsData} from "../../Types/Interface"
import "../../Components/commonStyles.css"
import "./popularCuisines.css"
import PopularCuisinesList from './popularCuisinesList'


const PopularCuisines: React.FC<{}> = () => {   

    const dispatch = useDispatch()
    const [selectedDish, setSelectedDish] = useState<string>("");

    const searchDataHeader = useSelector((state : any) => state?.searchData?.searchData && state?.searchData?.searchData?.header)
    const searchDataItems = useSelector((state : any) => state?.searchData?.searchData && state?.searchData?.searchData?.imageGridCards?.info)

    const {data, loading, error} = useFetch<CardsData>({
        url: "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9743773&lng=77.7151616"
    })

    useEffect(() => {
        if(data){
            dispatch(setSearchData(data.data.cards[1].card.card))
        }
    }, [data])

    const handleSelectDish = (dish : string) => {
        const dishLink = dish.split("=");
        setSelectedDish(dishLink[1]);
    }

  return (
    searchDataItems && searchDataItems !==null &&
    <div className='relative w-full'>
        <div className='pb-2 sticky w'>
            <h1 className='text-2xl font-bold ml-4'>{searchDataHeader.title}</h1>
        </div>
        <div className='flex my-2 pt-3 px-6 pb-6 overflow-scroll scrollbar-hide'>
            {searchDataItems.map((item:any) => (
                <div className='cutomHeight mr-[10px]' key={item.id}>
                <button className='w-full h-full' onClick={() => handleSelectDish(item.action.link)}>
                    <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`} 
                        alt={item.action.text}
                    />
                </button>
                </div>
            ))}
        </div>
        <div>
            {selectedDish !=='' && <PopularCuisinesList selectedDish={selectedDish} />}
        </div>
    </div>
  )
}

export default PopularCuisines
