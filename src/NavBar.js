import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id="nav-bar">
        <ul>
          <li>
            <Link to="/Form">Form</Link>
          </li>
          <li>
            <Link to="/PokeSearch">Poke Search</Link>
          </li>
          <li>
            <Link to="/TypeChart">Type Chart</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;