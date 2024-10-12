import { Link } from "react-router-dom";
import "/home/myk/Desktop/Polish-Learning/src/CSS/grammarHome.css";

function GrammarHome() {
  return (
    <div className="grammar-home-container">
      <h1>Grammar Home</h1>
      <div className="grammar-home-div">
        <ul className="grammar-home-list">
          <li>
            <Link to="/tenses">Tenses</Link>
          </li>
          <li>
            <Link to="/prepositions">Prepositions</Link>
          </li>
          <li>
            <Link to="/pronouns">Pronouns</Link>
          </li>
          <li>
            <Link to="/singular-plural">Singular and Plural</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GrammarHome;
