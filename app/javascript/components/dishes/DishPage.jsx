import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import PropTypes from 'prop-types';


const DishPage = (props) => {

  let {id} = useParams();
  id = Number(id);
  
  let dish = props.dishList.find((i) => {
    return i.id === id
  })

  console.log(id);
  console.log(props);
  console.log(dish);

  const meals = []
  if (dish) {
    dish.meals.forEach(meal => {
      meals.push(meal.name);
    });
  }

  return (
    <div className="container mt-5">

      <div className="jumbotron mx-auto" style={{width: "50%"}}>
        <h1 className="text-center"> {dish ? dish.name : null}</h1>  
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">Servings: {dish? dish.servings : null}</li>
          <li className="list-group-item">Meals: {meals.join(", ")} </li>
          <li className="list-group-item">Recipe: {dish? dish.recipe : null}</li>
        </ul> 
      </div>
      
      <h3 className="text-center">Ingredients</h3>
    </div>
  );
};

export default DishPage;