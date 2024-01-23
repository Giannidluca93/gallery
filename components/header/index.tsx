import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center p-3 mb-3">
      <Link href="/">
        <h2 className="text-2xl">Logo</h2>
      </Link>
      <RxHamburgerMenu size={30} />
    </header>
  );
};

export default Header;
