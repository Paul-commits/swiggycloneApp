import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {setCuisineReset} from '../../../Slices/searchDataSlice'
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const SearchByPopularCuisines = () =>  {

  const dispatch = useDispatch()
  const[userDish, setUserDish] = useState("")
  const selectedDish = useSelector((state: any) => state.popularCuisinesData.selectedPopularCuisine.selectedDish)
  const selectedDish2 = useSelector((state: any) => state.popularCuisinesData.selectedPopularCuisine.selectedDish)

  console.log(selectedDish2, "selectedDish2")
  useEffect(() => {
    setUserDish(selectedDish)
  }, [selectedDish])


  const handleSearch =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(e.type === 'reset'){
      dispatch(setCuisineReset())
    }
  }

  return (
    <div className='top-20 pt-12 pb-2 z-50 sticky z-index-2 w-full left-0 bg-white'>
      <div className='w-[860px] h-12 overflow-hidden border border-gray-slate-5 mx-auto mb-2'>
        <form 
          onSubmit={handleSearch} onReset={handleSearch}
        >
          <div className="flex items-center h-12 w-full justify-center pr-3">
            <button className="px-3 py-3.5 font-semibold relative overflow-hidden inline-block leading-none outline-none">
              <RiArrowLeftSLine className='h-full text-2xl text-gray-500'/> 
            </button>
            <div className="flex-1 pr-3 min-w-0">
              <input className='w-full h-full font-medium text-l text-gray-500 border-none leading-6 focus:outline-none mx-4 bg-transparent' 
                type="textbox" 
                placeholder='Search for restaurants and food'
                value={userDish}
                />
            </div>
            <div>
                <button type= 'submit' className={`${selectedDish && 'hidden'}`} > 
                  <IoSearch className={`h-full text-2xl text-gray-500 mx-4`}/> 
                </button>
                <button type='reset' className={`${!selectedDish && 'hidden'}`}>
                  <RxCross1 className={`h-full text-2xl text-gray-500 mx-4`}/> 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchByPopularCuisines
