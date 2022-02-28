import styles from './Perfil.module.css'
import img1 from '../img/1.gif'
import img2 from '../img/2.gif'
import img3 from '../img/3.gif'
import img4 from '../img/4.gif'
import img5 from '../img/5.gif'
import img6 from '../img/6.gif'
import ico from '../img/Pro.jpg'
function Perfil(){
    document.title = "ju.liano1841"
    return(
        <div>
            <title>Olá</title>
            <img src={ico} />
            <h1>ju.liano1841</h1>
            <h3>
            0 publicações
            36 seguidores
            56 seguindo
            </h3>
            <hr />
            <h2>SALVOS</h2>
            <div>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img6}/>
            </div>
        </div>
    )
}
export default Perfil