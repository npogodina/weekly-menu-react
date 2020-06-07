import React, {useState} from 'react';

import PropTypes from 'prop-types';

// import './Student.css';

const NewDishForm = (props) => {

  const [formFields, setFormFields] = useState({
    name: "",
    meal: "",
    servings: "",
    recipe: ""
  });

  // event handlers
  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addDishCallback(formFields);

    // setFormFields({
    //   name: "",
    //   // meal: "",
    //   // servings: "",
    //   // recipe: ""
    // });
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
          <label htmlFor="meal">Meal Type:</label>
          <input
            id="meal"
            name="meal"
            onChange={onInputChange}
            value={formFields.meal}
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
          className="btn btn-primary mt-3"
        />
      </form>
    </div>
  );
};

export default NewDishForm;