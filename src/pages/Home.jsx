import "../CSS/Home.css";
import { GiPoland } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { TbAbc } from "react-icons/tb";

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-page-h1">Welcome to Polish Language Learning!</h1>
      <p>Learn Polish effectively with our interactive app.</p>
      <div className="feature-list">
        <div className="feature">
          <TbAbc className="icon" />
          <h2>Build Vocabulary</h2>
          <p>Learn new words and phrases with flashcards and audio examples.</p>
        </div>
        <div className="feature">
          <GoBook className="icon" />
          <h2>Learn Grammar</h2>
          <p>Practice grammar rules through interactive exercises.</p>
        </div>
        <div className="feature">
          <GiPoland className="icon" />
          <h2>Add Your Own Vocabulary</h2>
          <p>Add your own vocabulary to the app.</p>
        </div>
      </div>
      <h2>What users say:</h2>
      <p>
        This app has helped me improve my Polish pronunciation significantly.
      </p>
      <p>The interactive exercises are fun and engaging.</p>
    </div>
  );
}

export default Home;
