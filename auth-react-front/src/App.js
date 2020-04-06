import React from 'react';

import './App.css';
import Login from "./components/Login"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null, 

    }

  }
  render() { return (
    <div className="App">
      Welcome User (using user name)(will need state in this context, bc not using redux yet)(login form needed, built through components)
      Done through Login.js
      <Login />
    </div>
    );
  }
}

export default App;
