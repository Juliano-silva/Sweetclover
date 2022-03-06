import styles from './Message.module.css'
import url from '../img/Pro.jpg'
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