import React from 'react';

const Blogs = () => {
    return (
        <div>
        <article style={{backgroundColor:"red"}}>
            <h2>1. JavaScript vs Node JS:</h2>
             JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
        </article>
        <article style={{backgroundColor:"green",color:"white"}}>
           <h2> 2. `sql` vs `nosql` databases:</h2>
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
        </article>
        </div>
    );
};

export default Blogs;