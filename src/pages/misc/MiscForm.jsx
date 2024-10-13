import { useState } from "react";
import "/src/CSS/MiscForm.css";

const MiscForm = ({ onAddMisc }) => {
  const [english, setEnglish] = useState("");
  const [polish, setPolish] = useState("");
  const [phonetic, setPhonetic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { english, polish, phonetic };
    const savedItems = JSON.parse(localStorage.getItem("miscItems")) || [];
    const updatedItems = [...savedItems, newItem];
    localStorage.setItem("miscItems", JSON.stringify(updatedItems));
    onAddMisc(newItem);
    setEnglish("");
    setPolish("");
    setPhonetic("");
  };

  return (
    <form className="misc-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <h1 className="form-title">Add a New Item</h1>
        <label htmlFor="english">English:</label>
        <input
          id="english"
          type="text"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="polish">Polish:</label>
        <input
          id="polish"
          type="text"
          value={polish}
          onChange={(e) => setPolish(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phonetic">Phonetic:</label>
        <input
          id="phonetic"
          type="text"
          value={phonetic}
          onChange={(e) => setPhonetic(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="submit-button">
        Add Misc
      </button>
    </form>
  );
};

export default MiscForm;
