import React from 'react'
import { SuggestionsProps } from '../../Types/Interface'
    
const PopularCuisinesCard: React.FC<SuggestionsProps> = ({cuisinesData}) => {
    return (
        <div>
            {cuisinesData.map((item) => (
                <div>
                    <button className='flex'>
                        <div className='w-16 h-16'>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${item.cloudinaryId}`}/>
                        </div>
                        <div>
                            <p>{item.text}</p>
                            <p>{item.tagToDisplay}</p>
                        </div>
                    </button>
                </div>
            ))}
        </div>
      )
    }
    

export default PopularCuisinesCard