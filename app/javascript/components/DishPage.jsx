import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

import PropTypes from 'prop-types';

// import './Student.css';

const DishPage = (props) => {

  let history = useHistory();

  let {id} = useParams();
  id = Number(id);

  const API_DISHES_SHOW = `http://localhost:3000/api/dishes/${id}`

  const [dish, setDish] = useState([]);
  
  useEffect(() => {
    axios.get(API_DISHES_SHOW)
      .then((response) => {
        const apiDish = response.data;
        setDish(apiDish);
      })
      .catch((error) => {
        // Still need to handle errors
        // setErrorMessage(error.message);
      });
  }, []);

  // function handleClick(e) {
  //   // e.preventDefault();
  //   history.push(`/dishes/${props.id}`)
  // }

  return (
    <div className="container mt-5">

      <div className="jumbotron mx-auto" style={{width: "50%"}}>
        <h1 className="text-center"> {dish.name}</h1>  
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">Servings: {dish.servings}</li>
          <li className="list-group-item">Meal: {dish.meal}</li>
          <li className="list-group-item">Recipe: {dish.recipe}</li>
        </ul> 
      </div>
      
      <h3 className="text-center">Ingredients</h3>
    </div>
  );
};

export default DishPage;