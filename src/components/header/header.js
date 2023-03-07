import TopHeader from "./top";
import MediumHeader from "./medium";
import BottomHeader from "./bottom";

const Header = () => {

  return (
    <header className="border border-searchBgColor">
        <TopHeader />
        <MediumHeader />
        <BottomHeader />
    </header>
  );
};
export default Header;
