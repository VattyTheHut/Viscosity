import React, { Component } from 'react';
import './Splitscreenslider_v2.css';

class Splitscreenslider_v2 extends Component {


    constructor(){
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const container = document.querySelector(".container");
        
        left.addEventListener("mouseenter", () => {
          container.classList.add("hover-left");
        });
        
        left.addEventListener("mouseleave", () => {
          container.classList.remove("hover-left");
        });
        
        right.addEventListener("mouseenter", () => {
          container.classList.add("hover-right");
        });
        
        right.addEventListener("mouseleave", () => {
          container.classList.remove("hover-right");
        });
       }


  render() {
    return (
        <div className="Splitscreenslider_v2">
            <div class="container">
                <div class="split left">
                    <h1>The Designer</h1>
                    <a href="#" class="button">Read More</a>
                </div>

            <div class="split right">
                <h1>The Programmer</h1>
                <a href="#" class="button">Read More</a>
            </div>
        </div>
    </div>
    );
  }
}

export default Splitscreenslider_v2;


