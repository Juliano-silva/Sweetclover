import styles from './Cabeçalho.module.css';
import {Link} from 'react-router-dom';
import {AiFillHome,AiOutlineCompass,AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import Coração from '../Pages/coração'
import Ico from '../img/Pro.jpg'
function double(){
  const botão = document.getElementById("adicionar")
  const ml = document.querySelector("html")
  botão.style.display="inline-block"
  botão.style.position="fixed"
  ml.style.overflowY="hidden"
}
  function checkMe(){
    var cb = document.getElementById("Add");
    var text = document.getElementById("msg");
    if(cb.checked==true){
        text.style.display="block";
        text.style.position="fixed";
    }else{
        text.style.display="none";
    }
}
function Cabeçalho(){
    return(
      <div id='COntainer' className={styles.Container}>
        <div className={styles.HeaderC}>
        <h1  className={styles.Header}>SweetClover</h1>
      {/* Colocar uma lupa antes do placeholder */}
      <form id="form" action="#" method="post" className={styles.FormCa}>
        <input type="text" name="seach" id="seach" placeholder="Faça sua busca" required/>
        <div>
          {/* Add/Coração */}
          <label>
              <Coração/>
          </label>
        </div>
      </form>
      {/* Icones */}
      <div className={styles.icone1}>
      <ul>
        <li><Link to="/"><AiFillHome/></Link></li>
        <li><Link to="/Message"><MdOutlineMessage/></Link></li>
        <li><Link onClick={double}><GrAddCircle/></Link></li>
        <li><Link to="/Bússola"><AiOutlineCompass/></Link></li>
        <label><input type="checkbox" className={styles.checkME} id="Add" onClick={checkMe}/><li className={styles.heart}><AiOutlineHeart/></li></label>
        <li className={styles.user}><Link to="/Perfil"><img className={styles.ico}  src={Ico}/></Link></li>
      </ul>
      </div>
      </div>
        </div>
    )
  }
  export default Cabeçalho