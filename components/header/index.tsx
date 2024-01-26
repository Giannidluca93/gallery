import Link from 'next/link';
import Navigation from '../navigation';

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center p-3 mb-3 ">
      <Link href="/">
        <h2 className="text-2xl">Logo</h2>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
