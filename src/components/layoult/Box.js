import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import styles from './Box.module.css'
import ico from '../icones/perfil.png'
import {BsThreeDots} from "react-icons/bs"; 
import { MdOutlineMessage } from "react-icons/md";
import Url from '../img/React js.jpg'
import Nome from '../API by name/Nome'
import MovieList from '../API by Mensagem/MovieList';
import { MovieProvider } from '../API by Mensagem/MovieContext';
import AddMovie from '../API by Mensagem/AddMovie'
function text(){
  const comen = document.getElementById("comentário")
}
function Box(){
    return(
        <div className={styles.Caixa}><div>
          <div className={styles.Box}>
          <img className={styles.ico} src={ico} />
          <h1>Sambinha</h1>
          <button><BsThreeDots/></button>
          <img className={styles.ico1} src={Url}/>
          </div>
          <div className={styles.boxBaixo}>
            <button><FormControlLabel className={styles.check} control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}/></button>
            <button onClick={text}>
              <MdOutlineMessage/>
              </button>
          </div>
          <div className={styles.ParteMB}>
          <h5>Curtido por lorem e outras lorem</h5>
          <p id='comentário'><Nome/>:
          <MovieProvider>
            <AddMovie/>
            </MovieProvider>
            </p>
          </div>
          </div>
      </div>
    )
}
export default Box