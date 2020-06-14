import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Hello from "./Hello";
import Dishes from "./dishes/Dishes";
import Navbar from "./Navbar";
import DishPage from "./dishes/DishPage";
import NewDishForm from "./dishes/NewDishForm";

const API_DISHES_INDEX = "http://localhost:3000/api/dishes";

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

  const addDish = (dish) => {
    axios.post(API_DISHES_INDEX, dish)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [response.data, ...dishList];
        setDishList(updatedData);
        // setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        // setErrorMessage(error.message);
      });
  }

  const editDish = (editedDish) => {
    let url = "http://localhost:3000/api/dishes/" + editedDish.id;
    axios.patch(url, editedDish)
      .then((response) => {
        const editedDishList = [];

        dishList.forEach((dish) => {
          if (dish.id === editedDish.id) {
            editedDishList.push(response.data);
          } else {
            editedDishList.push(dish);
          }
        });
    
        setDishList(editedDishList);

        // setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        // setErrorMessage(error.message);
      });
  }

  return (
    <div>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <Switch>
          <Route exact path="/" render={() => ("Home!")} />
          <Route path="/hello" render={() => <Hello/>} />

          <Route exact path="/dishes" render={() => 
            <Dishes dishList = {dishList}/>
          } />
          
          <Route exact path="/dishes/new" render={() => 
            <NewDishForm addDishCallback={addDish}/>
          } />

          <Route exact path="/dishes/:id" render={() => 
            <DishPage dishList={dishList} editDishCallback={editDish}/>
          } />

        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
