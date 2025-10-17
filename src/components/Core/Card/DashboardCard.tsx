import React from "react";
import Card from "./Card";
import Text from "../Text/Text";
import { IDashboardCardProps } from "./Card.types";
import libraryConfig from "../../libraryConfig";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
const { colors } = libraryConfig;
import { Svg } from "../../../assets/svg";
import CountUp from "react-countup";
const { QuestionIcon } = Svg;
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
      <Box width="100%">
        <Flex justifyContent="between" mt="2" width="100%" gap="40">
          <Text color="#56616b" fontSize="14px" fontFamily="Degular">
            {title}
          </Text>
          <QuestionIcon />
        </Flex>
        <Box height={"6px"}></Box>
        <Text color={color || colors.AppBlack} fontSize="20px" fontWeight="800">
          USD <CountUp end={value} duration={1.8} separator="," />
        </Text>
      </Box>
    </Card>
  );
};

export default DashboardCard;
