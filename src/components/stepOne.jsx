import Heading from "components/common/heading";
import SubHeading from "components/common/subHeading";
import Form from "components/common/form";

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
      <Heading />
      <SubHeading />
      <Form formData={formData} />
    </div>
  );
};

export default StepOne;
