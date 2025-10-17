import Navigation from "./components/Navigation";
import { HeroSection } from "./components/Hero";
import { EmptyTransactions } from "./components/Transactions/EmptyTransaction";
import { FilterSection } from "./components/Filters";
const Dashboard = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FilterSection />
      <EmptyTransactions />
    </>
  );
};

export default Dashboard;
