import React from 'react';
import { BrowserRouter as Router, Switch,Link, useHistory } from "react-router-dom";



function Home(props) {

    let history = useHistory();
    return (
        <Router>
            <div>
            <h1>Home Page</h1>
            <button to="/form" onClick={()=> history.push('/form')}>Go to Form</button>
         
         <div>
             {props.items.length > 0 && props.items.map((item, index) => 
             <>
             <h1 key={index.title}><Link to="/details" onClick={()=> history.push('/details')}>{item.title}</Link></h1>
             <h2 key={index.date}><Link to="/details" onClick={()=> history.push('/details')}>{item.date}</Link></h2>
             <p key={index.descrp}><Link to="/details" onClick={()=> history.push('/details')}>{item.descrp}</Link></p>

             </>)}
         </div>
            </div>
        </Router >
    )
}
export default Home;