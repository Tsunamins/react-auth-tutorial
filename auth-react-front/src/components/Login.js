import React from 'react';

const Login = ()=> {
   return(
       <div className="login">
           <form>
               <br/>
               <input type="text" name="email" placeholder="email"></input>
               <br/>
               <input type="text" name="password" placeholder="password"></input>
               <br/>
               <input type="submit" value="login"></input>
           </form>
        </div>
   )
}

export default Login