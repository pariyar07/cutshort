import logo from "assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} alt="Logo" className="laptop:w-16 h-auto" />
      <span className="font-main laptop:text-2xl font-semibold">Eden</span>
    </div>
  );
};

export default Logo;
