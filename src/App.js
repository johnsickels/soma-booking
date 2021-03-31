import React, { useState } from "react";
import RoomCard from "./components/RoomCard.js";
import BookingForm from "./components/BookingForm/index.js";

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
  const [form, setForm] = useState({ numberOfOccupants: 1, roomNumber: 1 });

  // event handler
  const bookRoom = (event) => {
    event.preventDefault();
    // add user to state
    if (!form.name) {
      alert("Please enter a name!");
      return;
    }
    if (!form.phone) {
      alert("Please enter a phone number!");
      return;
    }
    const newUser = {
      id: parseInt(form.phone),
      name: form.name,
    };
    setUsers([...users, newUser]);

    // update room by id
    const roomsCopy = [...rooms];
    const userRoom = roomsCopy.find(
      (room) => room.id === parseInt(event.target.id)
    );
    if (!userRoom) return;
    userRoom.occupants = form.numberOfOccupants;
    userRoom.user = form.name;
    setRooms(roomsCopy);
  };

  const emptyRoom = (event) => {
    // console.log({ roomId });
    const roomId = event.target.id;
    console.log({ roomId });
    const roomsCopy = [...rooms];
    const userRoom = roomsCopy.find(
      (room) => room.id === parseInt(event.target.id)
    );
    delete userRoom.user;
    userRoom.occupants = 0;
    setRooms(roomsCopy);
  };

  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">SOMA Booking</h1>
        <p className="lead">Book with ease.</p>
      </div>
      <div className="container mb-5">
        <BookingForm
          form={form}
          setForm={setForm}
          rooms={rooms}
          // handleFormSubmit={handleFormSubmit}
        />
        <hr></hr>
        <h2>Rooms</h2>
        <div className="card-deck">
          {rooms.map((room, idx) => (
            <RoomCard
              key={idx}
              room={room}
              bookRoom={bookRoom}
              emptyRoom={emptyRoom}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
