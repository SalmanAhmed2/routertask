import React, {useState} from 'react';
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Switch,Link, useHistory, useLocation } from "react-router-dom";
import '../App.css';
function Edit(props) {
    let history = useHistory();
    const location = useLocation();   
    const selectedItem = location.state.item;
    let [newItem, setNewItem]= useState(selectedItem);
    
    const handleUpdate=()=>{
        props.itemsList([{...newItem}])
        history.push('/');
      }

    return (
        <div className="editForm">
            <h1>Edit Form</h1>
            <TextField id="standard-basic" label="Add Title" 
            type="text"
            className="inputTitle"
            
            value={newItem.title}
            onChange={(event) => 
                setNewItem({newItem, title: event.target.value})}/>
            

            <input  placeholder="Add Date"
             type="date"
             className="inputDate"
             value={newItem.date}
             onChange={(event) => setNewItem({...newItem, date: event.target.value})}
             />
            
            <textarea type="text"
            className="inputdes"
             placeholder="Add Descriptions"
             value={newItem.descrp}
             onChange={(event) => setNewItem({...newItem, descrp: event.target.value})}/>
              <Button
              onClick={handleUpdate}
             variant="contained"
             color="primary"
             startIcon={<UpdateIcon/>} >Update Value</Button>
            
        </div>
    )
}

export default Edit
