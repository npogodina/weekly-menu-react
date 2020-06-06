import React, { useState, useEffect } from 'react';
import Dish from './Dish';
// import './App.css';

// const API_DISHES_INDEX = "http://localhost:3000/api/dishes"

import PropTypes from 'prop-types';

const Dishes = (props) => {

  const dishComponents = props.dishList.map((dish, i) => {
    return (
      <li key={dish.id}>
        <Dish
          id={dish.id}
          name={dish.name}
          servings={dish.servings}
          meal={dish.meal}
          recipe={dish.recipe}
        />
      </li>
    );
  });

  return (
    <ul className="">
      {dishComponents}
    </ul>
  );
};

export default Dishes;