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
  HambuggerStyleMobile,
} from "../../../../components/Core/Navbar/Navbar.styles";
import {
  useMediaQueryRequest,
  useCurrentScreenQuery,
  gridIntersects,
} from "../../../../hooks/useMediaQueryRequest";

import useForm, { model } from "../../../../hooks/useForm";
import { useState } from "react";
import Grid from "../../../../components/Core/Grid";
import { PillButton } from "./FilterForms.style";

import DatePicker from "../../../../components/Core/DatePicker/DatePicker";
import MultiSelect from "../../../../components/Core/Select/MultiSelect";
const { Hambugger } = Svg;

const CountIcon = ({ count }) => {
  return <StyledCount>{count}</StyledCount>;
};
export const FilterSection = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const currentScreen = useCurrentScreenQuery();

  const [financialDate, setFinancialDate] = useState<Date | string>(new Date());
  const [endDate, setEndDate] = useState<Date | string>(new Date());

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: "(max-width: 768px)",
  });

  const overlayVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [initialValues, setIntialValues] = useState({
    financialDate: new Date(),
    endDate: new Date(),
    transactionStatus: [],
    transactionType: [],
  });

  const validations = (values: any) => {
    const errors = {
      ...model("transactionStatus")(values.transactionStatus)(
        "isRequired|isDigit|min:3|max:4",
      ),
      // ...model("transactionType")(values.transactionType)("isRequired"),
      // ...model("financialDate")(values.financialDate)("isRequired"),
      ...model("endDate")(values.endDate)("isRequired"),
    };

    return errors;
  };

  const { values, handleChange, handleSubmit, invalid, errors, touched } =
    useForm({
      initialValues,
      validations,
      onSubmit() {
        //setShowInformationModal(true);
      },
    });

  const transactionTypes = [
    {
      name: "Store Transactions",
      value: "Store Transactions",
    },

    { name: "Got Tipped", id: "Got Tipped" },
    {
      name: "Withdrawals",
      id: "Withdrawals",
    },
    {
      name: "Chargebacks",
      id: "Chargebacks",
    },
    {
      name: "Cashbacks",
      id: "Cashbacks",
    },
    {
      name: "Refer & Earn",
      id: "Refer & Earn",
    },
  ];
  const transactionStatus = [
    { name: "Pending", id: "Pending" },
    { name: "Successful", id: "Successful" },
    { name: "Failed", id: "Failed" },
  ];

  const varVariant: any = getDrawerVariants("left");
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
            onClick={() => setOpenFilter(true)}
          >
            Filter
          </Button>
          <Button variant="outline" endIcon={[<ExportDropDown />]}>
            Export list
          </Button>
        </Flex>
      </Flex>

      <AnimatePresence>
        {openFilter && (
          <Overlay
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVar}
            onClick={() => setOpenFilter(false)}
          >
            <DrawerPanel
              onClick={(e) => e.stopPropagation()}
              side="right" // or "left"
              variants={varVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              width="460px"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "-20px",
                }}
              >
                <Text fontSize="15px" fontWeight="900">
                  Filter
                </Text>

                <svg
                  onClick={() => setOpenFilter(false)}
                  aria-label="Close menu"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_15421_753"
                    maskUnits="userSpaceOnUse"
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                  >
                    <rect x="4" y="4" width="24" height="24" fill="#C4C4C4" />
                  </mask>
                  <g mask="url(#mask0_15421_753)">
                    <path
                      d="M10.4 22.3L9.69995 21.6L15.3 16L9.69995 10.4L10.4 9.70001L16 15.3L21.6 9.70001L22.3 10.4L16.7 16L22.3 21.6L21.6 22.3L16 16.7L10.4 22.3Z"
                      fill="#131316"
                    />
                  </g>
                </svg>
              </div>

              <Flex
                justifyContent="between"
                gap="5px"
                direction="row"
                m="2"
                width="100%"
                py="4"
                p="2"
              >
                <PillButton>Today</PillButton>
                <PillButton>Last 7 days</PillButton>
                <PillButton>This Month</PillButton>
                <PillButton>Last 3 Months</PillButton>
              </Flex>

              <Grid
                templateColumn={
                  /*gridIntersects(currentScreen)*/ "repeat(2, 1fr)"
                }
                templateRow=""
                gap="40px 60px"
                width="100%"
              >
                <Grid.Item>
                  <DatePicker
                    width="180px"
                    date={financialDate}
                    setDate={(date) => setFinancialDate(date)}
                    label="Date Range"
                  />
                </Grid.Item>

                <Grid.Item>
                  <DatePicker
                    width="180px"
                    date={financialDate}
                    setDate={(date) => setFinancialDate(date)}
                    label="Date Range"
                  />
                </Grid.Item>

                <Grid.Item columnStart={"1"} columnEnd="-1">
                  <MultiSelect
                    required
                    label="Transaction Types"
                    name="transactionType"
                    values={values?.transactionType}
                    valueArg="id"
                    options={transactionTypes}
                    onChange={handleChange}
                    variant="outline"
                    width="100%"
                  />
                </Grid.Item>

                <Grid.Item columnStart={"1"} columnEnd="-1">
                  <MultiSelect
                    required
                    label="Transaction Status"
                    name="glCodes"
                    values={values?.transactionStatus}
                    valueArg="id"
                    options={transactionStatus}
                    onChange={handleChange}
                    variant="outline"
                    width="100%"
                  />
                </Grid.Item>
              </Grid>
            </DrawerPanel>
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
