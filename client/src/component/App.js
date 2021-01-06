import React,{ Component } from "react";
import logo from '../ressource/pokedex_logo.png'
import TopNav from './TopNav.js'
import SearchBar from './SearchBar.js'
import Main from './Main.js'
import './App.css'

class App extends Component {
  render(){
  return (
      <div className="App">
        <header>
        <TopNav />
        </header>
        <img src = {logo} className="pokelogo" alt='logo'/>
        <SearchBar />
        <Main />

        
        
      </div>
        
        
  );
}
}
export default App;
//<img src={logo} className="App-logo" alt="logo" />