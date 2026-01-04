import type { Scenario } from "@/lib/scenarioData";

interface ScenarioCardProps {
  scenario: Scenario;
  onSelect: (scenario: Scenario) => void;
}

export const ScenarioCard = ({ scenario, onSelect }: ScenarioCardProps) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
      onClick={() => onSelect(scenario)}
    >
      <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
      <p className="text-gray-400">{scenario.description}</p>
    </div>
  );
};
