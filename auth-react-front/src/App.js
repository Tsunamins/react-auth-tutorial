import React from 'react';

import './App.css';
import Login from "./components/Login"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null, 
      loginForm: {
        email: "", 
        password: ""
      }

    }
  }

  handleLoginFormChange = event => {
    const { name, value } = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value

      }

    })
  }

  handleLoginFormSubmit = event => {
    event.preventDefault()
    const userInfo = this.state.loginForm
    const headers = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch("http://localhost:3000/login", headers)
      .then(resp => resp.json())
      .then(console.log)
      .catch(console.log)
    
     

  }

  render() { return (
    <div className="App">
      Welcome User (using user name)(will need state in this context, bc not using redux yet)(login form needed, built through components)
      Done through Login.js
      <Login 
        handleLoginFormChange={this.handleLoginFormChange}
        
        handleLoginFormSubmit={this.handleLoginFormSubmit}
        // adding this below makes these controlled components and are passed into Login components params
        email={this.state.loginForm.email}
        password={this.state.loginForm.password}
         />
    </div>
    );
  }
}

export default App;
