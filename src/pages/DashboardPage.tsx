import { useNavigate } from "react-router-dom";
import { ScenarioSelection } from "@/components/dashboard/ScenarioSelection";
import { scenarios } from "@/lib/scenarioData";
import type { Scenario } from "@/lib/scenarioData";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleScenarioClick = (scenario: Scenario) => {
    navigate(`/scenario/${scenario.id}`);
  };

  return (
    <div className="flex-grow p-6 md:p-10 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <ScenarioSelection
        scenarios={scenarios}
        onScenarioClick={handleScenarioClick}
        title="Choose Your Scenario"
        subtitle="Select a scenario to practice your conversational skills and learn new idioms."
      />
    </div>
  );
};

export default DashboardPage;
