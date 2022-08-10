const Heading = ({ headingText }) => {
  return (
    <h1 className="mt-4 laptop:mt-0 text-lg laptop:text-2xl font-bold text-center">
      {headingText}
    </h1>
  );
};

export default Heading;
