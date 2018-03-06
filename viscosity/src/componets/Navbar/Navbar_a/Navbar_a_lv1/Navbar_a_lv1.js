import React, { Component } from 'react';
import './Navbar_a_lv1.css';

class Navbar_a_lv1 extends Component {
  render() {
    return (
      <div className="Navbar_a_lv1">
        
        <div className="bar-nav">
            <div className="list-left"><span class="logo-color">.efontaine</span></div>
                    
                <div className="list-right">
                    <ul>
                        <li><a>HOME</a></li>
                        <li><a>ABOUT US</a></li>

                        <li>
                            <div className="dropdown">
                            <button className="dropbtn">Dropdown 
                              <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                              <a>Link 1</a>
                              <a>Link 2</a>
                              <a>Link 3</a>
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
