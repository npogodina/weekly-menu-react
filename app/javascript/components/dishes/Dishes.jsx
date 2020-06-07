import React, { useState, useEffect } from 'react';
import Dish from './Dish';
// import './App.css';

// const API_DISHES_INDEX = "http://localhost:3000/api/dishes"

import PropTypes from 'prop-types';

const Dishes = (props) => {

  const dishComponents = props.dishList.map((dish, i) => {
    return (
      
        <Dish
          key={dish.id}
          id={dish.id}
          name={dish.name}
          servings={dish.servings}
          meal={dish.meal}
          recipe={dish.recipe}
        />
      
    );
  });

  return (
    <div className="container mt-5">
      <h1>The Dishes:</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Meal</th>
            <th scope="col">Servings</th>
            <th scope="col">Recipe?</th>
          </tr>
        </thead>
        <tbody>
        
          {dishComponents}
        
        </tbody>
      </table>
    </div>
  );
};

export default Dishes;