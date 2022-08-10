import Logo from "components/common/logo";
import StepNavigation from "components/stepNavigation";

const Header = () => {
  return (
    <header className="w-1/4">
      <Logo />
      <StepNavigation />
    </header>
  );
};

export default Header;
