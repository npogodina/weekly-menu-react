import React, {useState} from 'react';
import PropTypes from 'prop-types';

const IngredientForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    quantity: ""
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addIngredientCallback(formFields);
    
  };

  return (
    <form className="form-inline" onSubmit={onFormSubmit}>
      <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
      <input 
        type="text" 
        className="form-control mb-2 mr-sm-2" 
        id="inlineFormInputName2" 
        placeholder="Apples"
        name="name"
        onChange={onInputChange}
        value={formFields.name} 
      />

      <label className="sr-only" htmlFor="inlineFormInputName2">Quantity</label>
      <input 
        type="text" 
        className="form-control mb-2 mr-sm-2" 
        id="inlineFormInputName2" 
        placeholder="3"
        name="quantity"
        onChange={onInputChange}
        value={formFields.quantity} 
      />

      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </form>
  );
};

export default IngredientForm;