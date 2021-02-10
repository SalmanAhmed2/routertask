import React, { useState} from 'react';
import '../App.css';
import firebase from './firebase'
import {useHistory} from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
  }));

function AddItems(props) {
    let history = useHistory();
    let storage = firebase.storage();
    
    let [values, setValues]= useState({});
    let [image, setImage]=useState(null);

    const handleChangeImage=(e)=>{
      if(e.target.files[0]){
        setImage(e.target.files[0]);
      }
    }

    const handleSubmit=()=>{
      //  localStorage.setItem('myArray', JSON.stringify([...props.items, {...values}]));

      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error=>{
          console.log(error);
        },
        ()=>{
          storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url =>{
            firebase.database().ref("/")
            .set([...props.items,{...values, url}])
            props.itemsList([...props.items, {...values, id:Math.floor(Math.random() * 100),url}]);
          })
        }
      )
      history.push('/');
    }
    
    const classes = useStyles();
    return (

    <div className="addItems">
       <h1>Create Task</h1>
        
        <Button className="backBTN" onClick={()=> history.push('/')}
        variant="contained" startIcon={<KeyboardBackspaceIcon />}> Back
        </Button>

        <div className="fields">
        <TextField id="standard-basic" label="Add Title" required
        className="inputTitle" value={values.title}
        onChange={(event) => {setValues({...values, title: event.target.value})}}/>
        
        <br />

        <TextField
        className="inputDate"
        id="date" required
        label="Add Date"
        type="date"
        InputLabelProps={{shrink: true}}
        className="inputDate"
        value={values.date} 
        onChange={(event) => {
        setValues({...values, date: event.target.value})}}/>

            <br />

        <TextField
        className="inputdes" value={values.descrp} type="text" required
        onChange={(event) => {setValues({...values, descrp: event.target.value})}}
        id="outlined-multiline-static"
        label="Add Descriptions" multiline rows={5} variant="outlined"/>
    </div>

      <div className="formBTN">
      <input accept="image/*" type="file" required
      onChange={handleChangeImage}
      className={classes.input} id="contained-button-file" multiple/>
     <label htmlFor="contained-button-file">
         <Button variant="contained" color="primary" component="span" startIcon={<PhotoCamera/>}>
           Upload
        </Button>
      </label>
        <Button variant="contained" color="primary" startIcon={<SaveIcon/>} 
        onClick={()=>handleSubmit()}>Submit</Button>
      </div>
    </div>

    );
}

export default AddItems;
