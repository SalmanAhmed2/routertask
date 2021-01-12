import React,{useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Switch,Link, useHistory } from "react-router-dom";


function Details(props) {

    const history = useHistory();

    const handleEdit=(item)=>{
        history.push('/edit', {
            item
        });
    }
    return (
     <Router>
            <div>
                <h1>Details Page</h1>
                <br/>
                <ArrowBackIcon onClick={()=> history.push('/')}/>

           {props.items.length > 0 && props.items.map((item, index) => 
             <>
             
             <h1 key={index.title}>Title: {item.title}</h1>
             
             <h2 key={index.date}>Date: {item.date}</h2>
             
             <p key={index.descrp}>Descriptions: {item.descrp}</p>
             
             <button onClick={() => handleEdit(item)}>Edit</button>
             
             <button onClick={()=>history.push('/form')}>Delete</button>
             

             </>)}

        </div>
     </Router>
    )
}

export default Details
