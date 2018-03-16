 import React, { Component } from 'react';
  import './Contact_a.css';

class Contact_a extends Component {

  render() {
    return (
        <div className="Contact_a">
            <div className="container">
                <form action="/contact" method="post">      
                    <input name="name" type="text" className="feedback-input" placeholder="Name" />   
                    <input name="email" type="text" className="feedback-input" placeholder="Email" />
                    <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
                    <input type="submit" value="SUBMIT"/>
                </form>
            </div>
        </div>
    );
  }
}

export default Contact_a;
