import styles from './Perfil.module.css'
import All from './All_img'
import ico from '../img/Pro.jpg'
import React from "react";
import {BiPencil} from "react-icons/bi";
import Api from '../API by name/Api'
import Nome from '../API by name/Nome'
function MANOFUNC(){
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
             <BiPencil onClick={MANOFUNC}  className={styles.Penc}/>
            {/* icone do user */}
            <img className={styles.imgi} src={ico} />
            {/* User */}
            <div className={styles.API}>
            <div className={styles.TESTE}>
            <Nome/>
            </div>
            </div>
            {/* Seguindores */}
            <h3 className={styles.puse}>
            <span>0 publicações</span>
            <span>36 seguidores</span>
            <span>56 seguindo</span>
            </h3>
            {/* BIO */}
            <p className={styles.palavr}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate minima numquam, nisi sunt atque, voluptatibus libero perferendis quas rerum voluptate ipsam sed eaque aut earum dolore veniam facere assumenda ducimus quo expedita blanditiis fuga. Fuga, dolore, illum molestias repudiandae eum culpa earum inventore amet, quam nobis ab distinctio beatae?</p>
            <hr className={styles.hr} />
            <h2>SALVOS</h2>
            <All/>
            <br />
        </div>
    )
}
export default Perfil