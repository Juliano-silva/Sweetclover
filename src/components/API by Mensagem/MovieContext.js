import React,{useState,createContext} from 'react'
import MovieList from './MovieList';
import styles from './AddMovie.module.css'
export const MovieContext = createContext();
export const MovieProvider = props => {
    const[movies,setMovies] = useState([{}]);
    return(
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
        )
}