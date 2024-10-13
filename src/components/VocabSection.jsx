import { useState } from "react";
import data from "../pages/vocab/vocab-index.js";
import VoiceButton from "./VoiceButton";
import "/src/CSS/vocab.css";

function VocabSection({ section }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionData = data[section];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, sectionData.length - 1)
    );
  };

  if (!sectionData || !Array.isArray(sectionData) || sectionData.length === 0) {
    return <div>No vocabulary found for this section.</div>;
  }

  return (
    <div className="vocab-div">
      <h1 className="vocab-h1">
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </h1>
      <ul className="vocab-list">
        <li className="vocab-li">
          <strong>English:</strong> {sectionData[currentIndex].english}
          <br />
          <strong>Polish:</strong> {sectionData[currentIndex].polish}
          <br />
          <strong>Phonetic:</strong> {sectionData[currentIndex].phonetic}
        </li>
      </ul>
      <div className="btn-div">
        <button
          className="btn"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={handleNextClick}
          disabled={currentIndex === sectionData.length - 1}
        >
          Next
        </button>
        <VoiceButton
          text={sectionData[currentIndex].polish}
          section={section}
        />
      </div>
    </div>
  );
}

export default VocabSection;
