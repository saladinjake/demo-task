import { Svg } from "../../../../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import Flex from "../../../../components/Core/Flex/Flex";
import Box from "../../../../components/Core/Box/Box";

const { Incoming, Outgoing } = Svg;
import styled from "styled-components";

const TransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
`;

const TransactionTableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f2f2f3;
  &:last-child {
    border-bottom: none;
  }
`;

const LeftColumnContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const IconWrapperBox = styled.div<{ type: "in" | "out" }>`
  background: ${({ type }) => (type === "in" ? "#eafaf1" : "#fff4f2")};
  color: ${({ type }) => (type === "in" ? "#1a7f46" : "#d63a25")};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailInformationBox = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 0.95rem;
    color: #111;
    margin: 0;
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
    color: #6b6b6b;
    margin: 0.25rem 0 0;
  }
`;

const RightColumnContentBox = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .amount {
    font-weight: 600;
    color: #111;
  }
  .date {
    font-size: 0.8rem;
    color: #888;
  }
`;

export const TransactionList = ({ data }) => {
  const transactions = [
    {
      id: 1,
      title: "Psychology of Money",
      subtitle: "Roy Clash",
      type: "in",
      amount: "USD 600",
      date: "Apr 03, 2022",
    },
    {
      id: 2,
      title: "Buy me a coffee",
      subtitle: "Another Smart",
      type: "in",
      amount: "USD 100",
      date: "Apr 02, 2022",
    },
    {
      id: 3,
      title: "Cash withdrawal",
      subtitle: "Successful",
      type: "out",
      amount: "USD 3000.35",
      date: "Apr 03, 2022",
    },
  ];

  return (
    <Box px="20" py="10" mx="auto">
      <TransactionWrapper>
        {data &&
          data.map((tx) => (
            <TransactionTableRow key={tx.id}>
              <LeftColumnContentBox>
                <IconWrapperBox type={tx?.status}>
                  {tx.status === "successful" ? <Incoming /> : <Outgoing />}
                </IconWrapperBox>
                <DetailInformationBox>
                  <h4>{tx?.metadata?.product_name}</h4>
                  <p>{tx?.metadata?.name}</p>
                </DetailInformationBox>
              </LeftColumnContentBox>

              <RightColumnContentBox>
                <span className="amount">{tx?.amount}</span>
                <span className="date">{tx?.date}</span>
              </RightColumnContentBox>
            </TransactionTableRow>
          ))}
      </TransactionWrapper>
    </Box>
  );
};
