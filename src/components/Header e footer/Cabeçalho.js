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
        text.style.border="1px solid red";  
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
      <form id="form" action="#" method="post">
        <input type="text" name="seach" id="seach" placeholder="Faça sua busca" required/>
        <div>
          {/* Add/Coração */}
          <label>
            <div id='msg' className={styles.BoxC}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusamus doloribus sequi obcaecati, ea numquam quas autem corrupti inventore beatae nisi architecto voluptatem cum consequatur non sed, porro rem veritatis necessitatibus! Cumque voluptatum qui quaerat praesentium in harum nisi officia hic ab sunt totam sequi eos minima, architecto earum sapiente iste sit, nihil tempora provident quidem soluta incidunt voluptates. Nostrum accusamus laudantium neque illum eos quidem fugit veniam magni molestiae nobis repellat aliquid assumenda placeat doloremque sint, deleniti veritatis labore, animi nam praesentium. Recusandae qui, commodi, officia dolorem autem tenetur neque labore enim quisquam, corporis facere maiores adipisci delectus molestiae!</p>
            </div>
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