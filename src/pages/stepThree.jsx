import Heading from "components/common/heading";
import SubHeading from "components/common/subHeading";
import Button from "components/common/button";
import StepThreeChoices from "components/stepThreeChoices";
import { Link } from "react-router-dom";

const StepThree = () => {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="flex flex-col items-center laptop:mt-12">
        <Heading headingText="How are you planning to use Eden?" />
        <SubHeading subHeadingText="We'll streamline your setup experience accordingly." />
      </div>
      <StepThreeChoices />
      <Link to="/stepfour" className="w-full">
        <Button buttonText="Create Workspace" />
      </Link>
    </div>
  );
};

export default StepThree;
