//Coração
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import styles from './Box.module.css'
import CEV from '../img/CEV.png';
import {BsThreeDots,BsSave2} from "react-icons/bs"; 
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineSend} from "react-icons/ai";
function Box(){
    const url = "https://via.placeholder.com/800x700"
    return(
        <div className={styles.Caixa}>
           <div style={{margin: 'auto',display: 'block',width: 'fit-content'}}>
          <img className={styles.ico} src={CEV} />
          <h1 className={styles.title}>Sambinha</h1>
          <button className={styles.IcoCima}><BsThreeDots/></button>
          <img src={url}/>
          <div className={styles.boxBaixo}>
            <div className={styles.buttonB}>
            <button><FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}/></button>
            <button ><MdOutlineMessage/></button>
            <button ><AiOutlineSend /></button>
            <button ><BsSave2 /></button>
          </div>
          </div>
          </div>
          <h5>Curtido por lorem e outras lorem</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe fuga maxime, unde doloremque laborum! Porro laudantium quia beatae libero, sint, maxime impedit totam eligendi id animi facilis perferendis nostrum.</p>
          <button>mais</button>
          <p>ver todos os 1000 comentários</p>
          <p>há 1 dia</p>
      </div>
    )
}
export default Box