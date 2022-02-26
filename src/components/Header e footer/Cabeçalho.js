import styles from './Cabeçalho.module.css';
import Ico from '../img/Pro.jpg';
import {Link} from 'react-router-dom';
import {AiFillHome,AiOutlineCompass,AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import Add from '../Pages/add.js'
function double(){
  const botão = document.getElementById("adicionar")
  botão.style.display="block"
}
function des(){
  const botão = document.getElementById("adicionar")
  botão.style.display="none"
}
function Cabeçalho(){
    return(
      <div className={styles.Container}>
      <div className={styles.Header}>SweetClover</div>
      <form id="form" action="#" method="post">
        <input type="text" name="seach" id="seach" placeholder="Faça sua busca" required/>
        <button type="submit"><i>OK</i></button>
      </form>
      <ul>
        <li><Link to="/"><AiFillHome/></Link></li>
        <li><Link to="/Message"><MdOutlineMessage/></Link></li>
        <li><Link onClick={double}><GrAddCircle/></Link></li>
        <li><Link to="/Bússola"><AiOutlineCompass/></Link></li>
        <li><Link to="/coração"><AiOutlineHeart/></Link></li>
        <li><Link to="/Perfil"><img className={styles.ico} src={Ico}/></Link></li>
      </ul>
      <div id='adicionar' className={styles.Add}>
          <Add/>
          <button onClick={des}>Click</button>
          </div>
      </div>
    )
  }
  export default Cabeçalho