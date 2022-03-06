import React,{useState,useContext} from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';
import styles from './AddMovie.module.css'
const MovieList = () => {
    const [movies,setMovies]= useContext(MovieContext)
        return(
            <div className={styles.props}>
                 {movies.map(movie => (
                <Movie name={movie.name} key={movie.id}/>
            ))}
            </div>
        );
}
export default MovieList