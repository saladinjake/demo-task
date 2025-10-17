import React from "react";
import { HeroWrap, LeftSide, RightSide, StyledButton } from "./Hero.styles";

import DashboardCard from "../../../../components/Core/Card/DashboardCard";
import Box from "../../../../components/Core/Box/Box";
import Flex from "../../../../components/Core/Flex/Flex";
import {
  useMediaQueryRequest,
  useCurrentScreenQuery,
} from "../../../../hooks/useMediaQueryRequest";

export const HeroSection: React.FC = () => {
  const metrics = [
    { label: "Ledger Balance", value: "USD 5000.00" },
    { label: "Total Payout", value: "USD 5000.00" },
    { label: "Total Revenue", value: "USD 5000.00" },
    { label: "Pending Payout", value: "USD 5000.00" },
  ];

  const currentScreen = useCurrentScreenQuery();

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: "(max-width: 768px)",
  });

  return (
    <Box mx="28">
      <HeroWrap>
        <LeftSide width={hitsBreakPoint ? "100%" : "80%"} mt="12">
          <div className="balance-box">
            <div>
              <div className="label">Available Balance</div>
              <div className="amount">USD 10,000.00</div>
            </div>
            <StyledButton>Withdraw</StyledButton>
          </div>

          <div className="graph-box">
            {/* Placeholder for graph */}
            Graph Section
          </div>
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
