import styles from './fixed.module.css'
import url from '../img/Pro.jpg'
import url1 from '../img/CEV.png'
import Nome from '../API by name/Nome'
function Seguir(){
    const seg = document.getElementById("seguindo")
    const uir = document.getElementById("seguir")
    seg.style.display="block"
    uir.style.display="none"
}
function Seguindo(){
    const seg = document.getElementById("seguindo")
    const uir = document.getElementById("seguir")
    seg.style.display="none"
    uir.style.display="block"
}
function fixed(){
    return(
        <div className={styles.fixed}>
            <img src={url} className={styles.imgB}/>
            <h1 className={styles.h1}><Nome/></h1>
            <h6>Sugestões para você</h6>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={url1} className={styles.url1}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>nome</h4>
                <button className={styles.seguir}>
                    <p id='seguir' onClick={Seguir}>Seguir</p>
                    <p id='seguindo' onClick={Seguindo}>Seguindo</p>
                </button>
                <p className={styles.lorem}>Lorem ipsum, dolor sit amet nam aut. Aliquid voluptatibus </p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={url1} className={styles.url1}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>nome</h4>
                <button className={styles.seguir}>
                    <p id='seguir' onClick={Seguir}>Seguir</p>
                    <p id='seguindo' onClick={Seguindo}>Seguindo</p>
                </button>
                <p className={styles.lorem}>Lorem ipsum, dolor sit amet nam aut. Aliquid voluptatibus </p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={url1} className={styles.url1}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>nome</h4>
                <button className={styles.seguir}>
                    <p id='seguir' onClick={Seguir}>Seguir</p>
                    <p id='seguindo' onClick={Seguindo}>Seguindo</p>
                </button>
                <p className={styles.lorem}>Lorem ipsum, dolor sit amet nam aut. Aliquid voluptatibus </p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={url1} className={styles.url1}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>nome</h4>
                <button className={styles.seguir}>
                    <p id='seguir' onClick={Seguir}>Seguir</p>
                    <p id='seguindo' onClick={Seguindo}>Seguindo</p>
                </button>
                <p className={styles.lorem}>Lorem ipsum, dolor sit amet nam aut. Aliquid voluptatibus </p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={url1} className={styles.url1}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>nome</h4>
                <button className={styles.seguir}>
                    <p id='seguir' onClick={Seguir}>Seguir</p>
                    <p id='seguindo' onClick={Seguindo}>Seguindo</p>
                </button>
                <p className={styles.lorem}>Lorem ipsum, dolor sit amet nam aut. Aliquid voluptatibus </p>
                </div>
            </div>
            </div>
            <div className={styles.tudo}>
            <div className={styles.icoB}>
                <img src={url1} className={styles.url1}/>
                <div className={styles.ContentB}>
                <h4 className={styles.h4}>nome</h4>
                <button className={styles.seguir}>
                    <p id='seguir' onClick={Seguir}>Seguir</p>
                    <p id='seguindo' onClick={Seguindo}>Seguindo</p>
                </button>
                <p className={styles.lorem}>Lorem ipsum, dolor sit amet nam aut. Aliquid voluptatibus </p>
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