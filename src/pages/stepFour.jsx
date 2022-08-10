import Heading from "components/common/heading";
import SubHeading from "components/common/subHeading";
import Button from "components/common/button";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const StepFour = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center laptop:mt-12">
        <span className="bg-purple rounded-full p-6 mb-8">
          <TiTick className="text-white text-xl" />
        </span>
        <Heading headingText="Congratulations, User!" />
        <SubHeading subHeadingText="You have completed onboarding, you can start using Eden!" />
      </div>
      <Link to="/" className="w-full">
        <Button buttonText="Launch Eden" />
      </Link>
    </div>
  );
};

export default StepFour;
