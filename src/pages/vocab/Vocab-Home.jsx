import { Link } from "react-router-dom";
import "/src/CSS/vocab-home.css";

function VocabHome() {
  return (
    <div className="vocab-home-container">
      <h1>Vocabulary</h1>
      <div className="vocab-home-div">
        <ul className="vocab-home-list">
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/numbers">Numbers</Link>
          </li>
          <li>
            <Link to="/basicphrases">Basic Phrases</Link>
          </li>
          <li>
            <Link to="/greetings">Greetings</Link>
          </li>
          <li>
            <Link to="/directions">Directions</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VocabHome;
