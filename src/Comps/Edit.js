import React, {useState} from 'react';
import firebase from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory, useLocation, useParams} from "react-router-dom";
import '../App.css';
const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
}));
function Edit(props) {
    let history = useHistory();
    const location = useLocation(); 
    const selectedItem = location.state.item;
    const [values, setValues]= useState(selectedItem);
    
    const handleUpdate=()=>{
        const newValue = props.items.map((item)=> (item.id === values.id ? values : item))
        
        firebase.database().ref('/')
        .set(newValue)

        // localStorage.setItem('myArray', JSON.stringify([...newValue]));   
        
        props.itemsList([...newValue])
    
        history.push('/');
}

    const classes = useStyles();
    let path = useParams();   
    return (
        <div className="addItems">
        <h1>Edit Form</h1>
        
        <div className="fields">

        <TextField id="standard-basic" label="Add Title" 
        type="text"
        className="inputTitle"
        value={values.title}
        onChange={(event) => setValues({...values, title: event.target.value})}/>
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
        
         <TextField
            className="inputdes"
            value={values.descrp} 
            type="text"
            onChange={(event) => {setValues({...values, descrp: event.target.value})}}
            id="outlined-multiline-static" label="Add Descriptions"
            multiline rows={5} variant="outlined"/>
            
            </div>
            <div className="formBTN">
            <input accept="image/*"
            onChange={(event)=>{setValues({...values, img: event.target.files[0]})} }
            className={classes.input} id="contained-button-file" multiple type="file"/>

            <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" 
            startIcon={<PhotoCamera/>}> Upload</Button></label>
            <Button
            onClick={handleUpdate}
             variant="contained"
             color="primary"
             startIcon={<UpdateIcon/>} >Update Value</Button>
            </div>
        </div>
    )
}
export default Edit
