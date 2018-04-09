import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './componets/Footer/Footer.js'
import Comingsoon from './componets/Comingsoon/Comingsoon.js'
// import Navbar from './componets/Navbar/Navbar.js'
//import Parallax_a from './componets/Parallax/Parallax_a/Parallax_a.js'
// import Videoplug from './componets/Videoplug/Videoplug.js'
// import Maps from "./componets/Maps/Maps.js"
// import Landingpage_v1 from './componets/Landingpage/Landingpage_v1/Landingpage_v1.js'
import Modal from "./componets/Modal/Modal.js"
// import Checkout_v1 from "./componets/Paypal/Checkout_v1/Checkout_v1.js"
// import Checkout_v2 from "./componets/Paypal/Checkout_v2/Checkout_v2.js"
// import Contact_a from "./componets/contact/contact_a/Contact_a.js"
 // import Button from "./componets/Button/Button.js"
// import Splitscreenslider_v2 from "./componets/Splitscreenslider/Splitscreenslider_v2/Splitscreenslider_v2.js"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Modal modalType="v3"/>
         <Comingsoon date={'Jan 1, 2019 13:00:00'} />

      </div>
    );
  }
}

export default App;
