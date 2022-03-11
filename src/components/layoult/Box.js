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
import MovieList from '../API by Mensagem/MovieList'
import { MovieProvider } from '../API by Mensagem/MovieContext';
import AddMovie from '../API by Mensagem/AddMovie'
function MdOutlin1e(){
  const pro = document.getElementById("props")
  const corpo1 = document.querySelector("body")
  pro.style.display="none"
  corpo1.style.display="none"
}
function Box(){
    return(
      // Parte de cima
        <div className={styles.Caixa}><div>
          <div className={styles.Box}>
            <div className={styles.boxCima}>
            <nav className={styles.navB}><img className={styles.iconB} src={ico} /></nav>        
          <h1>Sambinha</h1>
          <button><BsThreeDots/></button>
            </div>
          {/* imagem do react */}
          <img className={styles.imagemB} src={Url}/>
          </div>
          {/* Parte de baixo */}
          <div className={styles.boxBaixo}>
            <button><FormControlLabel className={styles.check} control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}/></button>
            <button>
              <MdOutlineMessage className={styles.MdOut} onClick={MdOutlin1e}/>
              </button>
          <div className={styles.ParteMB}>
          <h5>Curtido por <span>Cuacoxo</span> e outras 100 pessoas </h5>
          <div>
          <div className={styles.comentáriosB}>
          <MovieProvider>
            <MovieList/>
            <div className={styles.AddMoviese}>
            <AddMovie/>
            </div>
          </MovieProvider>
          </div>
          </div>
            </div>
          </div>
          </div>
      </div>
    )
}
export default Box