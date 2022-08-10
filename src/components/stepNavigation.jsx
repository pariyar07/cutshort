import Stepper from "react-stepper-horizontal";

const StepNavigation = () => {
  return (
    <>
      <Stepper
        steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
        activeStep={1}
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
