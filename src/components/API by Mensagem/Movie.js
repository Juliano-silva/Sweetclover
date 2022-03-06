import React,{useState} from 'react'
import style from './AddMovie.module.css'
import Nome from '../API by name/Nome'
const Movie = ({name}) => {
    return(
        <div className={style.Movie}>
            <p className={style.Class}><Nome/>:{name}</p>
        </div>
    );
};
export default Movie;