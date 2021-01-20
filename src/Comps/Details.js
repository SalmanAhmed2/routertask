import React,{useState} from 'react';
import { BrowserRouter as Router, Switch,Link, useHistory, useParams } from "react-router-dom";
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
                <div><div>
                  {props.items.filter(person => person.id == path.id).map(filteredPerson => (
                <>
                     <h2>
                    Title:
                      {filteredPerson.title}
                    </h2>
                    <h2>
                        Date:
                        {filteredPerson.date}
                    </h2>
                    <h2>
                        Description:
                        {filteredPerson.descrp}
                    </h2>
                </>
  ))}
</div>



          </div>
                     
            </div>
    )
}

export default Details
