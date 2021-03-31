import React from "react";
import NameInput from "./NameInput";
import NumberOfOccupantsInput from "./NumberOfOccupantsInput";
import PhoneNumberInput from "./PhoneNumberInput";

function BookingForm(props) {
  // handle input change
  const updateForm = (event) => {
    const { name, value } = event.target;
    props.setForm({ ...props.form, [name]: value });
  };
  return (
    <form>
      <div className="form-row">
        <div className="form-group col">
          <NameInput updateForm={updateForm} />
        </div>
        <div className="form-group col">
          <PhoneNumberInput updateForm={updateForm} />
        </div>
        <div className="form-group col">
          <NumberOfOccupantsInput updateForm={updateForm} />
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
