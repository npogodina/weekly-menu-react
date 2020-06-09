import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import EditDishForm from './EditDishForm';

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

  const [formMode, setFormMode] = useState(false);
  const displayEditForm = () => {
    setFormMode(true);
  }
  
  if (dish) {
    if (!formMode) {
      return (
        <div className="container mt-5">
          <div className="jumbotron mx-auto" style={{width: "50%"}}>
            <h1 className="text-center"> {dish.name}</h1>  
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">Servings: {dish.servings}</li>
              <li className="list-group-item">Meals: {meals.join(", ")} </li>
              <li className="list-group-item">Recipe: {dish.recipe}</li>
            </ul> 
            <button className="btn btn-primary" onClick={displayEditForm}>Edit</button>
          </div>
          
          <h3 className="text-center">Ingredients</h3>
        </div>
      );
    } else {
      return (
        <EditDishForm dish={dish} editDishCallback={props.editDishCallback}/>
      )
    }
  } else {
    return (
      <div className="">Loading...</div>
    )
  }
};

export default DishPage;