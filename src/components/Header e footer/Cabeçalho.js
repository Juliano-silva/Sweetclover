import styles from './Cabeçalho.module.css';
import {Link} from 'react-router-dom';
import {AiFillHome,AiOutlineCompass,AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
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
      <div className={styles.Header}><h1>SweetClover</h1></div>
      {/* Colocar uma lupa antes do placeholder */}
      <form id="form" action="#" method="post">
        <input type="text" name="seach" id="seach" placeholder="Faça sua busca" required/>
        <div>
          {/* Add/Coração */}
          <label>
            <p id='msg' className={styles.BoxC}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis exercitationem, facilis omnis libero pariatur blanditiis officia amet inventore alias aliquid! Excepturi molestias, reiciendis modi cumque deleniti, perferendis dolore at eveniet provident unde mollitia delectus quasi, nulla accusantium ipsa reprehenderit a. Veritatis ratione ex ea sapiente! Nihil aut voluptatem fugit facere eaque dolorum doloremque perferendis ipsam, similique esse accusamus velit quis consequuntur sit eum est assumenda voluptate nemo cupiditate alias! Quam fugit doloribus deserunt delectus atque eligendi porro enim suscipit architecto corporis id deleniti facere aliquid, minus ut illum nihil culpa dolorem ipsum harum! Nobis libero magni veniam. Laboriosam, pariatur officiis.</p>
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
        <li><Link to="/Perfil"><img className={styles.ico} src={Ico}/></Link></li>
      </ul>
      </div>
      </div>
    )
  }
  export default Cabeçalho