import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center p-3 mb-3 ">
      <Link href="/">
        <h2 className="text-2xl">Logo</h2>
      </Link>

      <nav>
        <RxHamburgerMenu className="md:hidden" size={30} />
        <ul className="absolute w-full mt-3 z-10 bg-slate-900 text-white p-5 right-0 flex flex-col md:flex-row md:relative md:p-0 md:bg-white md:text-black">
          <li className="p-3">
            <Link href="/about">About Me</Link>
          </li>
          <li className="p-3">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
