import React from 'react'
import MovieGenre from '../movies/MovieGenre'
import ListItems from './ListItems'

const GenreList = () => {
    return (
        <>
            {MovieGenre.genere.map( (item, index) => index <= 4 && (
                <div key={index} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <ListItems genreid={item.id} index_={index} />
                </div>
            ) )}
        </>
    )
}

export default GenreList