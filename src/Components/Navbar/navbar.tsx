import React from "react";
import { Link, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {enableSignIn} from "../../Slices/signinSlice"

import { BsCart, BsBag } from "react-icons/bs";
import { IoPersonOutline, IoSearchOutline  } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
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
        <div className="h-20 top-0 py-0 px-5 left-0 right-0 fixed z-50 bg-white shadow-lg">
            <div className="relative h-20 my-0 mx-auto bg-white grow flex items-center h-20 max-w-7xl min-w-7xl">
                <img 
                    className="h-12 w-12 mr-8"
                    src={delivery} 
                    alt="homeIcon"
                    onClick={handleHomeNavigation}
                />
                <div className="flex relative max-w-xs ml-8 pr-6 pointer items-center">
                        <span className="relative border-black min-w-[30px] border-b-2 font-bold cursor-pointer hover:text-orange-500 hover:border-orange-500">Other</span>
                        <span className="border-black text-4xl font-normal cursor-pointer text-orange-500 "> <RiArrowDropDownLine /></span>
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
        </div>
    )
}

export default Navbar
