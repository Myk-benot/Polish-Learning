import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Vocab-Home">Vocabulary</Link>
        </li>
        <li>
          <Link to="/Grammar-Home">Grammar</Link>
        </li>
        <li>
          <Link to="/MiscForm">Misc-Form</Link>
        </li>
        <li>
          <Link to="/Misc">Misc</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
