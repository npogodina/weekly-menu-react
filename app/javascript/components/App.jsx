import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Hello from "./Hello"
import Dishes from "./Dishes"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => ("Home!")} />
          <Route path="/hello" render={() => <Hello/>} />
          <Route path="/dishes" render={() => <Dishes/>} />
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App
