import React, {useState} from 'react'
import roll from '../Assets/Icons/roll.jpg'
import LoginForm from '../Components/Login/loginForm'
import SingupForm from '../Components/Signup/singupForm'

const Login: React.FC<{}> = ()  => {
    const[isLoginEnabled, setIsLoginEnabled] = useState<boolean>(true)

  return (
    <div className='max-w-lg mt-4 p-12'>
        <div className='flex justify-between items-center'>
            {isLoginEnabled ?
            <div>
                <h1 className='text-3xl'> Login</h1>
                <p className='mt-2'> or <span className='text-orange-500 cursor-pointer' onClick={() => setIsLoginEnabled(false)}>create an account </span></p>
            </div> :
            <div>
                <h1 className='text-3xl'> Sign up</h1>
                <p className='mt-2'> or <span className='text-orange-500 cursor-pointer' onClick={() => setIsLoginEnabled(true)}>login to your account </span></p>
            </div>
            }
            <div className='mb-4'>
                <img className="w-24 h-24"src={roll} alt='roll' />
            </div>
        </div>
        <div>
                <p className='border-2 border-black w-8 mb-8 rounded-lg '></p>
            </div>
        <div>
            {isLoginEnabled ?
                <LoginForm /> : 
                <SingupForm />
            }
        </div>
    </div>
  )
}

export default Login