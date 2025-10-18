import { getAllUsersTransactions } from "../api/services/User";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export const useGetTransactionLogs = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState([]);

  const transactionLogsMutation = useQuery(
    ["get_customer_transactions"],
    () => getAllUsersTransactions(),
    {
      enabled: true,
      onSuccess(response) {
        response.length > 0 ? setData(response) : setIsEmpty(true);
      },
      onError(response) {
        setIsEmpty(true);
      },
    },
  );
  return {
    transactionLogsMutation,
    data,
    isEmpty,
  };
};
