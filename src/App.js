import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [changeColor, setChangeColor] = useState("");

  useEffect(() => {
    setChangeColor();
  }, []);

  const randomRGB = () => Math.floor(Math.random() * 256);
  const getRandomColor = () =>
    "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";

  return (
    <div className="App">
      <nav className="Navbar">
        <h4>Color Filpper</h4>
        <div className="nav-links">
          <p>Simple</p>

          <a href="App.js">hex</a>
        </div>
      </nav>
      <main>
        <div
          className="container"
          style={{ backgroundColor: `${changeColor}` }}
        >
          <div>
            <h2>
              Backgroud Color : <span className="color">{changeColor}</span>
            </h2>
          </div>

          <div>
            <button
              className="btn btn-hero"
              id="btn"
              onClick={() => setChangeColor(getRandomColor)}
            >
              CLICK ME
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
