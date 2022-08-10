import logo from "assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} alt="Logo" className="w-8 laptop:w-16 h-auto" />
      <span className="text-base laptop:text-2xl font-semibold">Eden</span>
    </div>
  );
};

export default Logo;
