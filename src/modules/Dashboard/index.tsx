import Navigation from "./components/Navigation";
import { HeroSection } from "./components/Hero";
import { EmptyTransactions } from "./components/Transactions/EmptyTransaction";
const Dashboard = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <EmptyTransactions />
    </>
  );
};

export default Dashboard;
