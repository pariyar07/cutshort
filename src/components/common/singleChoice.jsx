const SingleChoice = ({ icon, choiceHeading, choiceSubHeading }) => {
  return (
    <>
      <div className="flex flex-col border-2 border-purple rounded-xl p-4 cursor-pointer">
        {icon}
        <h1 className="font-bold">{choiceHeading}</h1>
        <h2 className="text-gray">{choiceSubHeading}</h2>
      </div>
    </>
  );
};

export default SingleChoice;
