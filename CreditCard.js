import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form.js";

const renderCardNumber = number => {
  number = number.toString();
  let resultStr = "";
  for (let i = 0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + " ";
  }
  return resultStr.trim();
};

const renderValidThru = number => {
  number = number.toString();
  return number.slice(0, 2) + "/" + number.slice(2);
};

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardHolder: "",
      validThru: ""
    };
    this.updateValues = this.updateValues.bind(this);
  }

  updateValues(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="creditcard">
        <div className="container">
          <div className="title">
            <h3>CREDIT CRAD</h3>
          </div>
          <div className="puce">
            <img src="./puce.png" alt="puce" />
          </div>
          <div className="numcard">
            <span className="numcardspan">
              {renderCardNumber(this.state.cardNumber)}
            </span>
          </div>
          <div className="bottomsection">
            <div>
              <span>5422</span>
              <h4>{this.state.cardHolder.toUpperCase()}</h4>
            </div>
            <div className="bottomright">
              <div className="validity">
                <div className="validthru">
                  <p>
                    VALID <br /> THRU
                  </p>
                </div>
                <div className="deadline">
                  <p>MONTH/YEAR</p>
                  <h1>{renderValidThru(this.state.validThru)}</h1>
                </div>
              </div>
              <div className="visaimg">
                <img src="./visa.jpg" width="90px" alt="visa" />
              </div>
            </div>
          </div>
        </div>
        <Form
          updateValues={this.updateValues}
          cardHolder={this.state.cardHolder}
          cardNumber={this.state.cardNumber}
          validThru={this.state.validThru}
        />
      </div>
    );
  }
}

export default CreditCard;
