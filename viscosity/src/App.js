import React, { Component } from 'react';
import Footer_a_lv1 from './componets/Footer/Footer_a/Footer_a_lv1/Footer_a_lv1.js'
import Footer_a_lv2 from './componets/Footer/Footer_a/Footer_a_lv2/Footer_a_lv2.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World <br /> <Footer_a_lv2 />
      </div>
    );
  }
}

export default App;
