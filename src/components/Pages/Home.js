import Box from '../layoult/Box.js';
import Fixed from '../layoult/fixed.js'
import Cima from '../layoult/cima.js'
import Footer from "../Header e footer/Footer.js"
import styles from './Home.module.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Add from './add.js'
function mouseup(){
    const fix = document.getElementById("fixed");
    fix.style.display="block"
}
function mousedown(){
    const fix = document.getElementById("fixed");
    fix.style.display="none"
}
function Home(){
    return(
        <div>
            <div onMouseEnter={mouseup}>
            <Cima/>
            <div className={styles.Coisas}>
            <Box/>
            <div id='fixed'><Fixed/></div>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            </div>
            <div className={styles.mouse} onMouseEnter={mousedown}>
            <Footer/>
            </div>
            </div>
        </div>
    )
}
export default Home