import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import EditDishForm from './EditDishForm';
import Ingredient from './Ingredient';

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

  let ingredientComponents = []
  if (dish) {
    ingredientComponents = dish.ingredients.map((ingredient) => {
      return(
        <Ingredient key={ingredient.id} name={ingredient.name} quantity={ingredient.quantity} />
      );
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
            <button className="btn btn-primary mr-2" onClick={displayEditForm}>Edit</button>
            <button className="btn btn-primary">Add Ingredient</button>
          </div>
          
          <h3 className="text-center">Ingredients</h3>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              { ingredientComponents }
            
            </tbody>
          </table>
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