import Heading from "components/common/heading";
import SubHeading from "components/common/subHeading";
import Form from "components/common/form";
import Button from "components/common/button";
import { Link } from "react-router-dom";

const StepOne = () => {
  let formData = [
    {
      label: "Full Name",
      placeholder: "Steve Jobs",
      labelSpan: "",
    },
    {
      label: "Display Name",
      placeholder: "Steve",
      labelSpan: "",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center laptop:mt-12">
        <Heading headingText="Welcome! First things first..." />
        <SubHeading subHeadingText="You can always change them later." />
      </div>
      <Form formData={formData} />
      <Link to="/steptwo" className="w-full">
        <Button buttonText="Create Workspace" />
      </Link>
    </div>
  );
};

export default StepOne;
