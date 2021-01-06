import React, { Component } from 'react';
import axios from 'axios'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
          user: null
        }
      }
    
      getAllPokemons() {
        fetch('http://localhost:4242/pokemons/001').then(response => {
          response.json().then(data => {
            this.setState({user: data })
          })
        })
      }
    
      componentDidMount() {
        this.getAllPokemons()
      }
    
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <p>
                Welcome to my Pokedex
              </p>
                User {JSON.stringify(this.state.user)}
            </header>
          </div>
        );
      }
}

export default Main