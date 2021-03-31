import React from "react";

function NumberOfOccupantsInput(props) {
  return (
    <>
      <label htmlFor="number-of-occupants">Number of Occupants</label>
      <div className="input-group mb-3">
        <select
          className="custom-select"
          onChange={props.updateForm}
          name="numberOfOccupants"
          id="number-of-occupants"
        >
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
        </select>
      </div>
    </>
  );
}
export default NumberOfOccupantsInput;
