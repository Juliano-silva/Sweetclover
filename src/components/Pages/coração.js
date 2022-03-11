import style from './coração.module.css'
import Perfil from '../icones/perfil.png'
function clock(){
    
}
function coração(){
    return(
        <div id='msg' className={style.BoxC}>
            <h2>HOJE</h2>
            <img className={style.Perfico} src={Perfil} />
            <div className={style.PalaCo}><h1>Wigen <span>Começou a seguir você. 10h</span></h1></div>
            <h2>ESTE MêS</h2>
            <img className={style.Perfico} src={Perfil} />
            <div className={style.PalaCo}><h1>Tardoin <span>Começou a seguir você. 5 sem</span></h1></div>
            <img className={style.Perfico} src={Perfil} />
            <div className={style.PalaCo}><h1>Yolxis <span>Começou a seguir você. 4 sem</span></h1></div>
            <h2>ANTERIOR</h2>
            <img className={style.Perfico} src={Perfil} />
            <div className={style.PalaCo}><h1>Cuacoxo <span>Começou a seguir você. 1 ano</span></h1></div>
            <img className={style.Perfico} src={Perfil} />
            <div className={style.PalaCo}><h1>Zigawuy <span>Começou a seguir você. 1 ano</span></h1></div>
            <img className={style.Perfico} src={Perfil} />
            <div className={style.PalaCo}><h1>Cousgal <span>Começou a seguir você. 1 mês</span></h1></div>
        </div>
    )
}
export default coração