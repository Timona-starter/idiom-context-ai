import { ScenarioCard } from "./ScenarioCard";
import type { Scenario } from "@/lib/scenarioData";

interface ScenarioSelectionProps {
  scenarios: Scenario[];
  onScenarioClick: (scenario: Scenario) => void;
  title: string;
  subtitle: string;
}

export const ScenarioSelection = ({ scenarios, onScenarioClick, title, subtitle }: ScenarioSelectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-lg text-gray-400">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              onSelect={() => onScenarioClick(scenario)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
