import React from "react";
import { StyledCard } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({
  children,
  width,
  height,
  withBorder = false,
}) => {
  return (
    <StyledCard width={width} height={height} withBorder>
      {children}
    </StyledCard>
  );
};

export default Card;
