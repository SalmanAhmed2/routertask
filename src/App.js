import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { useState } from 'react';
import AddItems from './Comps/AddItems';
import Home from './Comps/Home';
import Details from "./Comps/Details";
import Edit from './Comps/Edit';
import ImageViewer from './Comps/ImageViewer'
import './App.css'

export default function App(props) { 

  const [items, setItems] = useState([]);

  const itemsList = (list) => {
  setItems(list);
  }
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home items={items} itemsList={itemsList} />
        </Route>

        <Route exact path="/form">
          <AddItems items = {items} itemsList={itemsList}/>
        </Route>

        <Route path="/details/:id">
          <Details items={items} itemsList={itemsList}/>
        </Route>

        <Route path="/edit">
          <Edit itemsList={itemsList} items={items}/>
        </Route>
        <Route path="/imageviewer">
          <ImageViewer/>
        </Route>
      </Switch>
    </Router>
);
}


