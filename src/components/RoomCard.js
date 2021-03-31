import React from "react";

function RoomCard(props) {
  if (props.room.occupants) {
    return (
      <div className={"card border-danger"}>
        <div className="card-header">Room #{props.room.id}</div>
        <div className="card-body">
          <h5 className="card-title">Name: {props.room.user}</h5>
          <p className="card-text">Occupants: {props.room.occupants}</p>
          <button
            id={props.room.id}
            onClick={props.emptyRoom}
            type="button"
            className="btn btn-secondary"
          >
            Checkout Guest
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"card border-success"}>
        <div className="card-header">Room #{props.room.id}</div>
        <div className="card-body">
          <button
            onClick={props.bookRoom}
            type="button"
            className="btn btn-secondary"
            id={props.room.id}
          >
            Book Room
          </button>
        </div>
      </div>
    );
  }
}

export default RoomCard;
