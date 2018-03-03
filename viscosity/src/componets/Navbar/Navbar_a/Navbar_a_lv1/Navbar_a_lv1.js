import React, { Component } from 'react';
import './Navbar_a_lv1.css';

class Navbar_a_lv1 extends Component {
  render() {
    return (
      <div className="Navbar_a_lv1">
        
        <div class="bar-nav">
            <div class="list-left"><span class="logo-color">.efontaine</span></div>
                    
                <div class="list-right">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a>ABOUT US</a></li>

                        <li>
                            <div class="dropdown">
                            <button class="dropbtn">Dropdown 
                              <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                            </div>
                          </div> 
                        </li>

                        {/* <li><a>SERVICES <span class="padd"><i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></span></a></li> */}
                        <li><a>PORTFOLIO</a></li>
                        <li><a>CONTACT</a></li>
                        <li><a>img</a></li>
                    </ul>
                </div>
        </div>



      </div>
    );
  }
}

export default Navbar_a_lv1;
