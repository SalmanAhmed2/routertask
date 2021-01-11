import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";



function Home(props) {
    
    let history = useHistory();
    console.log(props.items)

    return (
        <Router>
            <div>
            <h2>Home Page</h2>
            <button to="/form" onClick={()=> history.push('/form')}>Goto Form</button>
         
         <div>
             {props.items.length > 0 && props.items.map((item, index) => 
             <>
             <h1>List</h1>
             <h1 key={index}>{item.title}</h1>
             <h2 key={index}>{item.date}</h2>
             <p key={index}>{item.descrp}</p>
             </>)}
         </div>
          
            </div>
        </Router >
    )
}
export default Home;