import React,{useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Switch,Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import '../App.css';
function Details(props) {

    const history = useHistory();

    const handleEdit=(item)=>{
        history.push('/edit', {
            item
        });
    }
    return (
     <Router>
            <div className="Details">
                <h1>Details Page</h1>
                <br/>
                <ArrowBackIcon onClick={()=> history.push('/')}/>

           {props.items.length > 0 && props.items.map((item, index) => 
             <>
             
             <h1 key={index.title}>Title: {item.title}</h1>
             
             <h2 key={index.date}>Date: {item.date}</h2>
             
             <p key={index.descrp}>Descriptions: {item.descrp}</p>
             
            <div className="buttons">
            <Button
             className="editBtn"
             variant="contained"
             color="primary"
             startIcon={<CreateIcon />} 
             onClick={() => handleEdit(item)}>Edit</Button>
             
             <Button
                className="deleteBtn"
                onClick={()=>history.push('/form')}
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
