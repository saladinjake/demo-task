import DashboardManagement from "./modules/Dashboard";
import { useAuth } from "./hooks/useAuth";
import Loader from "./components/Shared/loading";
function App() {
  const { loading, login, user } = useAuth();
  return <>{user ? <DashboardManagement /> : <Loader />}</>;
}
export default App;
