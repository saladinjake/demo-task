import React from "react";
import Card from "./Card";
import Text from "../Text/Text";
import { IDashboardCardProps } from "./Card.types";
import libraryConfig from "../../libraryConfig";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
const { colors } = libraryConfig;

const DashboardCard: React.FC<IDashboardCardProps> = ({
  title,
  value,
  color,
  width,
  height,
  withBorder = false,
}) => {
  return (
    <Card width={width} height={height} withBorder={false}>
      <Box>
        <Text color="#56616b" fontSize="14px" fontFamily="Degular">
          {title}
        </Text>
        <Box height={"6px"}></Box>
        <Text color={color || colors.AppBlack} fontSize="20px" fontWeight="800">
          {value}
        </Text>
      </Box>
    </Card>
  );
};

export default DashboardCard;
