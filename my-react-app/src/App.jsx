import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello React");
  const programmingLanguages = ["JavaScript", "Python", "Ruby"];

  const handleClick = () => setMessage("React is Fun");

  return (
    <div className="app-container">
      <h1 className="title">{message}</h1>
      <button onClick={handleClick}>Change Message</button>
      <ul className="language-list">
        {programmingLanguages.map((language) => (
          <li key={language} className="language-item">
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

 