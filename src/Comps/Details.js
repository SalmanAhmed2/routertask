import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import '../App.css';


function Details(props) {
    
    const history = useHistory();
    let path = useParams();

    return (
            <div className="Details">
                <h1>Details Page</h1>
                <br/>
                <Button onClick={()=>history.push('/')}
                   variant="contained"
                     startIcon={<KeyboardBackspaceIcon />}>
                    Back
                </Button>
                <div>
                {props.items.filter(item => item.id == path.id).map(filtereditem => (
                <>
                     <h2>
                    Title :
                      {filtereditem.title}
                    </h2>
                    <h2>
                        Date :
                        {filtereditem.date}
                    </h2>
                    <h2>
                        Description :
                        {filtereditem.descrp}
                    </h2>
                {/* <img src={(URL.createObjectURL(filtereditem.img))} width="400" height="300"/>  */}
                   
                     </>
                ))}

                </div>
                     
            </div>
    )
}

export default Details
