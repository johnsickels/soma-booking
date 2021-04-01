import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import NameInput from "./components/BookingForm/NameInput";
import PhoneNumberInput from "./components/BookingForm/PhoneNumberInput";
import NumberOfOccupantsInput from "./components/BookingForm/NumberOfOccupantsInput";

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
