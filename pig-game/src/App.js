import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/Users")
    .then(response => response.json())
    .then(Users => this.setState({monsters: Users}))
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key = {monster.id}> {
            monster.name
          }</h1>)
        }
      </div>
    );
  }
}

export default App;
