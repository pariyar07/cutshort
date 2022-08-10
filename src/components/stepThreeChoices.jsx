import SingleChoice from "components/common/singleChoice";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const StepThreeChoices = () => {
  const accountTypeOptions = [
    {
      icon: <BsPersonFill className="text-purple text-2xl" />,
      choiceHeading: "For myself",
      choiceSubHeading: "Write better. Think more clearly. Stay Organized.",
    },
    {
      icon: <RiTeamFill className="text-purple text-2xl" />,
      choiceHeading: "With my team",
      choiceSubHeading: "Wikis, docs, tasks & projects, all in one place.",
    },
  ];

  return (
    <div className="flex gap-4 w-2/3 laptop:mt-8">
      {accountTypeOptions.map((element) => {
        return (
          <SingleChoice
            key={element.choiceHeading}
            icon={element.icon}
            choiceHeading={element.choiceHeading}
            choiceSubHeading={element.choiceSubHeading}
          />
        );
      })}
    </div>
  );
};

export default StepThreeChoices;
