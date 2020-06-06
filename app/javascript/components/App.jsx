import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Hello from "./Hello"
import Dishes from "./Dishes"

const API_DISHES_INDEX = "http://localhost:3000/api/dishes"

const App = () => {

  const [dishList, setDishList] = useState([]);
  
  useEffect(() => {
    axios.get(API_DISHES_INDEX)
      .then((response) => {
        const apiDishList = response.data;
        setDishList(apiDishList);
      })
      .catch((error) => {
        // Still need to handle errors
        // setErrorMessage(error.message);
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => ("Home!")} />
        <Route path="/hello" render={() => <Hello/>} />
        <Route path="/dishes" render={() => 
          <Dishes dishList = {dishList}/>
        } />
      </Switch> 
    </BrowserRouter>
  );
}

export default App
