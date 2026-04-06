import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <input style = {{borderRadius: "10px", width: "50px", height: "20px", textAlign: "center", margin: "10px"}} onChange={(e) => setNum1(e.target.value)} />
      <input style = {{borderRadius: "10px", width: "50px", height: "20px", textAlign: "center"}} onChange={(e) => setNum2(e.target.value)} />

      <br /><br />

      <button style = {{borderRadius: "10px", width: "50px", height: "30px", textAlign: "center", backgroundColor: "green", color: "white", margin: "10px"}} onClick={() => setResult(Number(num1) + Number(num2))}>
        Add
      </button>

      <button style = {{borderRadius: "10px", width: "auto", height: "30px", textAlign: "center", backgroundColor: "blue", color: "white"}} onClick={() => setResult(Number(num1) - Number(num2))}>
        Subtract
      </button>

      <h2>Result: {result}</h2>
      <p>P S N V Sri Sravya, 24BCE2267</p>
    </div>
  );
}

export default App;