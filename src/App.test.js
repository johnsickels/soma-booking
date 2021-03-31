import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders SOMA Booking header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SOMA Booking/i);
  expect(linkElement).toBeInTheDocument();
});
