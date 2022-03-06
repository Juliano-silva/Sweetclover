import styles from './Perfil.module.css'
import img1 from '../img/1.gif'
import img2 from '../img/2.gif'
import img3 from '../img/3.gif'
import img4 from '../img/4.gif'
import img5 from '../img/5.gif'
import img6 from '../img/6.gif'
import ico from '../img/Pro.jpg'
import React from "react";
import {BiPencil} from "react-icons/bi";
import Api from '../API by name/Api'
import Nome from '../API by name/Nome'
function Bipen(){
    const apis = document.getElementById("Apit")
    apis.style.display="block"
}
function Perfil(){
    return(
        <div className={styles.container}>
            <div className={styles.API}>
            <div id='Apit' className={styles.Apit}>
            <Api/>
            </div>
            <Nome/>
            <BiPencil onClick={Bipen} className={styles.Pencil}/>
            </div>
            <img className={styles.imgi} src={ico} />
            <h3 className={styles.puse}>
            <span>0 publicações</span>
            <span>36 seguidores</span>
            <span>56 seguindo</span>
            </h3>
            <p className={styles.palavr}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate minima numquam, nisi sunt atque, voluptatibus libero perferendis quas rerum voluptate ipsam sed eaque aut earum dolore veniam facere assumenda ducimus quo expedita blanditiis fuga. Fuga, dolore, illum molestias repudiandae eum culpa earum inventore amet, quam nobis ab distinctio beatae?</p>
            <hr className={styles.hr} />
            <h2>SALVOS</h2>
            <div>
                <img className={styles.imgN} src={img1}/>
                <img className={styles.imgN} src={img2}/>
                <img className={styles.imgN} src={img3}/>
                <img className={styles.imgN} src={img4}/>
                <img className={styles.imgN} src={img5}/>
                <img className={styles.imgN} src={img6}/>
                <img className={styles.imgN} src={img1}/>
                <img className={styles.imgN} src={img2}/>
                <img className={styles.imgN} src={img3}/>
                <img className={styles.imgN} src={img4}/>
                <img className={styles.imgN} src={img5}/>
                <img className={styles.imgN} src={img6}/>
                <img className={styles.imgN} src={img1}/>
                <img className={styles.imgN} src={img2}/>
                <img className={styles.imgN} src={img3}/>
                <img className={styles.imgN} src={img4}/>
                <img className={styles.imgN} src={img5}/>
                <img className={styles.imgN} src={img6}/>
                <img className={styles.imgN} src={img5}/>
                <img className={styles.imgN} src={img6}/>
            </div>
        </div>
    )
}
export default Perfil