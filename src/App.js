import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import firebase from './Comps/firebase'
import AddItems from './Comps/AddItems';
import Home from './Comps/Home';
import Details from "./Comps/Details";
import Edit from './Comps/Edit';
import './App.css'

export default function App(props) { 

  const [items, setItems] = useState([]);

  const itemsList = (list) => {
  setItems(list);
  }

  useEffect(()=>{
  
  

    firebase.database().ref('/')
    .on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setItems(todoList);
    });
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home items={items} itemsList={itemsList}/>
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
      </Switch>
    </Router>
);
}


