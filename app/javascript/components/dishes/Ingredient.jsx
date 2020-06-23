import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const Ingredient = (props) => {

  const deleteIngredient = () => {
    props.removeIngredientCallback(props.name);
  };

  return (
    <tr className="list-group-item-action">
      <th scope="row"> {props.name} </th>
      <th scope="row"> {props.quantity} </th>
      <th scope="row"> <button className="btn btn-danger" onClick={deleteIngredient}>Delete</button> </th>
    </tr>
  );
};

export default Ingredient;