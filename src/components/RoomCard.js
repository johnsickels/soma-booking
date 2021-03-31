import React from "react";

function RoomCard({ room }) {
  return (
    <div
      className={`card text-white ${
        room.occupants ? "bg-danger" : "bg-success"
      }`}
    >
      <div className="card-header">Room #{room.id}</div>
      <div className="card-body">
        <h5 className="card-title">Name: {room.user}</h5>
        <p className="card-text">Occupants: {room.occupants}</p>
      </div>
    </div>
  );
}

export default RoomCard;
