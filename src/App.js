import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Pages/Home.js'
import Message from './components/Pages/Message.js'
import Header from "./components/Header e footer/Cabeçalho.js"
import Bússola from './components/Pages/Bússola.js'
import Perfil from './components/Pages/Perfil.js'
import Shorts from './components/Pages/Shorts.js'
import style from './App.module.css'
function App(){
    return(
    <Router>
      <Header/>
      <Switch>
        <div className={style.down}>
        <Route exact path='/'><Home/></Route>
        <Route path='/Message'><Message/></Route> 
        <Route path='/Bússola'><Bússola/></Route>
        <Route path='/Perfil'><Perfil/></Route>
        <Route path='/Shorts'><Shorts/></Route>
        </div>
        </Switch>
      </Router>
    )
  }
export default App