// import { AiFillHome,AiFillMessage,AiOutlineHeart,AiOutlineCompass } from "react-icons/ai";
// import { RiAddBoxLine } from "react-icons/ri";
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Pages/Home.js'
import Message from './components/Pages/Message.js'
import Header from "./components/Header/Cabeçalho.js"
import Bússola from './components/Pages/Bússola.js'
import Add from './components/Pages/add.js'
import Coração from './components/Pages/coração.js'
import Perfil from './components/Pages/Perfil.js'
import style from './App.module.css'
function App(){
  return(
    <Router>
       <Header/>
       <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/Message'><Message/></Route>
          <Route path='/Bússola'><Bússola/></Route>
          <Route path='/add'><Add/></Route>
          <Route path='/coração'><Coração/></Route>
          <Route path='/Perfil'><Perfil/></Route>
          </Switch>
          </Router>
  )
}
export default App