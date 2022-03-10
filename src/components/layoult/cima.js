import styles from './cima.module.css'
import ico from '../icones/perfil.png'
import React from 'react';
import {Link} from 'react-router-dom';
function cima(){
    return(
      <div className={styles.cima}>
        <ul>
           <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li></nav>           
        </ul>
        <ul>
          <li className={styles.cimaLi}><p>Cuacoxo</p></li>
          <li className={styles.cimaLi}><p>Cousgal</p></li>
          <li className={styles.cimaLi}><p>Wigen</p></li>
          <li className={styles.cimaLi}><p>Tardoin</p></li>
          <li className={styles.cimaLi}><p>Zigawuy</p></li>
          <li className={styles.cimaLi}><p>Yolxis</p></li>
          <li className={styles.cimaLi}><p>Zid</p></li>
          <li className={styles.cimaLi}><p>Drogir</p></li>
        </ul>
      </div>
    )
}
export default cima