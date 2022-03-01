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
function checkMe(){
  var cb = document.getElementById("abc");
  var text = document.getElementById("msg");
  if(cb.checked==true){
      text.style.display="block";
  }else{
      text.style.display="none";
  }
}
function Cabeçalho(){
    return(
      <div id='COntainer' className={styles.Container}>
      <div className={styles.Header}>SweetClover</div>
      <form id="form" action="#" method="post">
        <input type="text" name="seach" id="seach" placeholder="Faça sua busca" required/>
        <button type="submit"><i>OK</i></button>
        <div>
          <p id='msg' className={styles.BoxC}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint nihil eveniet dolore asperiores labore earum dignissimos in necessitatibus sapiente possimus quos, non quae ducimus adipisci alias saepe facilis repellat repudiandae iusto eum quibusdam totam. Nostrum accusantium amet modi voluptates reiciendis cumque dignissimos dolores aut optio, quia error esse eveniet est porro soluta molestias vero, illum iure! Id repellendus cumque obcaecati tempore porro odit illum, nemo provident vel, vitae, molestias amet aspernatur animi unde consequatur atque vero? Labore dolorum dolorem earum asperiores qui illum est quidem at enim odio, ea architecto deserunt ipsa? Eum aliquam nesciunt ea incidunt tenetur facilis!</p>
        </div>
      </form>
      <div>
      <ul>
        <li><Link to="/"><AiFillHome/></Link></li>
        <li><Link to="/Message"><MdOutlineMessage/></Link></li>
        <li><Link onClick={double}><GrAddCircle/></Link></li>
        <li><Link to="/Bússola"><AiOutlineCompass/></Link></li>
        <li><Link to="/Coração"><input type="checkbox" checked id='abc' onClick={checkMe} className={styles.inputns}/><AiOutlineHeart/></Link></li>
        <li><Link to="/Perfil"><img className={styles.ico} src={Ico}/></Link></li>
      </ul>
      </div>
      </div>
    )
  }
  export default Cabeçalho