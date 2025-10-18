import Box from "../../../../components/Core/Box/Box";
import Flex from "../../../../components/Core/Flex/Flex";
import Button from "../../../../components/Core/Button/Button";
import Text from "../../../../components/Core/Text/Text";
import { Svg } from "../../../../assets/svg";
import styled from "styled-components";
const { DropDown, EmptyBook, ExportDropDown } = Svg;
import { motion, AnimatePresence } from "framer-motion";
import {
  Overlay,
  DrawerPanel,
  getDrawerVariants,
} from "../../../../components/Core/Navbar/Navbar.styles";
import {
  useMediaQueryRequest,
  useCurrentScreenQuery,
} from "../../../../hooks/useMediaQueryRequest";

const CountIcon = ({ count }) => {
  <StyledCount>{count}</StyledCount>;
};
export const FilterSection = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const currentScreen = useCurrentScreenQuery();

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: "(max-width: 768px)",
  });

  return (
    <Box mx="auto" width="90%" mt="8" py="16">
      <Flex justifyContent="between">
        <Box>
          <Flex direction="column" justifyContent="start" gap="12px">
            <Box>
              <Text color="#000" fontWeight="600" fontSize="16">
                0 Transactions
              </Text>
            </Box>
            <Box>
              <Text color="gray" fontSize="12px">
                Your transactions for All Time
              </Text>
            </Box>
          </Flex>
        </Box>

        <Flex direction="row" justifyContent="end" gap="12px">
          <Button
            variant="outline"
            endIcon={[<CountIcon count="2" />, <DropDown />]}
          >
            Filter
          </Button>
          <Button variant="outline" endIcon={[<ExportDropDown />]}>
            Export list
          </Button>
        </Flex>
      </Flex>

      <AnimatePresence>
        {openFilter && hitsBreakPoint && (
          <Overlay
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVar}
            onClick={() => setOpen(false)}
          >
            <DrawerPanel
              onClick={(e) => e.stopPropagation()}
              side="right" // or "left"
              variants={getDrawerVariants("right")}
              initial="hidden"
              animate="visible"
              exit="exit"
            ></DrawerPanel>
          </Overlay>
        )}
      </AnimatePresence>
    </Box>
  );
};

const StyledCount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: black;
  padding: 5px;
`;
