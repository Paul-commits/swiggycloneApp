import React, {useState} from 'react'

export default function SingupForm() {
    const [isReferralEnabled, setIsReferralEnabled] = useState<boolean>(false);
  return (
    <>
        <form className='flex flex-col'>
            <input className="border-2 border-gray-300 h-16" 
                type='textbox' 
                placeholder='Phone number'
            />            
            <input className="border-x-2 border-1 border-gray-300 h-16" 
                type='textbox' 
                placeholder='Name'
            />            
            <input className={`border-2 border-gray-300 h-16 ${!isReferralEnabled ? 'mb-6':''}`}
                type='textbox' 
                placeholder='Email'
            />
            {isReferralEnabled &&
            <input className="border-x-2 border-b-2 border-gray-300 h-16 mb-6" 
                type='textbox' 
                placeholder='Referral code'
            /> 
            }
            {
            !isReferralEnabled &&
                <p className='mb-6 text-blue-600 font-medium cursor-pointer' 
                onClick={() => setIsReferralEnabled(true)}>
                    Have a referral code ?
            </p>
            }
            <button className="h-12 bg-orange-500 font-semibold text-white"
                type="submit"> CONTINUE</button>
            <span>By creating an account, I accept the Terms & Conditions & Privacy Policy.</span>
        </form>
    </>
  )
}
