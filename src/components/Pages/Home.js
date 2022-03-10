import Box from '../layoult/Box.js';
import Fixed from '../layoult/fixed.js'
import Cima from '../layoult/cima.js'
import styles from './Home.module.css'
import Add from './add.js'
function des(){
    const botão = document.getElementById("adicionar")
    const fun = document.getElementById("corpo")
    const ml = document.querySelector("html")
    fun.style.filter="none"
    botão.style.display="none"
    ml.style.overflowY="auto"
}
function Home(){
    return(
        <div>
             <div id='adicionar' className={styles.Add}>
             <button className={styles.des} onClick={des}>Click</button>
                 <Add/>
            </div>
            <div id='corpo'>
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
            </div>
            </div>
    )
}
export default Home