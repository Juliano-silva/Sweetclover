import styles from './cima.module.css'
import CEV from '../img/CEV.png';
import React from 'react';
import {Link} from 'react-router-dom';
function cima(){
    return(
      <div className={styles.cima}>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
          <li><Link to="/Shorts"><img className={styles.icons} src={CEV} /></Link></li>
      </div>
    )
}
export default cima