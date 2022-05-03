import React from 'react';

const Blogs = () => {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
        <article style={{backgroundColor:"red"}}>
            <h2>1. JavaScript vs Node JS:</h2>
             JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
        </article>
        <article style={{backgroundColor:"green",color:"white"}}>
           <h2> 2. `sql` vs `nosql` databases:</h2>
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
        </article>
        <article style={{backgroundColor:"pink",color:"black"}}>
           <h2> 3. How JSON Web Token(JWT) authentication works?</h2>
           JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
        </article>
        </div>
    );
};

export default Blogs;