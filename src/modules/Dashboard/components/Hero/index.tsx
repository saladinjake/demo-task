import React from "react";
import {
  HeroWrap,
  LeftSide,
  RightSide,
  StyledButton,
  GraphContainer,
} from "./Hero.styles";

import DashboardCard from "../../../../components/Core/Card/DashboardCard";
import Box from "../../../../components/Core/Box/Box";
import Flex from "../../../../components/Core/Flex/Flex";
import {
  useMediaQueryRequest,
  useCurrentScreenQuery,
} from "../../../../hooks/useMediaQueryRequest";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const dataEmpty = [
  { name: "April 1 2022", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "April 30 20202", value: 1500 },
];
const toHumanReadableDate = (str) => {
  const date = new Date(str);
  const formatted = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formatted;
};
export const GraphSection: React.FC = ({ expensisMetrics, isEmpty }) => {
  console.log(expensisMetrics);
  const dataInput = Array.isArray(expensisMetrics)
    ? expensisMetrics?.map((row, index) => {
        return {
          name:
            index == 0 || index == expensisMetrics.length - 1
              ? toHumanReadableDate(row?.date)
              : "",
          value: row?.amount,
        };
      })
    : [...dataEmpty];
  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dataInput}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#666" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff5403"
            strokeWidth={0.5}
            dot={{ r: 0.5 }}
            activeDot={{ r: 0.6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export const HeroSection: React.FC = ({ expensisMetrics, isEmpty }) => {
  const metrics = [
    { label: "Ledger Balance", value: 5000.0 },
    { label: "Total Payout", value: 5000.0 },
    { label: "Total Revenue", value: 5000.0 },
    { label: "Pending Payout", value: 5000.0 },
  ];

  const currentScreen = useCurrentScreenQuery();

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: "(max-width: 768px)",
  });

  return (
    <Box mx="24">
      <HeroWrap>
        <LeftSide width={hitsBreakPoint ? "100%" : "80%"} mt="8">
          <div className="balance-box">
            <div>
              <div className="label">Available Balance</div>
              <div className="amount">USD 10,000.00</div>
            </div>
            <StyledButton>Withdraw</StyledButton>
          </div>

          {/* Placeholder for graph */}
          <GraphSection expensisMetrics={expensisMetrics} isEmpty={isEmpty} />
        </LeftSide>

        <RightSide mt="12">
          {metrics.map((m) => (
            <DashboardCard
              title={m.label}
              value={m.value}
              width={hitsBreakPoint ? "100%" : "271px"}
              height={"66px"}
              color="black"
            />
          ))}
        </RightSide>
      </HeroWrap>
    </Box>
  );
};
