import React from "react";

function NameInput(props) {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        className="form-control"
        name="name"
        onChange={props.updateForm}
        placeholder="Reservation Name"
        type="text"
      ></input>
    </>
  );
}

export default NameInput;
