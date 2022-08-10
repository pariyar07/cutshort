import { useState, useEffect } from "react";
import Stepper from "react-stepper-horizontal";
import { useLocation } from "react-router-dom";

const StepNavigation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentStep(0);
    } else if (location.pathname === "/steptwo") {
      setCurrentStep(1);
    } else if (location.pathname === "/stepthree") {
      setCurrentStep(2);
    } else setCurrentStep(3);
  }, [location.pathname]);

  return (
    <>
      <Stepper
        steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
        activeStep={currentStep}
        activeColor="#664de5"
        defaultColor="#8993a5"
        completeColor="#664de5"
        circleFontColor="#fff"
        completeCircleFontColor="#fff"
        size={32}
        circleFontSize={12}
        defaultBorderColor="#BAC2D1"
        defaultBorderWidth={1}
        completeBarColor="#664de5"
      />
    </>
  );
};

export default StepNavigation;
