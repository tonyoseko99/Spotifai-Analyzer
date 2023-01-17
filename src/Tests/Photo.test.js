import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Photo from "../Photo";

describe("Photo", () => {
  let selectedPhoto = {
    id: 1,
    title: "Photo 1",
    url: "http://example.com/photo1.jpg",
  };
  it("should render the correct photo title", () => {
    render(<Photo photo={selectedPhoto} />);
    // use the screen.getByText method to check the photo title
    // use the .toBeInTheDocument() method to check that the photo title is in the document
    expect(screen.getByText("Photo 1")).toBeInTheDocument();
  });

  it("should display the photo", () => {
    render(<Photo photo={selectedPhoto} />);
    // use the screen.getByRole method to check the photo is displayed
    // use the .toBeInTheDocument() method to check that the photo is in the document
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should update the title when the form is submitted", async () => {
    const mockFn = jest.fn();
    render(<Photo photo={selectedPhoto} updateTitle={mockFn} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Title" } });
    fireEvent.submit(screen.getByRole("button"));
    // use the waitFor method to wait for the updateTitle method to be called
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledWith({ id: 1, title: "New Title" });
    });
  });
});
