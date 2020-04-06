import React from 'react';

// adding email and password to the end of params makes controlled component, args are then passed in to input fields below
const Login = ({handleLoginFormChange, handleLoginFormSubmit, email, password})=> {
   return(
       <div className="login">
           <form onSubmit={handleLoginFormSubmit}>
               <br/>
               <input type="text" name="email" placeholder="email" onChange={handleLoginFormChange} value={email}></input>
               <br/>
               <input type="password" name="password" placeholder="password" onChange={handleLoginFormChange} value={password}></input>
               <br/>
               <input type="submit" value="login"></input>
           </form>
        </div>
   )
}

export default Login