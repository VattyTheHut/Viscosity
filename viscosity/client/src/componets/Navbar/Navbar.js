import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {


  render() {

    let getNavbar = (v, side) => {


      const sideType = {
        
      }


      const navType = {
        v1: <div className="v1">
              <header>
                <div className="navbar">
                  <ul className="nav">
                    <li className="item">
                      <a href="/home">Home</a>
                    </li>
  
                    <li className="item">
                      <a href="/blog">Blog</a>
                    </li>
  
                    <li className="item">
                      <a href="/about">About</a>
                    </li>
                    
                    <li className="item">
                      <a href="/brand">Brand</a>
                    </li>
  
                    <li className="item">
                      <a href="/contact" className="contact">Contact</a>
                    </li>
                  </ul>
  
                  <div className="logo">
                    <img src="" />
                  </div>
                </div>
              </header>
            </div>,
      
      v2: <div className="v2">
              <img className="lily" src="http://www.solidbackgrounds.com/images/1280x1024/1280x1024-dark-red-solid-color-background.jpg" alt="scaled_Lily" border="0" />
              <span className="codelily">company Name</span>
            <ul className="navbar">
                <li><a href="">Home</a></li> 
                <li><a href="">Bio</a></li> 
                <li><a href="">Portfolio</a></li> 
                <li><a href="">Tutorials</a></li>
                <li><a href="" className="drpdwn">Blog <i className="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li><a href="">Code</a></li>
              <li><a href="">Lifestyle</a></li>
              <li><a href="">Everything</a></li>
            </ul></li>
            </ul>
          </div>

      }


      return navType[v]

    }


    return (
      <div className="Navbar">
      {getNavbar(this.props.navbar, this.props.side || undefined)} 
      {/* the Function above takes in a value from props.navBar to select a particular 
      navagation bar while also taking an optional side navagation view. */}
      </div>
    );
  }
}

export default Navbar;
