import React, { useState } from 'react'
import logo from '/Disney_Plus_logo.png'
import avatar1 from '/luca-avatar-WODP.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv  } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";


const Header = () => {

    const menuLink = [
        {
            menuName : "HOME",
            Icons : HiHome,
            link : "#"
        },{
            menuName : "SEARCH",
            Icons : HiMagnifyingGlass,
            link : "#"
        },{
            menuName : "WATCH LIST",
            Icons : HiPlus,
            link : "#"
        },{
            menuName : "ORIGINALS",
            Icons : HiStar,
            link : "#"
        },{
            menuName : "MOVIE",
            Icons : HiPlayCircle,
            link : "#"
        },{
            menuName : "SERIES",
            Icons : HiTv,
            link : "#"
        },
    ]

    const [toggleMenu , setToggleMenu] = useState(false);

    return (
        <header className='flex items-center  justify-between p-5 '>
            
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />

                {/* Mobile Nav */}
                <nav className='hidden md:flex gap-8 items-center '>
                    {/* Mapping to the menus */}
                    {menuLink.map( (menu, index) => {

                        const {menuName, Icons, link} = menu;
                        return(
                            <a 
                                key={index} 
                                href="" 
                                className='text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8'>

                                <Icons />
                                <h2>{menuName}</h2>
                            </a>
                        )
                    } )}
                </nav>

                {/* Desktop Nav */}
                <nav className='flex md:hidden gap-8 items-center '>
                    {/* Mapping to the menus */}
                    {menuLink.map( (menu, index)  => index < 3 && (
                        <a 
                            key={index} 
                            className='text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8'>
                            <menu.Icons />
                            <h2 className='hidden md:block'>{menu.menuName}</h2>
                        </a>
                    ) )}

                    {/* More menus */}
                    <div className='md:hidden' onClick={()=> setToggleMenu(prev => !prev)}>

                        <div className='text-white flex flex-col  gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8'>
                            <HiDotsVertical />
                            
                            {toggleMenu?
                            
                                <div className=' absolute mt-8 bg-[#121212] border border-gray-700 px-5 py-4 p-3'>

                                    {menuLink.map( (menu, index)  => index > 2 && (
                                        <a 
                                            key={index} 
                                            className='text-white mb-2 flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8'>
                                            <menu.Icons />
                                            <h2 className='block'>{menu.menuName}</h2>
                                        </a>
                                    ) )}

                                </div>

                                : null
                            }
                        </div>

                    </div>
                </nav>
            
            </div>

            <img src={avatar1} alt="Avatar" className='w-[40px] rounded-full' />

        </header>
    )
}

export default Header