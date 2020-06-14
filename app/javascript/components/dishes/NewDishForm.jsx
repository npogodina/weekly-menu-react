import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import PropTypes from 'prop-types';
import IngredientForm from './IngredientForm';

const NewDishForm = (props) => {

  let history = useHistory();

  const [formFields, setFormFields] = useState({
    name: "",
    meal_ids: [],
    servings: 1,
    recipe: "",
    ingredients: []
  });

  const [mealFields, setMealFields] = useState({
    1: false,
    2: false,
    3: false
  });

  const [ingredients, setIngredients] = useState({})

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
  };

  const onFormSubmit = (event) => {
    const newFormFields = {
      ...formFields,
    }

    for (const meal in mealFields) {
      if (mealFields[meal]){
        newFormFields.meal_ids.push(meal)
      };
    };

    setFormFields(newFormFields);
    console.log(formFields);

    event.preventDefault();
    props.addDishCallback(formFields);
    history.push(`/dishes/`)
  };

  return (
    <div className="container mt-5">
    <h1>Add your dish!</h1>
    <p>Please provide the following information:</p>

      <form
        className=""
        onSubmit={onFormSubmit}
      >
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
          value="Add Dish"
          className="btn btn-primary mt-3 mr-3 mb-3"
        />
        
        {/* <button className="btn btn-primary mt-3">Add Ingredient</button> */}

      </form>

      <IngredientForm />

    </div>
  );
};

export default NewDishForm;