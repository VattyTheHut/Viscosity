import React, { Component } from 'react';
import Footer_a_lv1 from './componets/Footer/Footer_a/Footer_a_lv1/Footer_a_lv1.js'
import Footer_a_lv2 from './componets/Footer/Footer_a/Footer_a_lv2/Footer_a_lv2.js'
// import Navbar_a_lv1 from './componets/Navbar/Navbar_a/Navbar_a_lv1/Navbar_a_lv1.js'
// import Parallax_a from './componets/Parallax/Parallax_a/Parallax_a.js'
// import Videoplug from './componets/Videoplug/Videoplug.js'
// import Landingpage_v1 from './componets/Landingpage/Landingpage_v1/Landingpage_v1.js'
// import Modal_v1 from "./componets/Modal/Modal_v1/Modal_v1.js"
import Checkout_v1 from "./componets/Paypal/Checkout_v1/Checkout_v1.js"
import Checkout_v2 from "./componets/Paypal/Checkout_v2/Checkout_v2.js"
// import  Round_av1 from"./componets/Button/Round/Round_a/Round_av1.js"
// import Square_bv1 from "./componets/Button/Square/Square_b/Square_bv1/Square_bv1.js"
// import Splitscreenslider_v2 from "./componets/Splitscreenslider/Splitscreenslider_v2/Splitscreenslider_v2.js"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      {/* <Navbar_a_lv1 />
      
       <Parallax_a /> */}


       <Checkout_v1 />
      
      {/* <Footer_a_lv2/> */}
          
      </div>
    );
  }
}

export default App;