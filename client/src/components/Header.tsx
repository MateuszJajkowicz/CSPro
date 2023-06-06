import { Link } from 'react-router-dom';

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
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/login'>
            <a href='/login' role='button'>
              Login
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
