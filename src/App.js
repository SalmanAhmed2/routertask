import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import AddItems from './Comps/AddItems';
import Home from './Comps/Home';
import Details from "./Comps/Details";



export default function App(props) { 

  const [items, setItems] = useState([]);
  const [detailItems, setDetailItems] = useState([]);

const itemsList = (list) => {
  setItems(list);
}
console.log(detailItems,"detailItems")
  
  
  return (
    <Router>

      <Switch>
        <Route exact path="/">
        <Home items={items}/>
        </Route>

        <Route exact path="/form">
          <AddItems itemsList = {itemsList}/>
        </Route>

        <Route path="/details">
          <Details items={items}/>
        </Route>
      </Switch>
    </Router>
  );
}


