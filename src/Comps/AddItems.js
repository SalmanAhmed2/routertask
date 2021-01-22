import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../App.css';

function AddItems(props) {

    let history = useHistory();

    const [values, setValues]= useState({});
    
    const handleSubmit=(event)=>{
        props.itemsList([...props.items, {...values, id:Math.floor(Math.random() * 100)}]);
        history.push('/');
        console.log(values,"values")
    }

    return (

    <div className="addItems">
       <h1>Create Task</h1>
        
        <Button className="backBTN" onClick={()=> history.push('/')}
        variant="contained"
        startIcon={<KeyboardBackspaceIcon />}> Back</Button>

        <div className="fields">

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
        InputLabelProps={{shrink: true}}
        className="inputDate"
        value={values.date} 
        onChange={(event) => {
        setValues({...values, date: event.target.value})}}/>

            <br />

        <TextField
        className="inputdes" value={values.descrp} type="text"
        onChange={(event) => {setValues({...values, descrp: event.target.value})}}
        id="outlined-multiline-static"
        label="Add Descriptions" multiline rows={5} variant="outlined"/>

       
        <input type="file" accept="image/*" onChange={(event)=>{setValues({...values, img: event.target.files[0]})} }
        />
        </div>

        <div className="formBTN">

        <Button variant="contained" color="primary" startIcon={<SaveIcon/>} 
        onClick={()=>handleSubmit()}>Submit</Button>
      </div>
    </div>

    );
}

export default AddItems;
