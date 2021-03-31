import React from 'react';

function RoomCard({ room }) {
  return (
    <div
      className={`card text-white ${
        room.occupants ? 'bg-danger' : 'bg-success'
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

{
  /* <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
}
