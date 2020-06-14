import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import PropTypes from 'prop-types';

const EditDishForm = (props) => {

  const [formFields, setFormFields] = useState({
    id: props.dish.id,
    name: props.dish.name,
    meal_ids: props.dish.meals.map(meal => meal.id),
    servings: props.dish.servings,
    recipe: props.dish.recipe,
  });

  const [mealFields, setMealFields] = useState({
    1: formFields.meal_ids.includes(1) ? true : false,
    2: formFields.meal_ids.includes(2) ? true : false,
    3: formFields.meal_ids.includes(3) ? true : false
  });

  // event handlers
  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onMealCheck = (event) => {
    const newMealFields = {
      ...mealFields
    }
    newMealFields[event.target.name] = !newMealFields[event.target.name];
    setMealFields(newMealFields);

    let newFormFields = {
      ...formFields,
      meal_ids: []
    }

    for (const meal in newMealFields) {
      if (newMealFields[meal]){
        newFormFields.meal_ids.push(meal)
      };
    };

    setFormFields(newFormFields);
  };

  let history = useHistory();
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.editDishCallback(formFields);
    history.push(`/dishes/`)
  };
  
  return (
    <div className="container mt-5">
    <h1>Edit dish</h1>
    <p>Please provide the following information:</p>

      <form className="" onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            onChange={onInputChange}
            value={formFields.name}
            className="form-control"
          />
        </div>
        
        <div>
          <label htmlFor="servings">Servings:</label>
          <select
            id="servings"
            name="servings"
            onChange={onInputChange}
            value={formFields.servings}
            className="form-control"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="breakfast"
              name="1"
              checked={mealFields[1]}
              onChange={onMealCheck}
            />
            <label className="form-check-label" htmlFor="breakfast">
              Breakfast
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="lunch"
              name="2"
              checked={mealFields[2]}
              onChange={onMealCheck}
            />
            <label className="form-check-label" htmlFor="lunch">
              Lunch
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="dinner"
              name="3"
              checked={mealFields[3]}
              onChange={onMealCheck}
            />
            <label className="form-check-label" htmlFor="dinner">
              Dinner
            </label>
          </div>
          
        </div>

        <div>
          <label htmlFor="recipe">Recipe:</label>
          <textarea
            id="recipe"
            name="recipe"
            onChange={onInputChange}
            value={formFields.recipe}
            className="form-control"
          />
        </div>

        <input
          type="submit"
          value="Edit Dish"
          className="btn btn-primary mt-3"
        />
      </form>
    </div>
  );
};

export default EditDishForm;