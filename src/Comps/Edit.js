import React, {useState} from 'react';
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";
import '../App.css';
function Edit(props) {
    let history = useHistory();
    const location = useLocation(); 
    const selectedItem = location.state.item;
    const [values, setValues]= useState(selectedItem);


    const handleUpdate=()=>{
    console.log(props.items,"OLD")
    const newValue = props.items.map((item)=> (item.id === values.id ? values : item))
    console.log(newValue, "new items")
    props.itemsList([...newValue])
    history.push('/details/'+values.id);
    
}
    
    return (
        <div className="editForm">
            <h1>Edit Form</h1>
            <TextField id="standard-basic" label="Add Title" 
            type="text"
            className="inputTitle"
            value={values.title}
            onChange={(event) => 
                setValues({...values, title: event.target.value})}/>
                
            <input  placeholder="Add Date"
             type="date"
             className="inputDate"
             value={values.date}
             onChange={(event) => setValues({...values, date: event.target.value})}/>

            <textarea type="text"
            className="inputdes"
             placeholder="Add Descriptions"
             value={values.descrp}
             onChange={(event) => setValues({...values, descrp: event.target.value})}/>
              <Button
              onClick={handleUpdate}
             variant="contained"
             color="primary"
             startIcon={<UpdateIcon/>} >Update Value</Button>
            
        </div>
    )
}
export default Edit
