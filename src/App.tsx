import "./App.css";

function App() {
  return (
    <div className="App">
      <button area-aria-label="Click to submit">Submit</button>
      <input
        type="text"
        aria-label="Enter your name"
        aria-required="true"
        name="name"
      />
    </div>
  );
}

export default App;
