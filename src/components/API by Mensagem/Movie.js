import React,{useState} from 'react'
import style from './AddMovie.module.css'
import Nome from '../API by name/Nome'
const Movie = ({name}) => {
    return(
        <div id='Movie' className={style.Movie}>
            <p className={style.Class}><Nome/><span>: {name}</span></p>
        </div>
    );
};
export default Movie;