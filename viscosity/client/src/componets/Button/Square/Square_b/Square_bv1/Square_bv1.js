import React, { Component } from 'react';
import './Square_bv1.css';

class Square_bv1 extends Component {

    constructor(props){
        super(props)
        this.fa = {
            paypal: "fab fa fa-paypal fa-sm",
            facebook: "fab fa fa-facebook-f fa-sm",
            twitter: "fab fa fa-twitter fa-sm",
            google: "fab fa fa-google fa-sm"
        }

        function faReader(FA){
            let fa = ""
            switch (FA) {
                case "paypal":
                    fa = "paypal";
                    break;
                case "facebook":
                    fa = "facebook";
                    break;
                case "twitter":
                    fa = "twitter";
                    break;
                case "google":
                    fa = "google";
                    break;
                }
            console.log(this.fa[fa]);
            return this.fa[fa];
        }
    }


  render() {
    return (
        <div className="Square_bv1">
            <button className={this.props.buttonType}> 
                {/* Edit the code above so that the "key is placed as the value for the button type later on" */}
                <i className={faReader(FA)}></i>
                {this.props.text}
            </button>

        </div>
    );
  }
}

export default Square_bv1;
