import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import AddItems from './Comps/AddItems';
import Home from './Comps/Home';
import Details from "./Comps/Details";
import Edit from './Comps/Edit';
import NewHome from './Comps/NewHome';
import './App.css'

export default function App(props) { 

  const [items, setItems] = useState([]);

  const [newItemsList, setnewItemsList] = useState([]);

  const [deleted, setDeleted]=useState([]);

  const itemsList = (list) => {
  setItems(list);
  setnewItemsList(list)
  setDeleted(list)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home items={items} itemsList={itemsList} deleted={deleted}/>
        </Route>

        <Route exact path="/form">
          <AddItems items = {items} itemsList={itemsList}/>
        </Route>

        <Route path="/details">
          <Details items={items} itemsList={itemsList} deleted={deleted}/>
        </Route>

        <Route path="/edit">
          <Edit itemsList={itemsList} newItemsList={newItemsList} items={items}/>
        </Route>

        <Route path="/newhome">
          <NewHome  itemsList={itemsList} newItemsList={newItemsList}/>
        </Route>

      </Switch>
    </Router>
  );
}


