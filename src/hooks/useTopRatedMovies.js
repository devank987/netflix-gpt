import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {addTopRatedMovies } from "../utils/moviesSlice"
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
   // Fetch data from TMDB API and update Store
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();       
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;