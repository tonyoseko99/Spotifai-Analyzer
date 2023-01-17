import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  it("should render the correct number of albums for each user", () => {
    render(<Home />);
    // use the screen.getByText method to check the number of albums
    // use the .toBeInTheDocument() method to check that the number
    // of albums is in the document
    expect(screen.getByText("3 albums")).toBeInTheDocument();
  });

  //   display all the users from the API
  it("should display all the users from the API", () => {
    render(<Home />);
    // use the screen.getByText method to check the number of users
    // use the .toBeInTheDocument() method to check that the number
    // of users is in the document
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Bob Doe")).toBeInTheDocument();
  });

  //   call the correct action when a user is clicked
  it("should call the correct action when a user is clicked", async () => {
    const mockFn = jest.fn();
    render(<Home onUserClick={mockFn} />);
    fireEvent.click(screen.getByText("John Doe"));
    // use the waitFor method to wait for the mock function to be called
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
