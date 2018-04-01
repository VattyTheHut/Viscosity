import React, { Component } from 'react';
import './Navbar_a_lv1.css';

class Navbar_a_lv1 extends Component {
  render() {
    return (
      <div className="Navbar_a_lv1">

      <header>
      <div className="navbar">
        <ul className="nav">
          <li className="item">
            <a href="">Home</a>
          </li>

          <li className="item">
            <a href="">Blog</a>
          </li>

          <li className="item">
            <a href="">About</a>
          </li>
          
          <li className="item">
            <a href="">Nrand</a>
          </li>

          <li className="item">
            <a href="" className="contact">Contact</a>
          </li>
        </ul>

        <div className="logo">
          <img src="" />
        </div>
      </div>
    </header>

      </div>
    );
  }
}

export default Navbar_a_lv1;
