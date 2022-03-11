import styles from './Message.module.css'
import ico from '../icones/perfil.png'
import Nome from '../API by name/Nome'
import MovieList from '../API by Mensagem/MovieList';
import { MovieProvider } from '../API by Mensagem/MovieContext';
import AddMovie from '../API by Mensagem/AddMovie'
function Message(){
    return(
        <div>
            <div className={styles.chat}>
                {/* Linha */}
                <div className={styles.icons}>
                    {/* Name */}
                    <div className={styles.MessaNo}>
                    <Nome/>
                    </div>
                    <hr />
                    {/* Linha do lado */}
                    <div className={styles.lado}>
                    <img src={ico} />
                    <h1>Cuacoxo</h1>
                    <p>online agora</p>
                    </div>
                    <div className={styles.onli}>
                    <img src={ico} />
                    <h1>Cuacoxo</h1>
                    <p>online agora</p>
                    </div>
                    <div className={styles.ConteúMess}>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Cousgal</h1>
                    <p>online há 1 h</p>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Wigen</h1>
                    <p>online há 1 h</p>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Tardoin</h1>
                    <p>online há 1 h</p>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Zigawuy</h1>
                    <p>online há 1 h</p>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Yolxis</h1>
                    <p>online há 1 h</p>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Zid</h1>
                    <p>online há 1 h</p>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Drogir</h1>
                    <p>online há 1 h</p>
                    </div>
                </div>
                <div className={styles.inputs}>
                <MovieProvider>
                        <MovieList/>
                        <AddMovie/>
                    </MovieProvider>
                </div>
            </div>
        </div>
    )
}
export default Message