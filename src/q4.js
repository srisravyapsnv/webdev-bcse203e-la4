import { useState } from "react";

function App() {
  const [sub1, setSub1] = useState("");
  const [sub2, setSub2] = useState("");
  const [sub3, setSub3] = useState("");
  const [grade, setGrade] = useState("");

  const calculate = () => {
    const avg = (Number(sub1) + Number(sub2) + Number(sub3)) / 3;

    if (avg >= 90) setGrade("A");
    else if (avg >= 75) setGrade("B");
    else if (avg >= 50) setGrade("C");
    else setGrade("Fail");
  };

  return (
    <div style = {{display: "flex", flexDirection: "column", width: "100px", padding: "10px"}}>
      <input style = {{margin: "5px"}} onChange={(e) => setSub1(e.target.value)} />
      <input style = {{margin: "5px"}} onChange={(e) => setSub2(e.target.value)} />
      <input style = {{margin: "5px"}} onChange={(e) => setSub3(e.target.value)} />

      <button style = {{backgroundColor: "green", color: "white", borderRadius: "10px", padding: "5px", margin: "5px"}} onClick={calculate}>Calculate</button>

      <h2>Grade: {grade}</h2>
      <p style = {{width: "500px"}}>P S N V Sri Sravya, 24BCE2267</p>
    </div>
  );
}

export default App;