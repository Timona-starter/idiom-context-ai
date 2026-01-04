import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { scenarios } from "@/lib/scenarioData";
import type { Idiom, ComprehensionQuestion } from "@/lib/scenarioData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const IdiomCard = ({ idiom }: { idiom: Idiom }) => (
  <Card className="bg-gray-800 border-gray-700 text-white mb-6">
    <CardHeader>
      <CardTitle className="text-xl text-cyan-400">{idiom.phrase}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div>
        <h4 className="font-semibold text-lg">Context:</h4>
        <p className="text-gray-300">{idiom.context}</p>
      </div>
      <div>
        <h4 className="font-semibold text-lg">Meaning:</h4>
        <p className="text-gray-300">{idiom.meaning}</p>
      </div>
      <div>
        <h4 className="font-semibold text-lg">Recommended Usage:</h4>
        <p className="text-gray-300">{idiom.usage}</p>
      </div>
    </CardContent>
  </Card>
);

const ComprehensionBlock = ({ 
    questions, 
    blockIndex 
}: { 
    questions: ComprehensionQuestion[], 
    blockIndex: number 
}) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleValueChange = (questionIndex: number, value: string) => {
        setAnswers(prev => ({...prev, [questionIndex]: value}))
    }

    const handleSubmit = () => {
        setSubmitted(true);
        let correctCount = 0;
        questions.forEach((q, i) => {
            if(answers[i] === q.answer) {
                correctCount++;
            }
        });

        if (correctCount === questions.length) {
            toast.success(`Block ${blockIndex + 1} Cleared!`, { description: `You got all ${questions.length} questions right.` });
        } else {
            toast.error(`Block ${blockIndex + 1} Needs Review`, { description: `You got ${correctCount} out of ${questions.length} questions right. Try again!` });
        }
    }

    return (
        <Card className="bg-gray-800 border-gray-700 text-white mb-8">
            <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Comprehension Check - Block {blockIndex + 1}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {questions.map((q, i) => (
                        <div key={i}>
                            <p className="font-semibold mb-3">{i + 1}. {q.question}</p>
                            <RadioGroup onValueChange={(value) => handleValueChange(i, value)} disabled={submitted}>
                                {q.options.map((option, j) => (
                                    <div key={j} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option} id={`q${i}-option${j}`} className="text-cyan-400 border-gray-600"/>
                                        <Label htmlFor={`q${i}-option${j}`} className={`${submitted ? (option === q.answer ? 'text-green-400' : (answers[i] === option ? 'text-red-400' : '')) : ''}`}>
                                            {option}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            {submitted && answers[i] !== q.answer && (
                                <p className="text-sm text-green-400 mt-2">Correct answer: {q.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
                <Button onClick={handleSubmit} disabled={submitted} className="mt-6 bg-cyan-500 hover:bg-cyan-600">
                    Submit Answers
                </Button>
            </CardContent>
        </Card>
    )
}

const ScenarioPage = () => {
  const { scenarioId } = useParams();
  const navigate = useNavigate();
  const scenario = scenarios.find((s) => s.id === scenarioId);

  if (!scenario) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Scenario not found</h2>
        <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
      </div>
    );
  }

  const idiomBlocks = [];
  for (let i = 0; i < scenario.idioms.length; i += 5) {
    idiomBlocks.push(scenario.idioms.slice(i, i + 5));
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => navigate("/dashboard")} variant="outline" className="mb-8 bg-gray-800 hover:bg-gray-700">
          &larr; Back to Scenarios
        </Button>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">{scenario.title}</h1>
        <p className="text-lg text-gray-400 mb-10">{scenario.description}</p>

        {idiomBlocks.map((block, blockIndex) => (
          <div key={blockIndex}>
            {block.map((idiom, idiomIndex) => (
              <IdiomCard key={idiomIndex} idiom={idiom} />
            ))}
            {scenario.questions[blockIndex] && (
              <ComprehensionBlock questions={scenario.questions[blockIndex]} blockIndex={blockIndex} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioPage;
