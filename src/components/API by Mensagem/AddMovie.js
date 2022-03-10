import React,{useState,useContext} from 'react';
import { MovieContext } from './MovieContext';
import styles from './AddMovie.module.css'
const AddMovie = () =>{
    const [name,setName] = useState('');
    const [movie,setMovie] = useContext(MovieContext);
    const updateName = (e) => {
        const Movi = document.getElementById("Movie")
        setName(e.target.value);
    }
    //Isso é o que faz gerar mais mensagem
    const addMovie = e => {
        e.preventDefault();
        setMovie(prevMovies => [...prevMovies,{name: name}])
    }
    return(
        <form onSubmit={addMovie} className={styles.form}>
            <input className={styles.name} type="text" name="name" value={name} onChange={updateName} />
        </form>
    )
}
export default AddMovie