import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Switch,Link, useHistory } from "react-router-dom";


function NewUpdated(props) {
    let history = useHistory();
    const handleEdit=(list)=>{
        history.push('/edit');
    }
    return (
        <Router>
        <div>
            <h1>Updated Page</h1>
            <br/>
            <ArrowBackIcon onClick={()=> history.push('/')}/>

       {props.items.length > 0 && props.items.map((item, index) => 
         <>
         
         <h1 key={index.title}>Title: {item.title}</h1>
         
         <h2 key={index.date}>Date: {item.date}</h2>
         
         <p key={index.descrp}>Descriptions: {item.descrp}</p>
         
         <button onClick={handleEdit}>Edit</button>
         
         <button onClick={()=>history.push('/')}>Delete</button>

         </>)}

    </div>
 </Router>
    )
}

export default NewUpdated
