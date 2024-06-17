import { useState } from "react";
import "./App.css";

function App() {
  const [width, setwidth] = useState(0);

  return (
    <div className="app">
      <button
        onClick={() => {
          setInterval(() => {
            setwidth((prev) => Math.min(prev + 10, 100));
          }, 1000);
        }}
      >
        Start
      </button>
      <div className="wrapper">
        <div
          style={{
            width: `${width}%`,
            height: "30px",
            backgroundColor: "green",
            transition: "width 1s",
          }}
          className="progressBar"
        ></div>
        <div className="widthVal">{width}%</div>
      </div>
    </div>
  );
}

export default App;
