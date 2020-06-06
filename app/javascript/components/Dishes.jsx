import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import StudentCollection from './components/StudentCollection';
// import NewStudentForm from './components/NewStudentForm';
// import './App.css';

const API_DISHES_INDEX = "http://localhost:3000/api/dishes"

const Dishes = () => {
  const [dishList, setDishList] = useState([]);
  
  useEffect(() => {
    axios.get(API_DISHES_INDEX)
      .then((response) => {
        const apiDishList = response.data;
        setDishList(apiDishList);
      })
      .catch((error) => {
        // Still need to handle errors
        // setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      Dishes!
    </div>
  );
};

export default Dishes;