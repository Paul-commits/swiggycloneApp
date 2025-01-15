import React from 'react'

export default function LoginForm() {
  return (
    <>
        <form className='flex flex-col'>
            <input className="border-2 border-gray-400 h-16 mb-4" 
                type='textbox' 
                placeholder='Phone number'
            />
            <button className="h-12 bg-orange-500 font-semibold text-white"
                type="submit"> LOGIN</button>
            <span>By clicking on Login, I accept the Terms & Conditions & Privacy Policy.</span>
        </form>
    </>
  )
}
