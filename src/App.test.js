import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import NameInput from "./components/BookingForm/NameInput";
import PhoneNumberInput from "./components/BookingForm/PhoneNumberInput";
import RoomCard from "./components/RoomCard";

test("Renders SOMA Booking header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SOMA Booking/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders subheading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Book with ease./i);
  expect(linkElement).toBeInTheDocument();
});

test("Types into name", () => {
  render(<NameInput />);
  userEvent.type(
    screen.getByPlaceholderText("Reservation Name"),
    "Room for two"
  );
  expect(screen.getByPlaceholderText("Reservation Name")).toHaveValue(
    "Room for two"
  );
});

test("Types into phone", () => {
  render(<PhoneNumberInput />);
  userEvent.type(screen.getByPlaceholderText("Phone Number"), "1234567890");
  expect(screen.getByPlaceholderText("Phone Number")).toHaveValue("1234567890");
});

test("Books and removes a room", async () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText("Reservation Name"), "Josh");
  userEvent.type(screen.getByPlaceholderText("Phone Number"), "8888888888");
  userEvent.click(screen.getByTestId("book-room-1"));
  const roomNumber = await screen.findByTestId("room-1-number");
  const roomName = await screen.findByTestId("room-1-name");
  const roomOccupants = await screen.findByTestId("room-1-occupants");
  expect(roomNumber).toHaveTextContent(/Room #1/i);
  expect(roomName).toHaveTextContent(/Name: Josh/i);
  expect(roomOccupants).toHaveTextContent(/Occupants: 1/i);
  userEvent.click(screen.getByText("Checkout Guest"));
  const openRooms = await screen.findAllByText("Book Room");
  expect(openRooms).toHaveLength(5);
});

test("Requires a name", async () => {
  render(<App />);
  jest.spyOn(window, "alert").mockImplementation(() => {});
  userEvent.click(screen.getAllByText("Book Room")[0]);
  expect(window.alert).toBeCalledWith("Please enter a name!");
});

test("Requires a phone number", async () => {
  render(<App />);
  jest.spyOn(window, "alert").mockImplementation(() => {});
  userEvent.type(screen.getByPlaceholderText("Reservation Name"), "Kelly");
  userEvent.click(screen.getAllByText("Book Room")[0]);
  expect(window.alert).toBeCalledWith("Please enter a phone number!");
});
