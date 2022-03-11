import styles from './fixed.module.css'
import url from '../img/Pro.jpg'
import ico from '../icones/perfil.png'
import Nome from '../API by name/Nome'
// Botão de seguir
function Seguir(){
    const seg = document.getElementById("seguindo")
    const uir = document.getElementById("seguir")
    seg.style.display="block"
    uir.style.display="none"
}
// Botão de seguindo
function Seguindo(){
    const seg = document.getElementById("seguindo")
    const uir = document.getElementById("seguir")
    seg.style.display="none"
    uir.style.display="block"
}
function fixed(){
    return(
        <div id='fixed' className={styles.fixed}>
            <img src={url} className={styles.imgB}/>
            <h1 className={styles.h1}><Nome/></h1>
            <p>JULIANO</p>            
            <h6>Sugestões para você</h6>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={ico} className={styles.url}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>Cuacoxo</h4>
                    <button className={styles.seguir} id='seguir' onClick={Seguir}>seguir</button>
                    <button id='seguindo' onClick={Seguindo} className={styles.seg}>seguindo</button>
                <p className={styles.lorem}>Seguido(a) por Sambinha</p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={ico} className={styles.url}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>Cousgal</h4>
                
                <p className={styles.lorem}>Seguido(a) por Sambinha</p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={ico} className={styles.url}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>Wigen</h4>
                
                <p className={styles.lorem}>Seguido(a) por Sambinha</p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={ico} className={styles.url}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>Tardoin</h4>
                
                <p className={styles.lorem}>Seguido(a) por Sambinha</p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={ico} className={styles.url}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>Zigawuy</h4>
               
                <p className={styles.lorem}>Seguido(a) por Sambinha</p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={ico} className={styles.url}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>Yolxis</h4>
                
                <p className={styles.lorem}>Seguido(a) por Sambinha</p>
                </div>
            </div>
            </div>
            <div className={styles.baixo}>
                <h1>
                © 2022 SweetClover FROM JSA
                </h1>
            </div>
       </div>
    )
}
export default fixed