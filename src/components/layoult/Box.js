import styles from './Box.module.css'
import CEV from '../img/CEV.png';
import {BsThreeDots,BsSave2Fill,BsSave2} from "react-icons/bs"; 
import { MdOutlineMessage } from "react-icons/md";
import { AiFillHeart,AiOutlineSend,AiOutlineHeart } from "react-icons/ai";
function Box(){
    const url = "https://via.placeholder.com/800x700"
    return(
        <div className={styles.Caixa}>
          <img className={styles.ico} src={CEV} />
          <h1 className={styles.title}>Sambinha</h1>
          <button className={styles.IcoCima}><BsThreeDots/></button>
          <img src={url}/>
          <div className={styles.boxBaixo}>
            <button className={styles.buttonB}><AiOutlineHeart/></button>
            <button className={styles.buttonB}><MdOutlineMessage/></button>
            <button className={styles.buttonB}><AiOutlineSend/></button>
            <button className={styles.buttonB}><BsSave2/></button>
          </div>
          <h5>Curtido por lorem e outras lorem</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe fuga maxime, unde doloremque laborum! Porro laudantium quia beatae libero, sint, maxime impedit totam eligendi id animi facilis perferendis nostrum.</p>
          <button>mais</button>
          <p>ver todos os 1000 comentários</p>
          <p>há 1 dia</p>
      </div>
    )
}
export default Box