import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center p-3 mb-3">
      <h2>Logo</h2>
      <RxHamburgerMenu size={30} />
    </header>
  );
};

export default Header;
