import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useHistory } from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import '../App.css'
function AddItems(props) {

    let history = useHistory();
    
    const [values, setValues]= useState({title:'', date:'', descrp:''});
   
    const handleSubmit=()=>{
        props.itemsList([{...values}])
        history.push('/');
    }
  

    return (
    <Router>
        <div>
       <h1>Form</h1>
        <KeyboardBackspaceIcon to="/" onClick={()=> history.push('/') }/>

            <br />

        <input className="inputTitle" placeholder="Add Title" 
        value={values.title}
        onChange={(event) => {
        setValues({...values, title: event.target.value})
        }} />
            <br />

        <input className="inputDate" placeholder="Add Date" 
        value={values.date} 
        type="date"
        onChange={(event) => {
        setValues({...values, date: event.target.value})
        }} />

            <br />
        
        <textarea className="inputdes" placeholder="Add Descriptions" 
        value={values.descrp} 
        type="text"
        onChange={(event) => {setValues({...values, descrp: event.target.value})
        }}/>

            <br/>   
        <Button variant="contained" color="primary"
        startIcon={<SaveIcon/>} 
        onClick={handleSubmit}>
            Sumit
        </Button>
        </div>
        
    </Router>
        
    );
}

export default AddItems;
