import Logo from "components/common/logo";
import OnboardingPage from "pages/onboardingPage";
import StepNavigation from "components/stepNavigation";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col items-center justify-center">
      <Logo />
      <StepNavigation />
      <OnboardingPage />
    </div>
  );
}

export default App;
