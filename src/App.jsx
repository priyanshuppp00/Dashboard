import { DashboardProvider } from "./src/context/DashboardContext";
import Dashboard from "./src/components/Dashboard";

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;
