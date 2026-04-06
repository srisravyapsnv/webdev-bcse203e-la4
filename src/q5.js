import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    const newList = taskList.filter((task, index) => index !== indexToDelete);
    setTaskList(newList);
  }

  return (
    <div style = {{
        backgroundColor: "#FF921C",
        height: "100vh",
        display: "flex",
        justifyContent: "center",   
        alignItems: "center"
        }}>
        <div style = {{
            backgroundColor: "#ffc35b", 
            height: "500px", 
            width: "400px", 
            borderRadius: "30px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            padding: "20px"
        }}>
            <h2>To Do List</h2>
            <input value={task} onChange={(e) => setTask(e.target.value)} 
                style = {{
                    backgroundColor: "#f4f2db",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px",
                    width: "300px",
                    padding: "10px",
                    margin: "16px",
                    fontSize: "20px"
                }}
            />
            <button onClick={addTask} style = {{
                backgroundColor: "#FF921C",
                height: "40px",
                width: "150px",
                fontSize: "20px",
                color: "white",
                borderRadius: "20px"
            }}>
            Add
            </button>

            <ul>
                {taskList.map((t, i) => (
                <li key={i}>
                    <input type = "checkbox" onChange={() => deleteTask(i)}/>
                    {t}
                </li>
                ))}
            </ul>
            <p>P S N V Sri Sravya, 24BCE2267</p>
        </div>
    </div>
  );
}

export default App;