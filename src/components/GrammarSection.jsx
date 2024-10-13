import { useState } from "react";
import data from "../pages/grammar/grammar-index.js";
import "/src/CSS/grammar-section.css";

function GrammarSection({ section }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const sectionData = data[section] ? data[section][currentIndex] : null;

  const handlePrevClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
    resetState();
  };

  const handleNextClick = () => {
    setCurrentIndex(Math.min(currentIndex + 1, data[section].length - 1));
    resetState();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckAnswer = () => {
    setIsChecked(true);
    if (selectedOption === sectionData.correctAnswer) {
      setFeedback("Correct! Well done.");
      setFeedbackType("correct");
    } else {
      setFeedback(
        `Incorrect. The correct answer is: ${sectionData.correctAnswer}`
      );
      setFeedbackType("incorrect");
    }
  };

  const resetState = () => {
    setSelectedOption(null);
    setIsChecked(false);
    setFeedback("");
    setFeedbackType("");
  };

  if (!sectionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grammar-div">
      <h1 className="grammar-h1">
        {section.charAt(0).toUpperCase() + section.slice(1)} Questions
      </h1>
      <div className="question-container">
        <h2>{sectionData.question}</h2>
        <ul className="options-list">
          {sectionData.options.map((option, index) => (
            <li
              key={index}
              className={`option-item ${
                isChecked && option === sectionData.correctAnswer
                  ? "correct"
                  : ""
              } ${
                isChecked &&
                option === selectedOption &&
                option !== sectionData.correctAnswer
                  ? "incorrect"
                  : ""
              }`}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="grammar-question"
                value={option}
                onChange={handleOptionChange}
                disabled={isChecked}
                checked={option === selectedOption}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </li>
          ))}
        </ul>
        {feedback && (
          <div className={`feedback ${feedbackType}`}>{feedback}</div>
        )}
        <div className="answer-container">
          {isChecked && (
            <>
              <strong>Correct Answer:</strong> {sectionData.correctAnswer}
            </>
          )}
        </div>
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
            disabled={currentIndex === data[section].length - 1}
          >
            Next
          </button>
          <button
            className="btn"
            onClick={handleCheckAnswer}
            disabled={isChecked}
          >
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrammarSection;
