import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import MainLayout from "@/components/layout/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const LeadershipDashboardPage = lazy(() => import("./pages/LeadershipDashboardPage"));
const ScenarioPage = lazy(() => import("./pages/ScenarioPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/leadership" element={<LeadershipDashboardPage />} />
            <Route path="/scenario/:scenarioId" element={<ScenarioPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster richColors />
    </Router>
  );
};

export default App;