import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello React")
  const programmingLanguages = ["JavaScript", "Python", "Ruby"];

  return (
    <div className="app-container">
      <h1 className="title">{message}</h1><button onClick={() => setMessage("React is Fun")}>Change Message</button>
      <ul className="language-list">
        {programmingLanguages.map((language, index) => (<li key={index} className="language-item">{language}</li>))}
      </ul>
    </div>
  )
}

export default App;
