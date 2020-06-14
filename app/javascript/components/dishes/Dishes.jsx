import React, { useState, useEffect } from 'react';
import Dish from './Dish';

import PropTypes from 'prop-types';

const Dishes = (props) => {

  const makeComponents = (dishes) => {
    return dishes.map((dish) => {
      return (
          <Dish
            key={dish.id}
            id={dish.id}
            name={dish.name}
            servings={dish.servings}
            recipe={dish.recipe}
            meals={dish.meals}
          />
      );
    }); 
  };

  let breakfasts = [];
  let lunches = [];
  let dinners = [];
  let breakfastDishComponents = [];
  let lunchDishComponents = [];
  let dinnerDishComponents = [];

  if (props.dishList) {
    
    props.dishList.forEach((dish) => {
      dish.meals.forEach((meal) => {
        if(meal.id === 1){
          breakfasts.push(dish);
        };
        if(meal.id === 2){
          lunches.push(dish);
        };
        if(meal.id === 3){
          dinners.push(dish);
        };
      });
    });

    breakfastDishComponents = makeComponents(breakfasts);
    lunchDishComponents = makeComponents(lunches);
    dinnerDishComponents = makeComponents(dinners);
  };

  console.log(breakfasts);
  console.log(breakfastDishComponents);


  return (
    <div>
    <div className="container mt-5">
      <h1>The Dishes:</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Meals</th>
            <th scope="col">Servings</th>
            <th scope="col">Recipe?</th>
          </tr>
        </thead>
        <tbody>
          <h3 className="mt-3">Breakfasts:</h3>
          {breakfastDishComponents}

          <h3 className="mt-3">Lunches:</h3>
          {lunchDishComponents}

          <h3 className="mt-3">Dinners:</h3>
          {dinnerDishComponents}
        
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Dishes;