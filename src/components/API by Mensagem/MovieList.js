import React,{useState,useContext} from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';
import styles from './BoxMovie.module.css'
const MovieList = () => {
    const [movies,setMovies]= useContext(MovieContext)
        return(
            <div id='propps' className={styles.props}>
                 {movies.map(movie => (
                <Movie name={movie.name} key={movie.id}/>
            ))}
            </div>
        );
}
export default MovieList