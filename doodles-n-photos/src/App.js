import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="header">
          <img
            src={require("./assets/title.png")}
            alt="doodles and photos title"
          />
        </div>
        <div className="image-card">
          <img src={require("./assets/doge.PNG")} alt="1" />
        </div>
        <div className="image-card">
          <img src={require("./assets/flam.PNG")} alt="2" />
        </div>
        <div className="image-card">
          <img src={require("./assets/penguin.PNG")} alt="3" />
        </div>
        <div className="image-card">
          <img src={require("./assets/Landscape.png")} alt="4" />
        </div>
        <div className="image-card">
          <img src={require("./assets/powder.PNG")} alt="5" />
        </div>
        <div className="image-card">
          <img src={require("./assets/portrait.JPG")} alt="6" />
        </div>
      </div>
    </div>
  );
}

export default App;
