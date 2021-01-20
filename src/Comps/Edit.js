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
    history.push('/');
    
}
    
    return (
        <div>
            <h1>Edit Form</h1>
            
            <TextField id="standard-basic" label="Add Title" 
            type="text"
            className="inputTitle"
            value={values.title}
            onChange={(event) => 
                setValues({...values, title: event.target.value})}/>

                <br/>
                
        <TextField
        className="inputDate"
        id="date"
        label="Add Date"
        type="date"
    
        InputLabelProps={{
          shrink: true,
        }}
        className="inputDate" 
        value={values.date} 
        onChange={(event) => {
        setValues({...values, date: event.target.value})
        }} />
            <br/>
         <TextField
            className="inputdes"
            value={values.descrp} 
            type="text"
            onChange={(event) => {setValues({...values, descrp: event.target.value})}}
            id="outlined-multiline-static"
            label="Add Descriptions"
            multiline
            rows={5}
            variant="outlined"/>
              <br/>
            <Button
              onClick={handleUpdate}
             variant="contained"
             color="primary"
             startIcon={<UpdateIcon/>} >Update Value</Button>
            
        </div>
    )
}
export default Edit
