import styled from "styled-components";
import { motion } from "framer-motion";
import Flex from "../../../../components/Core/Flex/Flex";
const bp = {
  md: "768px",
};

export const HeroWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 10px 10px;
  color: #fff;
  max-width: 1180px;
  margin: 0 auto;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 48px;
  }
`;

/* Left side (graph + available balance) */
export const LeftSide = styled(Flex)`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .balance-box {
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    .label {
      font-size: 14px;
      opacity: 0.8;

      font-family: Degular;
      font-weight: 500;
      font-style: Medium;
      font-size: 14px;
      leading-trim: NONE;
      line-height: 16px;
      letter-spacing: -0.2px;
      text-align: left;
      vertical-align: middle;
      color: #56616b;
    }

    .amount {
      font-family: Degular;
      font-weight: 700;
      font-style: Bold;
      font-size: 36px;
      leading-trim: NONE;
      line-height: 48px;
      letter-spacing: -1.5px;
      text-align: center;
      vertical-align: middle;
      color: black;
    }
  }

  .graph-box {
    height: 240px;

    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
  }
  @media (min-width: ${bp.md}) {
    .graph-box {
      height: 280px;
    }
  }
`;

/* Right side (metrics vertically stacked) */
export const RightSide = styled(Flex)`
  flex: 0.8;
  display: grid;
  gap: 16px;

  @media (min-width: ${bp.md}) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled.button`
  width: 130px;
  background: black;
  padding: 5px;
  height: 40px;
  color: #fff;
  border-radius: 100px;

  padding: 10px 24px;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.15s;
  &:hover {
    transform: translateY(-2px);
  }
`;
