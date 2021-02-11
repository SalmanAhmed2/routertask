import React, {useState} from 'react';
import firebase from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory, useLocation} from "react-router-dom";
import '../App.css';
const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
}));
function Edit(props) {
    let history = useHistory();
    let storage = firebase.storage();
    const location = useLocation(); 
    const selectedItem = location.state.item;

    const [values, setValues]= useState(selectedItem);
    let [image, setImage]=useState(null);

    const handleChangeImage=(e)=>{
      if(e.target.files[0]){
        setImage(e.target.files[0]);
      }
    }
    
    const handleUpdate=()=>{
  
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
               let newValue = props.items.map((item)=> (item.id === values.id ? values: item))
               let newURL = newValue.filter((item)=> (item.url === url ?  item : item.url  = url ))

               props.itemsList(newValue)
               console.log("newvalues", )
              firebase.database().ref("task").child(values.id)
              .set(values)
            })
        }
      )
    
        history.push('/');
}

    const classes = useStyles();  
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
            // {setValues({...values, img: URL.createObjectURL(event.target.files[0])})}
            onChange={handleChangeImage}
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
