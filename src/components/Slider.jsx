import React, { useEffect, useRef, useState } from 'react'
import Gapi from '../services/Gapi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


const imageUrlPath = "https://image.tmdb.org/t/p/original"
const scrollWindowSize = window.innerWidth;

const Slider = () => {

    // useState to save the movie list
    const [trendMovieList, setTrendMovieList] = useState([])

    const refElement = useRef()

    // Function to get the Fetch api code and get result
    const trendingMovies = () => {
        Gapi.trendMovies.then(resp => {
                setTrendMovieList(resp.data.results)
        })
    }

    useEffect( () => {
        trendingMovies()

    }, [] )


    const sliderLeft = (event) => {
        event.scrollLeft += scrollWindowSize-110
    }

    const sliderRight = (event) => {
        event.scrollRight -= scrollWindowSize-110
    }


    return (
        <div>  

            <HiChevronLeft
                onClick={() => sliderRight(refElement.current)}
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' />
            <HiChevronRight 
                onClick={() => sliderLeft(refElement.current)}
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={refElement}>
                {trendMovieList.map( (movie , index) => (
                    <img
                        key={index}
                        src={imageUrlPath+movie.backdrop_path} 
                        alt="movie img" 
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ) )}
            </div>

        </div>
    )
}

export default Slider