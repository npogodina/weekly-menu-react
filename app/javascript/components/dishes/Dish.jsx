import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

// import './Student.css';

const Dish = (props) => {

  let history = useHistory();

  function handleClick(e) {
    // e.preventDefault();
    history.push(`/dishes/${props.id}`)
  }

  // Event callback functions
  // const onButtonClick = () => {
  //   const updatedStudent = {
  //     fullName: props.fullName,
  //     birthday: props.birthday,
  //     email: props.email,
  //     present: !props.present,
  //     id: props.id,
  //   }
  //   props.onUpdateStudent(updatedStudent);
  // }

  // const onFullNameInputChange = (event) => {
  //   const fullName = event.target.value;
  //   props.onUpdateStudent({
  //     fullName,
  //     birthday: props.birthday,
  //     email: props.email,
  //     present: props.present,
  //     id: props.id,
  //   });
  // };

  let meals = [];
  props.meals.forEach(meal => {
    meals.push(meal.name);
  });

  return (
    <tr className="list-group-item-action" onClick={handleClick}>
      <th scope="row"> <Link to={`/dishes/${props.id}`}>{props.name}</Link> </th>
      <th scope="row"> {meals.join(", ")} </th>
      <th scope="row"> {props.servings} </th>
      <th scope="row"> {props.recipe? "Yes!" : "N/A"} </th>
    </tr>
  );
};

export default Dish;
