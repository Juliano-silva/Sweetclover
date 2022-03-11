import Box from '../layoult/Box.js';
import Fixed from '../layoult/fixed.js'
import Cima from '../layoult/cima.js'
import styles from './Home.module.css'
import Add from './add.js'
// botão do add
function des(){
    const botão = document.getElementById("adicionar")
    const fun = document.getElementById("corpo")
    const ml = document.querySelector("html")
    const fix = document.getElementById("fixed")
    fix.style.display="block"
    fun.style.filter="none"
    botão.style.display="none"
    ml.style.overflowY="auto"
}
function Home(){
    return(
        <div>
            {/* Botão de fechar o Add */}
             <div id='adicionar' className={styles.Add}>
             <button className={styles.des} onClick={des}>x</button>
                 <Add/>
            </div>
            {/* Boxs */}
            <div id='corpo'>
            <Cima/>
            <div className={styles.Coisas}>
            <Box/>
            <br />
            {/* Fixed */}
            <div id='fixed'><Fixed/></div>
            <Box/>
            <br />
            <Box/>
            <br />
            <Box/>
            <br />
            <Box/>
            <br />
            </div>
            </div>
            </div>
    )
}
export default Home