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

// const data = [
//   { name: "April 1 2022", value: 3000 },
//   { name: "", value: 4200 },
//   { name: "", value: 2900 },
//   { name: "", value: 5000 },
//   { name: "", value: 6200 },
//   { name: "", value: 4800 },
//   { name: "April 30 20202", value: 7100 },
// ];

const dataEmpty = [
  { name: "April 1 2022", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "", value: 750 },
  { name: "April 30 20202", value: 1500 },
];

export const GraphSection: React.FC = () => {
  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dataEmpty}>
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

export const HeroSection: React.FC = () => {
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
          <GraphSection />
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
