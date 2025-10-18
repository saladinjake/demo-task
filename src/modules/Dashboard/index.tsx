import Navigation from "./components/Navigation";
import { HeroSection } from "./components/Hero";
import { EmptyTransactions } from "./components/Transactions/EmptyTransaction";
import { TransactionList } from "./components/Transactions/Transactions";
import { FilterSection } from "./components/Filters";
import { FloatingSidebar } from "./FloatingSideBar";
import { useState } from "react";
import { useGetTransactionLogs } from "../../hooks/useGetTransactionLogs";
import { getAllUsersTransactions } from "api/services/User";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data, isEmpty } = useGetTransactionLogs();

  return (
    <>
      <Navigation />
      <HeroSection expensisMetrics={data} isEmpty={isEmpty} />
      <FilterSection total={data?.length ?? 0} />
      {isEmpty ? <EmptyTransactions /> : <TransactionList data={data} />}
      <FloatingSidebar />
    </>
  );
};

export default Dashboard;
