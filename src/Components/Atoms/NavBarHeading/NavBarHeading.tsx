import { Link } from 'react-router-dom';
import { NavBarHeadingProps } from './types';
import HeadingText from '../HeadingText/HeadingText';

function NavBarHeading({ title, goTo }: NavBarHeadingProps) {
  return (
    <Link
      className="justify-center flex items-center px-2 bg-slate-200 hover:bg-slate-400 rounded-sm"
      to={goTo}
    >
      <HeadingText text={title} />
    </Link>
  );
}
export default NavBarHeading;
