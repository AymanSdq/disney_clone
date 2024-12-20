import axios from "axios";


const tmdbUrl = "https://api.themoviedb.org/3"
const apiKey = "=806828002e012311a5680dd946f0d653"


// Fetch trending Movies
const trendMovies = axios.get(tmdbUrl+"/trending/all/day?api_key"+apiKey)

const movieGenre = "https://api.themoviedb.org/3/discover/movie?api_key=806828002e012311a5680dd946f0d653"

const callMovieGenre = (id)=>
    axios.get(movieGenre+"&with_genres="+id)

export default {
    callMovieGenre,
    trendMovies
    
}

