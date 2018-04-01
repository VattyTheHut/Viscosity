import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer_a_lv1 from './componets/Footer/Footer_a/Footer_a_lv1/Footer_a_lv1.js'
import Footer_a_lv2 from './componets/Footer/Footer_a/Footer_a_lv2/Footer_a_lv2.js'
// import Footer_b_lv1 from './componets/Footer/Footer_b/Footer_b_lv1.js'
import Navbar_a_lv1 from './componets/Navbar/Navbar_a/Navbar_a_lv1/Navbar_a_lv1.js'
import Parallax_a from './componets/Parallax/Parallax_a/Parallax_a.js'
import Videoplug from './componets/Videoplug/Videoplug.js'
// import Maps from "./componets/Maps/Maps.js"
import Landingpage_v1 from './componets/Landingpage/Landingpage_v1/Landingpage_v1.js'
// import Modal_v1 from "./componets/Modal/Modal_v1/Modal_v1.js"
// import Checkout_v1 from "./componets/Paypal/Checkout_v1/Checkout_v1.js"
// import Checkout_v2 from "./componets/Paypal/Checkout_v2/Checkout_v2.js"
import Contact_a from "./componets/contact/contact_a/Contact_a.js"
import Button from "./componets/Button/Button.js"
// import Splitscreenslider_v2 from "./componets/Splitscreenslider/Splitscreenslider_v2/Splitscreenslider_v2.js"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      {/* <Navbar_a_lv1 /> */}
      
      <Button text="Hello?" 
                  faSize="fa-xs"
                  colorBorder="fb-c"
                  shape="round" 
                  length="l-md" 
                  size="sm"/>  
   
         
      </div>



    );
  }
}

export default App;
