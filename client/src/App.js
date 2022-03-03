import React, { Fragment, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Result from './Result';
import Form from "./Form";
import Axios from "axios";
import Register from "./register";
import Login from "./login"






function App() {
  return (


     
   
    

   

    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/">
          <Form/>
          
        </Route>
      </Switch>
    </BrowserRouter>


   
         
      </div>
    
  );
}

export default App;
