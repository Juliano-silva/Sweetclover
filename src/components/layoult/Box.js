import styles from './Box.module.css'
function Box(){
    const url = "https://via.placeholder.com/800x700"
    return(
        <div className={styles.Caixa}>
        <h1>lorem</h1>
          <img src={url}/>
          <br />
          <a href="#">seilá</a>
          <p>Alguma coisa</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique consectetur natus! Reiciendis, officiis deserunt eos tenetur animi eum placeat harum aliquam consequatur asperiores porro, adipisci quaerat ipsa unde illo.</p>
      </div>
    )
}
export default Box