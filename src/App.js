import styles from './App.module.css'
function App(){
  function red(){
    const heading = document.createElement("nav");
    var heading_caixa = document.createElement("h1");
    var heading_text = document.createTextNode("aqui");
    heading.appendChild(heading_caixa);
    heading_caixa.appendChild(heading_text)
    document.body.appendChild(heading);
  }
  return(
  <div>
     <input type="button" onClick={red} value="+" />
  </div>
  )
}
export default App