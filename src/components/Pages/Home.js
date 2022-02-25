import Box from '../layoult/Box.js';
import Fixed from '../layoult/fixed.js'
import Cima from '../layoult/cima.js'
import Footer from "../Header e footer/Footer.js"
import styles from './Home.module.css'
function mouse(){
   const fi = document.getElementById("Fixed");
    fi.style.display="none"
}
function Home(){
    return(
        <div>
            <Cima/>
            <div className={styles.Coisas}>
            <Box/>
            <div id='Fixed'>
            <Fixed/>
            </div>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <hr onClick={mouse}/>
            <Box/>
            <Footer/>
            </div>
        </div>
    )
}
export default Home