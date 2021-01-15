import React,{useState} from 'react';
import { BrowserRouter as Router,Link, useHistory, useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import '../App.css';

function NewHome(props) {
    let history = useHistory();

    const handleDelete=(index)=>{
        // props.items.length > 0 ? props.items.filter((items, id) => id !== index) 
        // : props.items(index)
    }    
        const handleEdit=(item)=>{
        history.push('/edit', {
            item
        })
    }

    return (
    <Router>
        <div className="HomePage">
        <h1>Home Page</h1>
        <Button
      to="/form" onClick={()=> history.push('/form')}
      variant="contained"
      color="primary">
              Go to Form
          </Button>
  <ul>
      {props.newItemsList.map((item, index) =>
          <>  
        <li key={index}><Link to="/details" onClick={()=> history.push('/details')}>{item.title}</Link></li>
        <li key={index}><Link to="/details" onClick={()=> history.push('/details')}>{item.date}</Link></li>
        <li key={index}><Link to="/details" onClick={()=> history.push('/details')}>{item.descrp}</Link></li>

        <li className="editBtn">
            <Button 
                    variant="contained"
                    color="primary"
                    startIcon={<CreateIcon />}
                    onClick={()=>handleEdit(item)}>Edit</Button></li>
             
        <li className="deleteBtn">
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}>Delete</Button></li>
    </>
)
} 


    </ul>    
         </div>
            
        </Router >
    )
}
export default NewHome;
