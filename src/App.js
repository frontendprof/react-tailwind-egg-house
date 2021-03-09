import React, {useState,useEffect} from "react";
import {Switch,Route} from "react-router-dom";
import Dropdown from "./components/Dropdown";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";

const App=()=> {

  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>786 && isOpen){
        setIsOpen(false)
      }
    };
    window.addEventListener("resize",hideMenu);

    return()=>{
      window.removeEventListener("resize",hideMenu)
    }

    
  })


  return (
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
