import React, {useState} from 'react';
import PropTypes from 'prop-types';

const IngredientForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    quantity: ""
  });

  return (
    <form className="form-inline">
      <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
      <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Apples" />

      <label className="sr-only" htmlFor="inlineFormInputName2">Quantity</label>
      <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="3" />

      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </form>
  );
};

export default IngredientForm;