import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setPopularCuisines} from "../../../Slices/searchDataSlice"
import useFetch from '../../../CustomHooks/useFetch'
import {CardsData} from "../../../Types/Interface"
import "../popularCuisines.css"
import PopularCuisinesList from './popularCuisinesList'


const PopularCuisines: React.FC<{}> = () => {   

    const dispatch = useDispatch()
    const [selectedDish, setSelectedDish] = useState<string>("");
    
    const searchDataHeader = useSelector((state : any) => state?.popularCuisinesData?.popularCuisinesList && state?.popularCuisinesData?.popularCuisinesList?.header)
    const searchDataItems = useSelector((state : any) => state?.popularCuisinesData?.popularCuisinesList && state?.popularCuisinesData?.popularCuisinesList?.imageGridCards?.info)
    const userdDish = useSelector((state: any) => state.popularCuisinesData.selectedPopularCuisine.selectedDish)

    useEffect(() => {
        setSelectedDish(userdDish)
      }, [userdDish])

    const {data, loading, error} = useFetch<CardsData>({
        url: "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9743773&lng=77.7151616"
    })

    useEffect(() => {
        if(data){
            dispatch(setPopularCuisines(data.data.cards[1].card.card))
        }
    }, [data])

    const handleSelectDish = (dish : string) => {
        const dishLink = dish.split("=");
        setSelectedDish(dishLink[1]);
    }

  return (
    searchDataItems && searchDataItems !==null &&
    <div className='relative w-[860px] my-0 mx-auto min-h-[calc(100vh-70px)]'>
        <div className='overflow-x-hidden'>
            <div className='pt-6 pl-4'>
                <h1 className='text-2xl font-bold ml-4'>{searchDataHeader.title}</h1>
            </div>
            <div></div>
            <div></div>
            <div className='pt-3 px-1 pl-6 my-2'>
                <div className={`flex overflow-x-scroll overflow-y-hidden scrollbar-hide ${selectedDish !== '' && 'hidden'}`}>
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
            </div>
        </div>
    <div>
        {selectedDish !=='' && 
            <PopularCuisinesList selectedDish={selectedDish} />
            }
    </div>
    </div>
  )
}

export default PopularCuisines
