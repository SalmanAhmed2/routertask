import React,{useState} from 'react';
import '../App.css';
import { BrowserRouter as Router,useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Home(props) {
    let history = useHistory();
    const handleDelete =(item, index)=>{
      const delArra =   props.items.filter((itemVal, id) =>  id !== index);
        props.itemsList(delArra)
    }
    
    const handleEdit=(item)=>{
        history.push('/edit',{
          item
        })
    }
        const handleDetails=()=>{
        history.push('/details')
    }
    return (
    <Router>
        <div className="HomePage">
        <h1>Home Page</h1>

        <Button onClick={()=> history.push('/form')}
        variant="contained"
        color="primary">
          Create Task
          </Button>
          <div className="cardClass">
              
              {props.items.map((item, index)=>
              <>
              <Card onClick={() => history.push(`/details/${item.id}`)}>
                <CardContent>
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                </CardContent>
              </Card>
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
              </>
              )}
          </div>
         </div>
            
        </Router >
    )
}
export default Home;
