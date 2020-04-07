import React from 'react';

// currently an error is generated, secrets.map is not a function
// has to do with, for react, not deconstructing props first
//next commit will have solution
//2 options: 1 = to change secrets before first arrow to props, then change secrets.map to props.secrets.map
//2= change secrets before arrow to {(secrets)}, and leave secrets.map the same


//to explain further, curly braces in React: wrap functions, object literals, used to grab properties from objects in deconstruction as in current example
//and use them in JSX, like erb tags in ruby i.e. run this code in ruby, run this code in javascript

const Secrets = ( {secrets} ) => {
    const secretsJSX = secrets.map(s => <p>{s.content}</p>)
    return(
        <div className="Secrets">
             {secretsJSX}
         
         </div>
    )
 }
 
 export default Secrets