import React from "react";

const SubHeading = ({ subHeadingText }) => {
  return (
    <h2 className="mb-4 laptop:mb-0 text-base text-gray text-center">
      {subHeadingText}
    </h2>
  );
};

export default SubHeading;
