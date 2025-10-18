import Navigation from "./components/Navigation";
import { HeroSection } from "./components/Hero";
import { EmptyTransactions } from "./components/Transactions/EmptyTransaction";
import { TransactionList } from "./components/Transactions/Transactions";
import { FilterSection } from "./components/Filters";
import { FloatingSidebar } from "../../components/shared/FloatingSideBar";
import { useState } from "react";

import { getAllUsersTransactions } from "api/services/User";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState(null);

  const profileMutation = useQuery(
    ["get_customer_transactions"],
    () => getAllUsersTransactions(),
    {
      enabled: true,
      onSuccess(response) {
        console.log(response, "<<<");
        setData(response);
      },
      onError(response) {
        setIsEmpty(true);
      },
    },
  );

  return (
    <>
      <Navigation />
      <HeroSection />
      <FilterSection />
      {isEmpty ? <EmptyTransactions /> : <TransactionList data={data} />}
      <FloatingSidebar />
    </>
  );
};

export default Dashboard;
