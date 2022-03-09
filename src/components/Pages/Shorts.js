import styles from './Shorts.module.css'
import sakura from '../img/Sakura.jpg'
import ico from '../icones/perfil.png'
function Shorts(){
    return(
        <div className={styles.CONTAINERS}>
            <div className={styles.Short}>
            <div className={styles.CimaSh}>
            <img src={ico} className={styles.iconSh}/>
                <h1 className={styles.h1S}>Cousgal</h1>
            </div>
                <img className={styles.ConterS} src={sakura}/>
                <div className={styles.textCont}> 
                <input type="text" className={styles.textS} />
                </div>
            </div>
            <div className={styles.Short}>
            <div className={styles.CimaSh}>
            <img src={ico} className={styles.iconSh}/>
                <h1 className={styles.h1S}>Yolxis</h1>
            </div>
                <img className={styles.ConterS} src={sakura}/>
                <div className={styles.textCont}> 
                <input type="text" className={styles.textS} />
                </div>
            </div>
            <div className={styles.Short}>
            <div className={styles.CimaSh}>
            <img src={ico} className={styles.iconSh}/>
                <h1 className={styles.h1S}>Zigawuy</h1>
            </div>
                <img className={styles.ConterS} src={sakura}/>
                <div className={styles.textCont}> 
                <input type="text" className={styles.textS} />
                </div>
            </div>
            <div className={styles.Short}>
            <div className={styles.CimaSh}>
            <img src={ico} className={styles.iconSh}/>
                <h1 className={styles.h1S}>Wigen</h1>
            </div>
                <img className={styles.ConterS} src={sakura}/>
                <div className={styles.textCont}> 
                <input type="text" className={styles.textS} />
                </div>
            </div>
            <div className={styles.Short}>
            <div className={styles.CimaSh}>
            <img src={ico} className={styles.iconSh}/>
                <h1 className={styles.h1S}>Tardoin</h1>
            </div>
                <img className={styles.ConterS} src={sakura}/>
                <div className={styles.textCont}> 
                <input type="text" className={styles.textS} />
                </div>
            </div>
        </div>
    )
}
export default Shorts