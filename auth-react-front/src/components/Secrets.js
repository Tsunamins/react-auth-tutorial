import React from 'react';

// currently an error is generated, secrets.map is not a function
// has to do with, for react, not deconstructing props first
//next commit will have solution
//2 options: 1 = to change secrets before first arrow to props, then change secrets.map to props.secrets.map
//2= change secrets before arrow to {(secrets)}, and leave secrets.map the same

const Secrets = ( {secrets} ) => {
    const secretsJSX = secrets.map(s => <p>{s.content}</p>)
    return(
        <div className="Secrets">
             {secretsJSX}
         
         </div>
    )
 }
 
 export default Secrets