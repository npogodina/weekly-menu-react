import React, {useState} from 'react';
import Dish from './Dish';

import PropTypes from 'prop-types';

const Dishes = (props) => {

  const [filter, setFilter] = useState("All");

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

  let componentsToRender = null;

  const applyFilter = (event) => {
    setFilter(event.target.name);
  };

  if(filter === "Breakfast"){
    componentsToRender = (
      <tbody> 
        {breakfastDishComponents}
      </tbody>
    );
  } else if(filter === "Lunch"){
    componentsToRender = (
      <tbody> 
        {lunchDishComponents}
      </tbody>
    );
  } else if(filter === "Dinner"){
    componentsToRender = (
      <tbody> 
        {dinnerDishComponents}
      </tbody>
    );
  } else {
    componentsToRender = (
      <tbody> 
        <h3 className="mt-3">Breakfasts:</h3>
        {breakfastDishComponents}
  
        <h3 className="mt-3">Lunches:</h3>
        {lunchDishComponents}
  
        <h3 className="mt-3">Dinners:</h3>
        {dinnerDishComponents}
      </tbody>
    );
  };

  return (
    <div className="container mt-5">
      <div className="mb-5">
        <button className="btn btn-success mr-2" name="Breakfast" onClick={applyFilter}>Breakfast</button>
        <button className="btn btn-success mr-2" name="Lunch" onClick={applyFilter}>Lunch</button>
        <button className="btn btn-success mr-2" name="Dinner" onClick={applyFilter}>Dinner</button>
        <button className="btn btn-primary mr-2" name="All" onClick={applyFilter}>All</button>
      </div>

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
          {componentsToRender}
      </table>
    </div>
  );
};

export default Dishes;