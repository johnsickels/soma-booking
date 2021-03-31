import React from "react";

function RoomNumberInput(props) {
  return (
    <>
      <label htmlFor="room-number">Room Number</label>
      <div className="input-group mb-3">
        <select
          className="custom-select"
          onChange={props.updateForm}
          name="roomNumber"
          id="room-number"
        >
          {props.rooms
            .filter((room) => !room.occupants)
            .map((room, idx) => (
              <option key={idx} value={room.id}>
                Room #{room.id}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default RoomNumberInput;
