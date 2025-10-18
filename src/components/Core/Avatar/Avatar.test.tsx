import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar component", () => {
  it("renders an image when type is 'image'", () => {
    render(<Avatar type="image" src="avatar.jpg" name="User Name" />);
    const img = screen.getByRole("img", { name: /User Name/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "avatar.jpg");
  });

  it("renders text when type is not 'image'", () => {
    render(<Avatar type="text" text="AB" />);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  // it("applies default props", () => {
  //   render(<Avatar src="avatar.jpg" name="Default Avatar" />);
  //   const container = screen.getByText("Avatar").parentElement;
  //   expect(container).toHaveAttribute("shape", "square");
  //   expect(container).toHaveAttribute("size", "md");
  // });
});
