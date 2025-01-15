import React from "react";
import { Link, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {enableSignIn} from "../../Slices/signinSlice"

import { BsCart, BsBag } from "react-icons/bs";
import { IoPersonOutline, IoSearchOutline  } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { CiDiscount1 } from "react-icons/ci";
import delivery from "../../Assets/Icons/delivery.png"

import "./navbar.css"

const Navbar : React.FC<{}> = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHomeNavigation = () => {
        navigate("/resturants")
    }

    return(
        <div className="h-20 flex items-center max-w-screen-xl mx-auto">
            <div className="grow flex items-center">
                <img 
                    className="h-12 w-12 mr-8"
                    src={delivery} 
                    alt="homeIcon"
                    onClick={handleHomeNavigation}
                />
                <p className="border-black border-b-2 font-medium cursor-pointer hover:text-orange-500 hover:border-orange-500">Other</p>
            </div>
            <nav className="flex grow justify-end">
                <ul className="w-4/5 flex justify-between">
                    <li className="navbar-li-style"> 
                        <div>
                            <Link 
                                className="link-style" 
                                to="/corporate">
                                <BsBag />
                                <span className="px-1 ">Corporate</span>
                            </Link>
                        </div>
                    </li>
                    <li className="navbar-li-style"> 
                        <div>
                            <Link 
                                className="link-style" 
                                to="/search"> 
                                <IoSearchOutline />
                                <span className="px-1">Search</span>
                            </Link>
                        </div>
                    </li>
                    <li className="navbar-li-style"> 
                        <div>
                            <Link 
                                className="link-style"  
                                to="/offers"> 
                                <CiDiscount1 />
                                <span className="px-1">Offers</span>
                            </Link>
                        </div>
                    </li>
                    <li className="navbar-li-style">  
                        <div>
                            <Link 
                                className="link-style"  
                                to="/help"> 
                                <FiHelpCircle />
                                <span className="px-1">Help</span>
                            </Link>
                        </div>
                    </li>
                    <li className="navbar-li-style"> 
                        <div>
                            <Link 
                                className="link-style"  
                                to="/signIn" 
                                onClick={() => dispatch(enableSignIn())}> 
                                <IoPersonOutline />
                                <span className="px-1">Sign In</span>
                            </Link>
                        </div> 
                    </li>
                    <li className="navbar-li-style"> 
                        <div>
                            <Link 
                                className="link-style"  
                                to="/cart"> 
                                <BsCart />
                                <span className="px-1">Cart</span>
                            </Link>
                        </div>
                    </li>
                </ul>
             </nav>
        </div>
    )
}

export default Navbar
