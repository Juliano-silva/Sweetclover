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
                <div className={styles.icons}>
                    <Nome/>
                    <hr />
                    <div className={styles.lado}>
                    <img src={ico} />
                    <h1>Cuacoxo</h1>
                    </div>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Cuacoxo</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Cousgal</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Wigen</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Tardoin</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Zigawuy</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Yolxis</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Zid</h1>
                    <img src={ico} />
                    <h1 className={styles.Nomes}>Drogir</h1>
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