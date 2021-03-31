import React from "react";

function PhoneNumberInput(props) {
  return (
    <>
      <label htmlFor="phone">Phone Number</label>
      <input
        className="form-control"
        name="phone"
        onChange={props.updateForm}
        placeholder="Phone Number"
        type="text"
      ></input>
    </>
  );
}

export default PhoneNumberInput;
