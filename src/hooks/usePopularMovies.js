import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice"
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
   // Fetch data from TMDB API and update Store
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();       
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, [])
};

export default usePopularMovies;