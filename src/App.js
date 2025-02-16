import React, { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(null);

  const handleAddition = async () => {
    try {
      const response = await fetch("http://localhost:3001/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          num1: parseFloat(number1),
          num2: parseFloat(number2),
          operation: "add",
        }),
      });
      const data = await response.json();
      setSum(data.result);
    } catch (error) {
      setSum("Error occurred");
    }
  };

  return (
    <div className="container">
      <h1>🔢 Addition App</h1>
      <center>
      <input
        type="text"
        placeholder="Enter first number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      </center>
      <center>
      <input
        type="text"
        placeholder="Enter second number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      </center>
      <button onClick={handleAddition}>➕ Add</button>
      {sum !== null && <div className="result">Result: {sum}</div>}
    </div>
  );
}

export default App;
