import React,{useState} from 'react';
import '../App.css';
import { BrowserRouter as Router,Link, useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { List } from '@material-ui/core';

function Home(props) {

    let history = useHistory();
    const handleDelete =(item, index)=>{
      const delArra =   props.items.filter((itemVal, id) =>  id !== index);
        props.itemsList(delArra)
    }
    
    const handleEdit=(item)=>{
        history.push('/edit',{item})
    }

    return (
    <Router>
        <div className="HomePage">
        <h1>Home Page</h1>

        <Button onClick={()=> history.push('/form')}
        variant="contained"
        color="primary">
          Go to Form
          </Button>
          <div>
              {props.items.map((item, index)=>
              <>
              <ul>
                  <List key={index.title}>
                      <Link onClick={()=>history.push("/details")}>{item.title}</Link>
                  </List>
                  <List key={index.date}>
                      <Link onClick={()=>history.push("/details")}>{item.date}</Link>
                  </List>
                  <List key={index.descrp}>
                      <Link onClick={()=>history.push("/details")}>{item.descrp}</Link>
                  </List>
                  <div className="buttons">
                <Button
                className="editBtn"
                variant="contained"
                color="primary"
                startIcon={<CreateIcon />} 
                onClick={() => handleEdit(item)}>Edit</Button>
             
             <Button
                className="deleteBtn"
                onClick={()=>handleDelete(item, index)}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}>
                    Delete
            </Button>

            </div>
              </ul>
              </>
              )}
          </div>
         </div>
            
        </Router >
    )
}
export default Home;
