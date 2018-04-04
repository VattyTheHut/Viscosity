import React, { Component } from 'react';
import Button  from "/Users/vatekehcorlon/viscosity_va0.1/viscosity/client/src/componets/Button/Button.js"
import './Modal.css';

class Modal extends Component {

  render() {

    const mBlue = {backgroundColor: 'aqua' }
    const getModal = v => {
    const modal = {
      v1: <div className="Modal-party">
      <div className="party">
        <div className="blur-here"></div>
          <div className="party__box">
          <div className="close--btn">
          <Button text="" 
                  color="fb-c"
                  fas="fb"
                  shape="round" 
                  length="l-md" 
                  size="md"/> 
              </div>
              <div className="party__box-header">
                <div className="party__text">{this.props.partyText || "EXCLUSIVE"}</div>
              </div>
              <div className="party__box-info">
                <h2 className="heading-secondary">
                  <span className="party__offer">Get {this.props.partyOffer} off</span>
                  <span className="party__location">at Caribbean Bar between</span>
                  <span className="party__time">{this.props.partyTimeStart} and {this.props.partyTimeEnd}</span>
                </h2>
                <a href="#" className="info--btn">Take me there</a>
              </div>
          </div>
        </div>
      </div>,

      v2: <div className="BBBody">
              <div className="login-page">
                  <div className="login-form">
                      <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/29791610_573322166387374_7564735723551658441_n.jpg?_nc_cat=0&oh=ae39427b45a52f92c6e954317cdb455f&oe=5B6CC11A" className="small-img" alt="logo img" />
                      <form class="login-register-form">
                          <input type="text" placeholder="name" />
                          <input type="password" placeholder="password" />
                          <input type="text" placeholder="email address" />
                          <button>create</button>
          
                          <p className="viewer-message">
                              Already registered? 
                              <a id="sign-in">Sign In</a>
                          </p>
                      </form>
          
                  <form className="login-login-form">
                      <input type="text" placeholder="username" />
                      <input type="password" placeholder="password" />
                      <button id="haha">login</button>
                      <button style={mBlue} id="haha">ReseachGate</button>
                      <p className="login-message">Not registered? <a href='/signup'>Create an account</a></p>
                  </form>
                  </div>
              </div>
        </div>,
      
      v3: <div>
          <a href="#openModal">Open Modal</a>
            <div id="openModal" className="modalDialog">
              <div>
                <a href="#close" className="close" title="Close"><Button text="" 
                  color="fb-c"
                  colorSolid="fb-c-s"
                  fas="time"
                  faSize= "fa-lg"
                  shape="round" 
                  length="sh" 
                  size="sm"/></a>
                <h2>Modal Box</h2>
                <p>This is a sample modal box that can be created using the powers of CSS3.</p>
                <p>You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.</p>
              </div>
            </div>
          </div>
  

    }


    return modal[v]

  }


    return (
      <div>
        {getModal(this.props.modal)}
      </div>
    );
  }
}

export default Modal;


