import React from "react";
import { render } from "@testing-library/react";
import Album from "../components/Album";

describe("Album", () => {
  let selectedAlbum = {
    id: 1,
    title: "Album 1",
    photos: [{ id: 1, title: "Photo 1" }],
  };
  it("should render the correct album title", () => {
    render(<Album album={selectedAlbum} />);
    // use the screen.getByText method to check the album title
    // use the .toBeInTheDocument() method to check that the album title is in the document
    expect(screen.getByText("Album 1")).toBeInTheDocument();
  });

  it("should render the correct number of photos", () => {
    render(<Album album={selectedAlbum} />);
    // use the screen.getByText method to check the number of photos
    // use the .toBeInTheDocument() method to check that the number of photos is in the document
    expect(screen.getByText("1 photo")).toBeInTheDocument();
  });

  it("should navigate to the photo page when a photo is clicked", async () => {
    const historyMock = { push: jest.fn() };
    render(<Album album={selectedAlbum} history={historyMock} />);
    fireEvent.click(screen.getByText("Photo 1"));
    // use the waitFor method to wait for the history.push method to be called
    await waitFor(() => {
      expect(historyMock.push).toHaveBeenCalledWith("/photos/1");
    });
  });
});
