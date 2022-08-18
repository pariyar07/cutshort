import SingleChoice from "components/common/singleChoice";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { v4 as uuid } from "uuid";

const StepThreeChoices = () => {
  const accountTypeOptions = [
    {
      _id: uuid(),
      icon: <BsPersonFill className="text-purple text-2xl" />,
      choiceHeading: "For myself",
      choiceSubHeading: "Write better. Think more clearly. Stay Organized.",
    },
    {
      _id: uuid(),
      icon: <RiTeamFill className="text-purple text-2xl" />,
      choiceHeading: "With my team",
      choiceSubHeading: "Wikis, docs, tasks & projects, all in one place.",
    },
  ];

  return (
    <div className="flex gap-4 laptop:w-2/3 laptop:mt-8">
      {accountTypeOptions.map((element) => {
        return (
          <SingleChoice
            key={element._id}
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
