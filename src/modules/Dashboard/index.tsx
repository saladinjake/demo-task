import Navigation from "./components/Navigation";
import { HeroSection } from "./components/Hero";
import { EmptyTransactions } from "./components/Transactions/EmptyTransaction";
import { TransactionList } from "./components/Transactions/Transactions";
import { FilterSection } from "./components/Filters";
import { useState } from "react";
const Dashboard = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <>
      <Navigation />
      <HeroSection />
      <FilterSection />
      {isEmpty ? <EmptyTransactions /> : <TransactionList />}
    </>
  );
};

export default Dashboard;
