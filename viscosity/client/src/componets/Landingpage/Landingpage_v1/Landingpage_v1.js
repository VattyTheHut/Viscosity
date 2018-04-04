import React, { Component } from 'react';
import Modal from "/Users/vatekehcorlon/viscosity_va0.1/viscosity/client/src/componets/Modal/Modal.js"

import './Landingpage_v1.css';

class Landingpage_v1 extends Component {
  render() {
    return (
      <div className="Landingpage_v1">
        <div className="Landingpage_v1">
            
            <div id="V1showcase">
                <h1>Earl Sweatshirt</h1>
                <Modal partyOffer="50%"
                       partyTimeStart="May 4"
                       partyTimeEnd="June 3"/>
                <p>Arguably one of the rap game's greatest prodigies and only at the tender age of 24 with
                only 3 projects on Belt And although his airbending skills are great, he has a lot to 
                learn before he's ready to save anyone. But I believe Earl can save the world.
                </p>                  

                <a href="" className="V1button">Read More</a>
            </div>

        </div>
      </div>
    );
  }
}

export default Landingpage_v1;
