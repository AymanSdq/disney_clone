import React from 'react'

import disney from "/image/disney.png"
import marvel from "/image/marvel.png"
import natio from "/image/nationalG.png"
import starwar from "/image/starwar.png"
import pixar from "/image/pixar.png"

import disneyVideo from "/Video/disney.mp4"
import marvelVideo from "/Video/marvel.mp4"
import natioVideo from "/Video/national-geographic.mp4"
import starVideo from "/Video/star-wars.mp4"
import pixarVideo from "/Video/pixar.mp4"



const Production = () => {

    const listProduction = [
        { id : 1 , image : disney, video : disneyVideo},
        { id : 2 , image : marvel, video : marvelVideo},
        { id : 3 , image : natio, video : natioVideo},
        { id : 4 , image : starwar, video : starVideo},
        { id : 5 , image : pixar, video : pixarVideo}
    ]

    return (

        <div className='flex md:gap-5 p-2 px-5 md:px-16'>
            {listProduction.map( (list) => (
                <div key={list.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800 '>
                    <img src={list.image} alt="Production" className='w-full z-[1]' />
                    <video src={list.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
                </div>
            ) )}
        </div>

    )

}

export default Production