import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {

    let getFas = fa => {

        let faSize = this.props.faSize || 'fa-sm' // if you want to chnage the size of the logo but keep a big button then 
                                                // just add faSize to the your btn's props 
        {/* 
            fa-xs
            fa-sm
            fa-lg
            fa-2x
            fa-3x
            fa-5x
            fa-7x
            fa-10x
         */}                                        

        let fas = {
            pp: `fab fa fa-paypal ${faSize}`,
            fb: `fab fa fa-facebook-f ${faSize}`,
            tw: `fab fa fa-twitter ${faSize}`,
            goog: `fab fa fa-google ${faSize}`,
            em: `far fa fa-envelope ${faSize}`
        }
        return fas[fa];
    }


    return (
        <div className="Button">
            <button  className={ `${this.props.size}
                                  ${this.props.length}
                                  ${this.props.colorSolid}
                                  ${this.props.colorBorder}
                                  ${this.props.shape}` }>                 {/* Edit the code above so that the "key is placed as the value for the button type later on" */}
                <i className={ getFas(this.props.fas) }></i>
                {this.props.text}
            </button>

        </div>
    );
  }
}


{/*



    for example the button below will create a nice round
    socal media button:

    <Square_bv1 text="" 
                  color="fb-c"
                  fas="fb"
                  shape="round" 
                  length="sh" 
                  size="sm"/> 

    Just change the fas and color value to the respective color and logo

*/}


export default Button;


