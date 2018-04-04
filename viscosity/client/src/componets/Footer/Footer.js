import React, { Component } from 'react';
import Button from "../Button/Button.js"
import './Footer.css';


class Footer extends Component {
  render() {

    let getFooter = (v) =>{
       const footerType = {
        v1: // You can Use this footer for a lot of interesting sections 
            <div className="v1">
              <div className="v1test"><strong>GET NOTIFIED OF NEW BLOGS</strong></div>
                <div className="container">
                 <div className="side1">
                 <input className="emailer" size="25" type="text" 
                     id="email" 
                     name="email" 
                     placeholder="Enter Email"/>
                  </div>

                 <div className="side2">
                 <Button text="GO!"
                          shape="square"
                          colorSolid="pp-c-s"
                          colorBorder="#000"
                          color="#fff"
                          size="md"
                          len="l-md"/> 
                 </div> 
                </div>
              
              <div className="v1test2"><strong>YOUR EMAIL ADDRESS WILL NEVER BE SHARED</strong></div>
            </div>,

        v2:
        <div className="v2">
              <div className="copyright">
                  <p>&copy 2013 - Organisation</p>
              </div>

              <div className="social">
                  <a href="" className="support">Contact Us</a>
                  <a href="https://www.facebook.com/" className="face">f</a>
                  <a href="https://www.twitter.com/" className="tweet">t</a>
                  <a href="https://www.Lindin.com/" className="linked">in</a>
              </div>
          </div>,

        v3: <div className="v3">
              
            </div>
          
      }

       return footerType[v]
    }

    return (
      <div className="footer">{getFooter('v1')}</div>
    );
  }
}


{/* 

  <div className="v1">
              You can Use this footer for a lot of interesting sections
              <strong> not fixed</strong>.
            </div>,

*/}



{
  /* 
  
  <div className="v1">
              <Button text="" 
                  color="fb-c"
                  fas="fb"
                  colorSolid="fb-c-s"
                  shape="round" 
                  length="l-md" 
                  size="md"/> 

               <Button text="" 
                  color="tw-c"
                  fas="tw"
                  colorSolid="tw-c-s"
                  shape="round" 
                  length="l-md" 
                  size="md"/> 
                

                 <Button text="" 
                  color="goog-c"
                  fas="goog"
                  colorSolid="goog-c-s"
                  shape="round" 
                  length="l-md" 
                  size="md"/> 



              <strong> not fixed</strong>.
            </div>
  







            <input className="emailer" type="text" 
                     id="email" 
                     name="email" 
                     placeholder="Enter Email"/>
                  <Button text="GO!"
                          shape="square"
                          colorSolid="pp-c-s"
                          colorBorder="#000"
                          color="#fff"
                          size="md"
                          len="l-md"/> 

                          <div className="container">
                 <div className="side1">hello</div>
                 <div className="side2">world</div>
                </div>
  */
}


// write code for optional stick nav vs dynamic nav

export default Footer;
