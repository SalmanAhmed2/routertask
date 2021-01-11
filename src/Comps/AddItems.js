import React, { useState } from 'react';
import {useHistory } from "react-router-dom";
import SendIcon from '@material-ui/icons/Send';
import '../App.css'
function AddItems(props) {

    let history = useHistory();

    const [values, setValues]= useState({title:'', date:'', descrp:''});

    const handleSubmit=()=>{
        props.itemsList([{...values}])
        history.push('/')
    }
  

    return (
        <div>

            <h1>Form</h1>

            <button to="/" onClick={()=> history.push('/') }>Back</button>
            
            <br />
            <br />
            
            <input className="inputTitle" placeholder="Add Title" value={values.title}
                onChange={(event) => {
                    setValues({...values, title: event.target.value})
                }}
            />
            
            <br />

            <input className="inputDate" placeholder="Add Date" value={values.date} type="date"
                onChange={(event) => {
                    setValues({...values, date: event.target.value})
                }}
            />

            <br />
            <textarea className="inputdes" placeholder="Add Descriptions" value={values.descrp} type="text"
                onChange={(event) => {
                    setValues({...values, descrp: event.target.value})
                }}
            />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            
            
        </div>

    );
}

export default AddItems;
