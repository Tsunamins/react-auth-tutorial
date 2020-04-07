import React from 'react';

// currently an error is generated, secrets.map is not a function
// has to do with, for react, not deconstructing props first
//next commit will have solution

const Secrets = secrets => {
    const secretsJSX = secrets.map(s => <p>{s.content}</p>)
    return(
        <div className="Secrets">
            return {secretsJSX}
         
         </div>
    )
 }
 
 export default Secrets