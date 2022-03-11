import styles from './Shorts.module.css'
import ico from '../icones/perfil.png'
import sakura from '../img/Sakura.jpg'
function ConteShorts(){
    return(
        <div className={styles.Short}>
        {/* Parte de cima */}
        <div className={styles.CimaSh}>
            {/* icone */}
            <img src={ico} className={styles.iconSh}/>
            {/* Nome */}
            <h1 className={styles.h1S}>John nobody</h1>
        </div>
        {/* Imagem de fundo */}
        <img className={styles.ConterS} src={sakura}/>
        {/* Input final */}
        <div className={styles.textCont}> 
        <input type="text" className={styles.textS} />
        </div>
    </div>
    )
}
export default ConteShorts