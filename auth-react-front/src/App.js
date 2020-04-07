import React from 'react';

import './App.css';
import Secrets from "./components/Secrets"
import Login from "./components/Login"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null, 
      loginForm: {
        email: "", 
        password: ""
      },
      // create a piece of state to an empty array
      secrets: []

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
      .then(userJSON => {
        if(userJSON.error){
          //failure, exmpl of handling server errors
          alert("invalid credentials")
        } else {
          //sucess

        
        this.setState({
          currentUser: userJSON
          //tutorial shows an error with the code above and is fixed by userJSON.user, but my current code only works like this without errorss, adding .user, causes nothing to happen
        })
        }
      })
      .catch(console.log) // example of handling javascript errors
   }

   getSecrets = () => {
     fetch("http://localhost:3000/secrets")
      .then(resp => resp.json())
      .then(console.log)
    
   }

  render() {
    const {currentUser} =this.state 
    return (
   
    <div className="App">
      <h2>{currentUser ? `Logged in as ${currentUser.name}` : "Not logged in"} </h2>
      
      Welcome User (using user name)(will need state in this context, bc not using redux yet)(login form needed, built through components)
      Done through Login.js
      <Login 
        handleLoginFormChange={this.handleLoginFormChange}
        
        handleLoginFormSubmit={this.handleLoginFormSubmit}
        // adding this below makes these controlled components and are passed into Login components params
        email={this.state.loginForm.email}
        password={this.state.loginForm.password}
         />
      <button onClick={this.getSecrets}>Show User's Secrets</button>
      {/* will get secrets below from state, so add to state above */}
      <Secrets secrets={this.state.secrets} />
    </div>
    );
  }
}

export default App;
