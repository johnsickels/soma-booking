import React from 'react';

function BookingForm(props) {
  const updateForm = (event) => {
    const { name, value } = event.target;
    props.setForm({ ...props.form, [name]: value });
  };
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            name="name"
            onChange={updateForm}
            placeholder="Reservation Name"
            type="text"
          ></input>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="form-control"
            name="phone"
            onChange={updateForm}
            placeholder="Phone Number"
            type="text"
          ></input>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="room-number">Room Number</label>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              onChange={updateForm}
              name="roomNumber"
              id="room-number"
            >
              {props.rooms
                .filter((room) => !room.occupants.length)
                .map((room, idx) => (
                  <option key={idx} value={room.id}>
                    Room #{room.id}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="col">
          <label htmlFor="number-of-occupants">Number of Occupants</label>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              onChange={updateForm}
              name="numberOfOccupants"
              id="number-of-occupants"
            >
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
