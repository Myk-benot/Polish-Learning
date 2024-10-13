import { useState, useEffect } from "react";
import "/src/CSS/misc.css";

const Misc = () => {
  const [miscItems, setMiscItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("miscItems")) || [];
    setMiscItems(savedItems);
  }, []);

  const handleNext = () => {
    if (currentIndex < miscItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDelete = () => {
    const updatedItems = miscItems.filter((_, index) => index !== currentIndex);
    setMiscItems(updatedItems);
    localStorage.setItem("miscItems", JSON.stringify(updatedItems));
  };

  return (
    <div className="misc-container">
      <h1 className="misc-title">Miscellaneous</h1>
      {miscItems.length > 0 ? (
        <div className="item-display">
          <h2 className="item-title">Current Item:</h2>
          <ul className="item-list">
            <li key={currentIndex} className="item">
              <strong>English:</strong> {miscItems[currentIndex].english}
              <br />
              <br />
              <strong>Polish:</strong> {miscItems[currentIndex].polish}
              <br />
              <br />
              <strong>Phonetic:</strong> {miscItems[currentIndex].phonetic}
            </li>
          </ul>
          <div className="button-group">
            <button
              className="nav-button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Prev
            </button>
            <button
              className="nav-button"
              onClick={handleNext}
              disabled={currentIndex === miscItems.length - 1}
            >
              Next
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p className="no-items">No items found.</p>
      )}
    </div>
  );
};

export default Misc;
