import React from "react";
import  Card from "../Card/Card";
import Jumbotron from "../Jumbotron/Jumbotron";
import NavBar from "../NavBar/NavBar";
const HelloBootstrap = () => {
  return (
    <>     
      <NavBar/>
      <Jumbotron/>
      <Jumbotron/>
      <div className="container">
        <div className="row">
          <div className = "col-sm-4">
             <Card/>
          </div>
          <div className = "col-sm-4">
             <Card/>
          </div>
        </div>
      </div>  
      <Card/>
      <Card/>
    </>
  
  );
};

export default HelloBootstrap;
