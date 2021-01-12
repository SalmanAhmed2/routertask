import React from 'react';
import { BrowserRouter as Router,Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import '../App.css';


function Home(props) {

    let history = useHistory();
    console.log("newlist", props.newItemsList)
    return (
        <Router>
            <div className="HomePage">
            <h1>Home Page</h1>
            <Button
            to="/form" onClick={()=> history.push('/form')}
            variant="contained"
            color="primary">
                Go to Form
            </Button>
         
         <div>
             {props.items.length > 0 && props.items.map((item, index) => 
             <>
               
                    <h1 key={index.title}><Link to="/details" onClick={()=> history.push('/details')}>{item.title}</Link></h1>
                    <h2 key={index.date}><Link to="/details" onClick={()=> history.push('/details')}>{item.date}</Link></h2>
                    <p key={index.descrp}><Link to="/details" onClick={()=> history.push('/details')}>{item.descrp}</Link></p>
             </>)}
         </div>
            </div>
        </Router >
    )
}
export default Home;