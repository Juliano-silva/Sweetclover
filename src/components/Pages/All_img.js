import img1 from '../img/1.jpg'
import img2 from '../img/2.gif'
import img3 from '../img/3.gif'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.gif'
import img7 from '../img/7.jpg'
import img8 from '../img/8.gif'
import img9 from '../img/9.jpg'
import img10 from '../img/10.jpg'
import styles from './All_img.module.css'
function All_img(){
    return(
        <div className={styles.BoxInst}>
        <img className={styles.imgInst} src={img1}/>
        <img className={styles.imgInst} src={img2}/>
        <img className={styles.imgInst} src={img3}/>
        <img className={styles.imgInst} src={img4}/>
        <img className={styles.imgInst} src={img5}/>
        <img className={styles.imgInst} src={img6}/>
        <img className={styles.imgInst} src={img7}/>
        <img className={styles.imgInst} src={img8}/>
        <img className={styles.imgInst} src={img4}/>
        <img className={styles.imgInst} src={img6}/>
        <img className={styles.imgInst} src={img1}/>
        <img className={styles.imgInst} src={img2}/>
        <img className={styles.imgInst} src={img9}/>
        <img className={styles.imgInst} src={img10}/>
        <img className={styles.imgInst} src={img1}/>
    </div>
    )
}
export default All_img