import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Svg } from "../../../../assets/svg";

const { EmptyBook } = Svg;

export const EmptyTransactions: React.FC = () => {
  return (
    <EmptyWrap
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <EmptyCard>
        <EmptyIcon>
          <EmptyBook />
        </EmptyIcon>

        <Title>No matching transaction found for the selected filter</Title>

        <Subtitle>
          Change your filters to see more results, or add a new
          transaction/product.
        </Subtitle>

        <ClearButton>Clear Filter</ClearButton>
      </EmptyCard>
    </EmptyWrap>
  );
};

export const EmptyWrap = styled(motion.section)`
  max-width: 1180px;
  margin: 48px auto;
  padding: 64px 16px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
`;

export const EmptyCard = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 48px 24px;
  max-width: 369px;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 16px;
`;

export const EmptyIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: left;
  justify-content: center;
  font-size: 22px;
  color: #000;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: Degular;
  font-weight: 700;
  font-style: Bold;
  font-size: 28px;
  leading-trim: NONE;
  line-height: 40px;
  letter-spacing: -0.6px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.5;
  margin: 0 0 8px 0;

  font-family: Degular;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 24px;
  letter-spacing: -0.2px;
`;

export const ClearButton = styled.button`
  background: #e6e6e6;
  color: #000;
  border: none;
  border-radius: 24px;
  padding: 10px 24px;
  font-weight: 600;
  cursor: pointer;
  width: 117px;
  font-size: 12px;
  height: 48px;
  transition:
    transform 0.2s,
    background 0.2s;
  &:hover {
    transform: translateY(-2px);
    background: #e6e6e6;
  }
`;
