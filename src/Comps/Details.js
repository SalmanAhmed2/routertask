import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { BrowserRouter as Router, Switch,Link, useHistory } from "react-router-dom";

function Details(props) {

    const history = useHistory();
    // console.log(detailitems, "items")
    return (
     <Router>
            <div>
                <h1>Details Page</h1>
                <br/>
                <br/>
                <button onClick={()=> history.push('/')}> Back</button>

           {props.items.length > 0 && props.items.map((item, index) => 
             <>
             <h1 key={index.title}>Title: {item.title}</h1>
             <h2 key={index.date}>Date: {item.date}</h2>
             <p key={index.descrp}>Descriptions: {item.descrp}</p>
             </>)}
        </div>
     </Router>
    )
}

export default Details
