import React from 'react'
import { CgIcecream } from "react-icons/cg";

const Loader : React.FC<{}> = () =>  {
  return (
    <div className='bg-sky-950 h-72 w-full flex justify-center flex-col items-center text-white'>
       <div className="relative w-24 h-24 border-6 border-t-8 border-t-blue-500 rounded-full animate-spin">
       </div>
       <div className='absolute t-0 justify-center items-center mt-[-30px]'>
            <CgIcecream className='h-12 w-12'/>    
       </div>
        <h1 className='text-2xl'>
            Looking for great food near you...
        </h1>
    </div>
  )
}

export default Loader