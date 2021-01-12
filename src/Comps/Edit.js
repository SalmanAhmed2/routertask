import React, {useState} from 'react';
import { BrowserRouter as Router, Switch,Link, useHistory, useLocation } from "react-router-dom";

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
        <div>
            <h1>Edit Form</h1>
            <input type="text"
            placeholder="Add Title"
            value={newItem.title}
            onChange={(event) => 
                setNewItem({newItem, title: event.target.value})}/>
            
            <input type="date" 
            placeholder="Add Date"
            value={newItem.date}
            onChange={(event) => setNewItem({...newItem, date: event.target.value})}/>
            
            <textarea type="text"
             placeholder="Add Descriptions"
             value={newItem.descrp}
             onChange={(event) => setNewItem({...newItem, descrp: event.target.value})}/>
            
            <button onClick={handleUpdate}>Update Value</button>
        </div>
    )
}

export default Edit
