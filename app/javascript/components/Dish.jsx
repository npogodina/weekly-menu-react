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
    <div className="">
      {/* <h3 className={props.present ? 'present' : 'absent'}>{props.fullName}</h3> */}
      <input value={props.name} />
      <ul>
        {/* <li>Class: C13</li> */}
        <li>Birthday: {props.meal}</li>
        <li>Email: {props.servings}</li>
      </ul>
      {/* <button onClick={onButtonClick}>
        Mark {props.present ? 'Absent' : 'Present'}
      </button> */}
    </div>
  );
};

export default Dish;
