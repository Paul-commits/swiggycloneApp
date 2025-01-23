import React, {useState, useEffect, useRef} from 'react';
import Loader from '../Loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { getResturantData } from '../../Slices/resturantDataSlice';

import "./foodByItem.css";

import Scroller from '../Scroller/scroller';

const FoodByItem:React.FC<{}> =() => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch()
    
    const resturantByFoodItems = useSelector((state : any) => state?.resturantData?.resturantData && state?.resturantData?.resturantData[0]);
    
    
    useEffect(() => {
        getMenuDetails()
    }, [])
    
    
    
    // const getMenuDetails = async() => {
    //         try {
    //         setIsLoading(true)
    //         const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //         const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    
    //         let response = await fetch(proxyUrl + targetUrl, {
    //                 headers: {
    //                 'X-Requested-With': 'XMLHttpRequest'
    //             }
    //         });
    
    //         if (response.ok) {
    //             let resp = await response.json();
    //             const menuData = JSON.parse(resp.contents);    
    //             dispatch(getResturantData(menuData.data.cards))

    //             setIsLoading(false)
    //         }
    //     } catch (err) {
    //             console.error(err);
    //         }
    //   }

    const getMenuDetails = async () => {
        try {
            setIsLoading(true);
            const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const proxyUrl = `${encodeURIComponent(targetUrl)}`;
            
            let response = await fetch(targetUrl);
    
            if (response.ok) {
                let resp = await response.json();
                console.log(resp, "resp")
                setIsLoading(false)
                dispatch(getResturantData(resp.data.cards))
                
            }
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <>
            {isLoading && <Loader />}
            {resturantByFoodItems !== null && 
                <div className='custom-margin overflow-hidden bg-white mt-4'>
                    <div className='flex justify-between mb-5 bg-white'>
                        <div>
                            <h1 className='text-3xl font-bold'>{resturantByFoodItems?.card?.card?.header?.title}</h1>
                        </div>
                        <Scroller refDetails={scrollContainerRef}/>
                    </div>
                    <div className='flex bg-transparent overflow-scroll scrollbar-hide'ref={scrollContainerRef}>
                        {resturantByFoodItems?.card?.card?.imageGridCards?.info?.map((item : any) => (
                            <div
                                key={item.id}>
                                <a className='cursor-pointer' href='as'>
                                    <div className='h-45 w-36 mr-4 '>
                                        <img 
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} 
                                            className='bg-inherit'
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <hr className='font-bold margin-hr'/>
                </div>
            }
        </>
    )
}

export default FoodByItem


