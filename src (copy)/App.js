import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import AddItems from './Comps/AddItems';
import Home from './Comps/Home';



export default function App(props) { 

  const [items, setItems] = useState([]);

const itemsList = (list) => {
  setItems(list)
}
  
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home items={items}/>
        </Route>
        <Route exact path="/form">
          <AddItems itemsList = {itemsList}/>
        </Route>
        
      </Switch>
    </Router>
  );
}


