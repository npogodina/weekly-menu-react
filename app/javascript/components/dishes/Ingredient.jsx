import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const Ingredient = (props) => {

  return (
    <tr className="list-group-item-action">
      <th scope="row"> {props.name} </th>
      <th scope="row"> {props.quantity} </th>
      <th scope="row"> <button className="btn btn-primary">Edit</button> </th>
      <th scope="row"> <button className="btn btn-danger">Delete</button> </th>
    </tr>
  );
};

export default Ingredient;