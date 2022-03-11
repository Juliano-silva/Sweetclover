import styles from './cima.module.css'
import ico from '../icones/perfil.png'
import React from 'react';
import {Link} from 'react-router-dom';
function cima(){
    return(
      <div className={styles.cima}>
        <ul>
          <div className={styles.cimaC}>
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Cuacoxo</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Cousgal</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Wigen</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Tardoin</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Zigawuy</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Yolxis</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Zid</p></nav>      
          <nav className={styles.navC}><li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li><p className={styles.cimaLi}>Drogir</p></nav>      
       </div>
        </ul>
      </div>
    )
}
export default cima