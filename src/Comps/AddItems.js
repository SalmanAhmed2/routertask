import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import '../App.css'
import TextField from '@material-ui/core/TextField';

function AddItems(props) {

    let history = useHistory();
    
    const [values, setValues]= useState({});

    const handleSubmit=()=>{
        props.itemsList([...props.items, {...values, id:Math.floor(Math.random() * 100)}]);
        history.push('/');
    }

    return (

    <div className="addItems">

       <h1>Form</h1>
        
        <Button onClick={()=> history.push('/')}
        variant="contained"
        startIcon={<KeyboardBackspaceIcon />}> Back</Button>
            <br />
        <TextField id="standard-basic" label="Add Title" 
            className="inputTitle" 
        value={values.title}
        onChange={(event) => {
        setValues({...values, title: event.target.value})
        }}/>
            <br />
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
        }}
      />

            <br />
            <TextField
            className="inputdes"
            value={values.descrp} 
            type="text"
            onChange={(event) => {setValues({...values, descrp: event.target.value})}}
            id="outlined-multiline-static"
            label="Add Descriptions"
            multiline
            rows={5}
            variant="outlined"
        />

            <br/>
        <Button variant="contained" color="primary"
        startIcon={<SaveIcon/>} 
        onClick={()=>handleSubmit()}>Submit</Button>
        </div>
        

        
    );
}

export default AddItems;
