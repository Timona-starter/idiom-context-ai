import { useNavigate } from "react-router-dom";
import { ScenarioSelection } from "@/components/dashboard/ScenarioSelection";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { Footer } from "@/components/layout/Footer";
import { scenarios } from "@/lib/scenarioData";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const HomePage = () => {
  const navigate = useNavigate();

  const handleScenarioClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <HomeHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-800 text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Master English Conversations, Effortlessly</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build fluency and confidence with interactive, real-world scenarios designed to improve your conversational skills.
          </p>
          <Button size="lg" onClick={() => navigate('/signup')}>Get Started for Free</Button>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About {APP_NAME}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Welcome to {APP_NAME}, your personal guide to mastering English communication. Our platform is built on the belief that the best way to learn a language is by using it in context. We provide a variety of realistic scenarios—from professional settings to casual chats—that challenge you to think on your feet and respond naturally. Our goal is to take you beyond textbook learning and into a world of confident, real-world conversation.
            </p>
          </div>
        </section>

        <section id="scenarios">
          <ScenarioSelection
            scenarios={scenarios}
            onScenarioClick={handleScenarioClick}
            title="Practice with Real-World Scenarios"
            subtitle="Click any scenario to begin your journey. Your first step is to sign up and unlock your potential!"
          />
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;