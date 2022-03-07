import styles from './cima.module.css'
import ico from '../icones/perfil.png'
import React from 'react';
import {Link} from 'react-router-dom';
function cima(){
    return(
      <div className={styles.cima}>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={ico} /></Link></li>
      </div>
    )
}
export default cima