import Logo from "components/common/logo";
import StepNavigation from "components/stepNavigation";

const NavHeader = () => {
  return (
    <header className="w-full laptop:w-1/4">
      <Logo />
      <StepNavigation />
    </header>
  );
};

export default NavHeader;
