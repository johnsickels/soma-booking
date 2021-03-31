import React, { useState } from "react";
import RoomCard from "./components/RoomCard.js";
import BookingForm from "./components/BookingForm.js";

function App() {
  // set intial state
  const initRooms = [
    { id: 1, occupants: 0 },
    { id: 2, occupants: 0 },
    { id: 3, occupants: 0 },
    { id: 4, occupants: 0 },
    { id: 5, occupants: 0 },
  ];

  // state
  const [rooms, setRooms] = useState(initRooms);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ roomNumber: 1 });

  // event handler
  const handleFormSubmit = () => {
    // add user to state
    const newUser = {
      id: parseInt(form.phone),
      name: form.name,
    };
    setUsers([...users, newUser]);

    // update room by id
    const roomsCopy = [...rooms];
    const userRoom = roomsCopy.find(
      (room) => room.id === parseInt(form.roomNumber)
    );
    if (!userRoom) return;
    userRoom.occupants = form.numberOfOccupants;
    userRoom.user = form.name;
    console.log(userRoom);
    setRooms(roomsCopy);
  };

  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">SOMA Booking</h1>
        <p className="lead">Book with ease.</p>
      </div>
      <div className="container mb-5">
        <BookingForm form={form} setForm={setForm} rooms={rooms} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          BOOK
        </button>
        <hr></hr>
        <h2>Rooms</h2>
        <div className="card-deck">
          {rooms.map((room, idx) => (
            <RoomCard key={idx} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
