import styles from './Cabeçalho.module.css';
import {Link} from 'react-router-dom';
import {AiFillHome,AiOutlineCompass,AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import Ico from '../img/Pro.jpg'
function double(){
  const botão = document.getElementById("adicionar")
  const fun = document.getElementById("corpo")
  const ml = document.querySelector("html")
  fun.style.display="block"
  botão.style.display="inline-block"
  botão.style.position="fixed"
  ml.style.overflowY="hidden"
}
function Cabeçalho(){
    return(
      <div id='COntainer' className={styles.Container}>
      <div className={styles.Header}>SweetClover</div>
      <form id="form" action="#" method="post">
        <input type="text" name="seach" id="seach" placeholder="Faça sua busca" required/>
        <button type="submit"><i>OK</i></button>
      </form>
      <div>
      <ul>
        <li><Link to="/"><AiFillHome/></Link></li>
        <li><Link to="/Message"><MdOutlineMessage/></Link></li>
        <li><Link onClick={double}><GrAddCircle/></Link></li>
        <li><Link to="/Bússola"><AiOutlineCompass/></Link></li>
        <li><Link to="/Coração"><AiOutlineHeart/></Link></li>
        <li><Link to="/Perfil"><img className={styles.ico} src={Ico}/></Link></li>
      </ul>
      </div>
      </div>
    )
  }
  export default Cabeçalho