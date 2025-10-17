import React from "react";
import { INavbarProps } from "./Navbar.types";

import { StyledHeader } from "./Navbar.styles";

const Navbar: React.FC<INavbarProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Navbar;
