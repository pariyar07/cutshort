const Button = ({ buttonText }) => {
  return (
    <button className="bg-purple text-white w-full py-2 mt-6 text-center rounded cursor-pointer">
      {buttonText}
    </button>
  );
};

export default Button;
