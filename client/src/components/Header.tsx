import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <nav className='container-fluid'>
      <ul>
        <li>
          <strong>CSPro</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/nades'>Nades</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>
        <li>
          <UserButton />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
