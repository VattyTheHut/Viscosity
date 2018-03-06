import React, { Component } from 'react';
import './Footer_a_lv1.css';


class Footer_a_lv1 extends Component {
  render() {
    return (
      <div className="Footer_a_lv1">
         <div className="footer_a">
         This footer will always be positioned at the bottom of the page, but
         <strong> not fixed</strong>.
         </div>
      </div>
    );
  }
}

export default Footer_a_lv1;
