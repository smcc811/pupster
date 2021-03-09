import React, { Component } from 'react';
import axios from "axios";

class Discover extends Component {
   
   state = {
       imageUrl: ""
   }

   componentDidMount ()  {
         this.getNewDog();
   }

   getNewDog = ()=> {

     axios.get("https://dog.ceo/api/breeds/image/random").then(response=>{
         console.log(response.data.message);
          this.setState({
              imageUrl:response.data.message
          })
     }).catch(err => {
         console.log(err);
     })

   };

   handleThumbsUp = () => {
       const randomNumber = Math.floor(Math.random() * 5);
       const yourLuckyNumber = 3;
       if(randomNumber === yourLuckyNumber ){
           alert("this dog likes you");
       }
       this.getNewDog();
   };

   handleThumbsDown = () => {
    this.getNewDog();
  };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center" >
                       <img src={this.state.imageUrl} alt="dog" style={{height:300}}/> 
                    </div>     
                </div>
                 <div className="row">
                     <div className="col d-flex justify-content-evenly">
                         <button className="btn btn-btn-danger" onClick={this.handleThumbsDown}>thumbs down</button>
                         <button className="btn btn-btn-success"onClick={this.handleThumbsUp}>thumbs up</button>
                     </div>
                 </div>
            </div>    
        );      
  }
}

export default Discover;