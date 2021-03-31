import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders SOMA Booking header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SOMA Booking/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders subheading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Book with ease./i);
  expect(linkElement).toBeInTheDocument();
});

test("type into name", () => {
  render(<App />);
  userEvent.type(
    screen.getByPlaceholderText("Reservation Name"),
    "Room for two"
  );
  expect(screen.getByPlaceholderText("Reservation Name")).toHaveValue(
    "Room for two"
  );
});

test("type into phone", () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText("Phone Number"), "1234567890");
  expect(screen.getByPlaceholderText("Phone Number")).toHaveValue("1234567890");
});
