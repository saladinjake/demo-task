import Box from "../../../../components/Core/Box/Box";
import Flex from "../../../../components/Core/Flex/Flex";
export const FilterSection = () => {
  return (
    <Box mx="auto" width="90%">
      <Flex justifyContent="between">
        <Flex flextDirection="column" justifyContent="start"></Flex>

        <Flex flextDirection="row" justifyContent="end"></Flex>
      </Flex>
    </Box>
  );
};
