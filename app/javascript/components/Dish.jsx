import React from 'react';
import PropTypes from 'prop-types';

// import './Student.css';

const Dish = (props) => {

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

  return (
    <tr className="list-group-item-action">
      <th scope="row"> {props.name} </th>
      <th scope="row"> {props.meal} </th>
      <th scope="row"> {props.servings} </th>
      <th scope="row"> {props.recipe? "Yes!" : "N/A"} </th>
    </tr>
  );
};

export default Dish;
