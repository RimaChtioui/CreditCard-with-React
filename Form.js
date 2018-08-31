import React, { Component } from "react";

const Form = props => (
  <div>
    <form className="forminput">
      <input
        className="input"
        type="text"
        placeholder="type your Card Number here"
        value={props.cardNumber}
        name="cardNumber"
        onChange={props.updateValues}
        maxlength="16"
      />
      <input
        className="input"
        type="text"
        placeholder="type your User Name here"
        value={props.cardHolder}
        name="cardHolder"
        onChange={props.updateValues}
        maxlength="20"
      />
      <input
        className="input"
        type="text"
        placeholder="type your Validity Date here"
        value={props.validThru}
        name="validThru"
        onChange={props.updateValues}
        maxlength="4"
      />
    </form>
  </div>
);

export default Form;
