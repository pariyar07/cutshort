import Heading from "components/common/heading";
import SubHeading from "components/common/subHeading";
import Form from "components/common/form";
import Button from "components/common/button";
import { Link } from "react-router-dom";

const StepTwo = () => {
  let formData = [
    {
      label: "Workspace Name",
      placeholder: "Eden",
      labelSpan: "",
    },
    {
      label: "Workspace URL",
      placeholder: "Example",
      labelSpan: "(Optional)",
      url: "www.eden.com/",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center laptop:mt-12">
        <Heading headingText="Let's set up a home for all your work" />
        <SubHeading subHeadingText="You can always create another workspace later." />
      </div>
      <Form formData={formData} />
      <Link to="/stepthree" className="w-full">
        <Button buttonText="Create Workspace" />
      </Link>
    </div>
  );
};

export default StepTwo;
