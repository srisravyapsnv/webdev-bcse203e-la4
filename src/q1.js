function Welcome(props) {
  return (
    <div>
      <h1 style={{color: "green"}}>Hello Everyone!</h1>
      <p>I am {props.name}, and I am {props.age} years old</p>
      <p>P S N V Sri Sravya, 24BCE2267</p>
      <p></p>
    </div>
  );
}

function App() {
  return <Welcome name="Sravya" age="19" />;
}

export default App;