import React,{useState} from 'react';
import { BrowserRouter as Router, Switch,Link, useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { List } from '@material-ui/core';
import '../App.css';


function Details(props) {

    const history = useHistory();
    
    const handleEdit=(item)=>{
        history.push('/edit', {item});
    }

    const handleDelete =(item, index)=>{
        const arra =   props.items.filter((itemVal, id) =>  id !== index);
        props.itemsList(arra)

    }

    return (
     <Router>
            <div className="Details">
                <h1>Details Page</h1>
                <br/>
                <Button onClick={()=>history.push('/')}
                   variant="contained"
                     startIcon={<KeyboardBackspaceIcon />}> Back</Button>

           {props.items.map((item, index) => 
             <>
             <ul>
             <List key={index.title}>Title: {item.title}</List>
             <List key={index.date}>Date: {item.date}</List>
             <List key={index.descrp}>Descriptions: {item.descrp}</List>
             </ul>
            <div className="buttons">
                <Button
                className="editBtn"
                variant="contained"
                color="primary"
                startIcon={<CreateIcon />} 
                onClick={() => handleEdit(item)}>Edit</Button>
             
             <Button
                className="deleteBtn"
                onClick={()=>handleDelete (item, index)}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                    >
                    Delete
            </Button>
            </div>


             </>)}

        </div>
     </Router>
    )
}

export default Details
