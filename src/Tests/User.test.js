import React from "react";
import { render, fireEvent } from "@testing-library/react";
import User from "../components/User";

describe("User", () => {
  let selectedUser = {
    name: "John Doe",
    id: 1,
    albums: [{ id: 1, title: "Album 1" }],
  };
  it("should render the correct user name", () => {
    render(<User user={selectedUser} />);
    // use the screen.getByText method to check the user name
    // use the .toBeInTheDocument() method to check that the user name is in the document
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("should render the correct number of albums", () => {
    render(<User user={selectedUser} />);
    // use the screen.getByText method to check the number of albums
    // use the .toBeInTheDocument() method to check that the number of albums is in the document
    expect(screen.getByText("1 album")).toBeInTheDocument();
  });

  it("should navigate to the album page when an album is clicked", async () => {
    const historyMock = { push: jest.fn() };
    render(<User user={selectedUser} history={historyMock} />);
    fireEvent.click(screen.getByText("Album 1"));
    // use the waitFor method to wait for the history.push method to be called
    await waitFor(() => {
      expect(historyMock.push).toHaveBeenCalledWith("/albums/1");
    });
  });
});
