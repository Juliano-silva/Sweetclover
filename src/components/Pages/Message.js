import styles from './Message.module.css'
import url from '../img/Pro.jpg'
function Message(){
    return(
        <div>
            <div className={styles.chat}>
                <div className={styles.icons}>
                    <h1>ju.liano1841</h1>
                    <hr />
                    <hr />
                    <img src={url} />
                    <img src={url} />
                    <img src={url} />
                    <img src={url} />
                    <img src={url} />
                    <img src={url} />
                    <img src={url} />
                    <img src={url} />
                </div>
                <div className={styles.inputs}>
                    <input type="text" placeholder='Escreva algo aqui'/>
                </div>
            </div>
        </div>
    )
}
export default Message