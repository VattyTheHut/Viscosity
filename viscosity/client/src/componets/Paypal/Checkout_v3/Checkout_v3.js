import React, { Component } from 'react';
import './Checkout_v3.css';

class Checkout_v3 extends Component {


  render() {
    return (
        <div className="Checkout_v3">
            <form class="credit-card">
                <div class="form-header">
                    <h4 class="title">Credit card detail</h4>
                </div>

      <div class="form-body">
        {/* <!-- Card Number --> */}
        <input type="text" class="card-number" placeholder="Card Number" />

        {/* <!-- Date Field --> */}
        <div class="date-field">
          <div class="month">
            <select name="Month">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div class="year">
            <select name="Year">
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>

        {/* <!-- Card Verification Field --> */}
        <div class="card-verification">
          <div class="cvv-input">
            <input type="text" placeholder="CVV" />
          </div>
          <div class="cvv-details">
            <p>3 or 4 digits usually found <br/> on the signature strip</p>
          </div>
        </div>

        {/* <!-- Buttons --> */}
        <button type="submit" class="proceed-btn"><a href="#">Proceed</a></button>
        <button type="submit" class="paypal-btn"><a href="#">Pay With</a></button>
      </div>
    </form>
    </div>
    );
  }
}

export default Checkout_v3;