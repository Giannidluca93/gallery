import { FC } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface Props {
  handleClick: () => void;
}

const Menu: FC<Props> = ({ handleClick }) => {
  return (
    <RxHamburgerMenu className="md:hidden" onClick={handleClick} size={30} />
  );
};

export default Menu;
