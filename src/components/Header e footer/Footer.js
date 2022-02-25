import styles from  './Footer.module.css'
function btn(){
    const pala = document.getElementById("titu")
    pala.style.color="white"
}
function Footer(){
    return(
        <div className={styles.footer}>
            <h1 id='titu'>Footer</h1>
            <button onClick={btn}>as</button>
        </div>
    )
}
export default Footer