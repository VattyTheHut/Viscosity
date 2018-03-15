import React, { Component } from 'react';
import './Checkout_v1.css';
import Square_bv1 from "/Users/vatekehcorlon/viscosity_va0.1/viscosity/client/src/componets/Button/Square/Square_b/Square_bv1/Square_bv1.js"

class Checkout_v1 extends Component {


    constructor(){
        super()

        // function month(){
        //     let mouth = ""
        //     switch (new Date().getmonth()) {
        //         case 1:
        //             month = "Jan";
        //             break;
        //         case 2:
        //             month = "Feb";
        //             break;
        //         case 3:
        //             month = "Mar";
        //             break;
        //         case 4:
        //             month = "Apr";
        //             break;
        //         case 5:
        //             month = "May";
        //             break;
        //         case 6:
        //             month = "Jun";
        //             break;
        //         case 7:
        //             month = "Jul";
        //         case 8:
        //             month = "Aug";
        //             break;
        //         case 9:
        //             month = "Sept";
        //         case 10:
        //             month = "Oct";
        //             break;
        //         case 11:
        //             month = "Nov";
        //         case 12: 
        //             month = "Dec";
        //     }
        //     console.log(month);
        //     return month;
        // }



        // function day(){
        //     return new Date().getDay();
        // }

        // function year(){
        //     return new Date().getFullYear();
        // }






    }


    // for example --> Oct 18, 2015 08:30:57 PDT

    


  render() {
    return (
<div className="Checkout_v1">
   <div className="container">
   <form action="/pay" method="post">
      <div className="left">
         <div className="info-box">
            <div className="receipt">
               <div>Receipt for</div>
                <span>Dribbble</span>
            </div>
            <div className="entry">
               <i className="icon-wallet" aria-hidden="true"></i>
                    <div>Amount:</div>
                    <span>$20.00 USD</span>
            </div>
            <div className="entry">
               <i className="icon-calendar" aria-hidden="true"></i>
            
                    <div>Date:</div>
                    <span>Nov 5</span>
               
            </div>
            <div className="entry">
               <i className="icon-star" aria-hidden="true"></i>
            
                    <div>Issuer:</div>
                    <span>Dribbble</span>
            
            </div>
            <div className="entry">
               <i className="icon-notebook" aria-hidden="true"></i>
            
               <div>Confirmation Nr:</div>
                <span>0YX123580219G</span>
                    
            </div>
         </div>
      </div>
      
      <div className="right">
         <div className="content">
            <div className="header">
               <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" />
               <h4>Oct 18, 2015   08:30:57   PDT</h4>
            </div>
            <div className="main">
               <h3>Dribbble Pro Account (1 year)</h3>
               <h5>Total: $20.00 USD</h5>
            </div>
            <div className="message">
               
               <div>Hello Ennio,</div>
               You sent a payment of $20.00 USD to Dribbble (<a href="mailto:paypal@dribbble.com">paypal@dribbble.com</a>)
               <h6>
                  <div>It may take a few moments for this</div>
                  transaction to appear in your account.
               </h6>
            </div>
            <div><Square_bv1 /></div>
            <div className="footer">
               <a href="#">www.paypal.com/help</a>
               <h6>Invoice ID: 108165</h6>
            </div>
         </div>
      </div>
      </form>
   </div>
   </div>
    );
  }
}

export default Checkout_v1;
