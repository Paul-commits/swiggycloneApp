import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const SearchByPopularCuisines = () =>  {

  const selectedDish = useSelector((state: any) => state.searchData.popularCuisinesData.query)
  console.log(selectedDish)

  return (
    <div className='top-20 pt-12 pb-2 z-50 sticky z-index-2 w-full left-0 bg-white'>
      <div className='w-[860px] h-12 overflow-hidden border border-gray-slate-5 mx-auto mb-2'>
        <form>
          <div className="flex items-center h-12 w-full justify-center pr-3">
            <button className="px-3 py-3.5 font-semibold relative overflow-hidden inline-block leading-none outline-none">
              <RiArrowLeftSLine className='h-full text-2xl text-gray-500'/> 
            </button>
            <div className="flex-1 pr-3 min-w-0">
              <input className='w-full h-full font-medium text-l text-gray-500 border-none leading-6 focus:outline-none mx-4 bg-transparent' 
                type="textbox" 
                placeholder='Search for restaurants and food'
                value={selectedDish }
                />
            </div>
          <div>
            <button className={`${selectedDish && 'hidden'}`}onClick={(e) => e.preventDefault()}> 
                <IoSearch className={`h-full text-2xl text-gray-500 mx-4`}/> 
              </button>
            <button className={`${!selectedDish && 'hidden'}`}onClick={(e) => e.preventDefault()}>
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
