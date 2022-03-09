import styles from './Perfil.module.css'
import All from './All_img'
import ico from '../img/Pro.jpg'
import React from "react";
import {BiPencil} from "react-icons/bi";
import Api from '../API by name/Api'
import Nome from '../API by name/Nome'
import ApiC from '../API by name/API by conteúdo/ApiC'
import Conteúdo from '../API by name/API by conteúdo/Conteúdo'
function Bifunc(){
    const apis = document.getElementById("APIby")
    apis.style.display="block"
}
function Perfil(){
    return(
        <div className={styles.container}>
            {/* Caneta */}
            <div className={styles.Apit} id="APIby">
            <Api/>
            </div>
            <div className={styles.Penc}>
            <BiPencil onClick={Bifunc} />    
            </div>      
            {/* icone do user */}
            <img className={styles.imgi} src={ico} />
            {/* User */}
            <div className={styles.API}>
            <Nome/>
            </div>
            {/* Seguindores */}
            <div className={styles.ComeP}>
            <h3 className={styles.puse}>
            <span>0 publicações</span>
            <span>36 seguidores</span>
            <span>56 seguindo</span>
            </h3>
            {/* BIO */}
            <p className={styles.palavr}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, inventore esse reprehenderit dolorum eum id soluta quidem vitae impedit omnis error numquam aliquam nam sed magnam ipsum at. Qui, iste.</p>
            {/* Conteúdo */}
            <ApiC/>
            </div>
            <hr className={styles.hr} />
            <h2>SALVOS</h2>
            <All/>
            <br />
        </div>
    )
}
export default Perfil