import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState<string>("");

  React.useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.text()) // Assuming the server response is plain text
      .then((text) => setMessage(text))
      .catch((err) => alert(`Failed to fetch message:${err}`));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to MERN Stack</h1>

      <div>
        <p>{message === "" ? "no message" : message}</p>
      </div>
    </div>
  );
}

export default App;
