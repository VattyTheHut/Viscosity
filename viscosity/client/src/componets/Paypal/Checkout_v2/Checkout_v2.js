import React, { Component } from 'react';
import './Checkout_v2.css';

class Checkout_v2 extends Component {



  render() {
    return (
<div className="Checkout_v2">

<div className="email-container row">
  <div className="col-sm-6 blue z-depth-2">
    <h1 className="brand--name">Paypal</h1>
    <h6 className="brand--subHeading">Email Receipt</h6>
  </div>
  <div className="col-sm-6 white z-depth-2">
    <p className="brand-icon textRight header">06-08-2015</p>
    <div className="divider"></div>
    <ul className="collection">
      <li className="collection--item">
        <p className="item--name">Apple iphone 5</p><b class="item--cost">$430</b>
      </li>
      <li className="collection--item">
        <p className="item--name">Casio G-shock</p><b class="item--cost">$670</b>
      </li>
      <li className="collection--item">
        <p className="item--name">Xbox one</p><b class="item--cost">$349</b>
      </li>
      <li className="collection--total">
        <p className="total">Total</p>
        <p className="total--cost">$1449</p>
      </li>
    </ul>
  </div>
</div>

   
   </div>
    );
  }
}

export default Checkout_v2;
