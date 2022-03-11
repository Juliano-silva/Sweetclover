import styles from './Perfil.module.css'
import All from './All_img'
import ico from '../img/Pro.jpg'
import React from "react";
import {BiPencil} from "react-icons/bi";
import Api from '../API by name/Api'
import Nome from '../API by name/Nome'
function Bifunc(){
    const apis = document.getElementById("APIby")
    apis.style.display="block"
}
function Perfil(){
    return(
        <div className={styles.container}>
            {/* Aqui até */}
            {/* Caneta e Input */}
            <div className={styles.Apit} id="APIby">
            <Api/>
            </div>
            <div className={styles.Penc}  onClick={Bifunc}>
            <BiPencil />
            </div>
            {/* icone do user */}
            <img className={styles.imgi} src={ico} />
            {/* User */}
            <div className={styles.API}>
            <Nome />
            </div>
            {/* Seguindores */}
            <div className={styles.ComeP}>
            <h3 className={styles.puse}>
            <span>0 publicações</span>
            <span>36 seguidores</span>
            <span>56 seguindo</span>
            </h3>
            {/* BIO */}
            <p className={styles.palavr}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit corrupti nisi illo magni quod officia quidem earum error commodi id natus sed provident, odio animi fugit perferendis debitis doloribus.</p>
            </p>
            </div>
            {/* Aqui */}
            <hr className={styles.hr} />
            <h2>SALVOS</h2>
            <All/>
            <br />
        </div>
    )
}
export default Perfil