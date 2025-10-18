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
import { useState } from "react";
import { getUserWallet } from "../../../../api/services/User";
import { useQuery } from "@tanstack/react-query";

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
export const GraphSection = ({
  expensisMetrics,
  isEmpty,
}: {
  expensisMetrics: any;
  isEmpty: boolean;
}) => {
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

export const HeroSection = ({
  expensisMetrics,
  isEmpty,
}: {
  expensisMetrics: any;
  isEmpty: boolean;
}) => {
  const metricsDemo = [
    { label: "Ledger Balance", value: 5000.0 },
    { label: "Total Payout", value: 5000.0 },
    { label: "Total Revenue", value: 5000.0 },
    { label: "Pending Payout", value: 5000.0 },
  ];

  const [balanceMetrics, setData] = useState([]);
  const buildData = (obj) => {
    return Object.entries(obj).map(([key, value]) => {
      const newKey = key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { label: newKey, value };
    });
  };

  const walletBalanceMutation = useQuery(
    ["get_customer__wallet_balance"],
    () => getUserWallet(),
    {
      enabled: true,
      onSuccess(response) {
        console.log(response?.data, "<<<");
        const result = response?.data;
        result ? setData(buildData(result)) : setData([]);
      },
      onError(response) {
        setData([]);
      },
    },
  );

  const currentScreen = useCurrentScreenQuery();

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: "(max-width: 768px)",
  });

  console.log(balanceMetrics);
  return (
    <Box mx="24">
      <HeroWrap>
        <LeftSide width={hitsBreakPoint ? "100%" : "80%"} mt="8">
          <div className="balance-box">
            <div>
              <div className="label">Available Balance</div>
              <div className="amount">
                {Array.isArray(balanceMetrics) && balanceMetrics.length > 0
                  ? balanceMetrics[0].value
                  : 0.0}
              </div>
            </div>
            <StyledButton>Withdraw</StyledButton>
          </div>

          {/* Placeholder for graph */}
          <GraphSection expensisMetrics={expensisMetrics} isEmpty={isEmpty} />
        </LeftSide>

        <RightSide mt="12">
          {balanceMetrics &&
            balanceMetrics.map((m) => (
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
