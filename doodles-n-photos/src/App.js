import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Doodles and Photos</h1>
      </div>

      <div className="grid-container">
        <div className="image-card">
          <img src={require("./assets/1.JPG")} alt="1" />
        </div>
        <div className="image-card">
          <img src={require("./assets/2.PNG")} alt="2" />
        </div>
        <div className="image-card">
          <img src={require("./assets/3.PNG")} alt="3" />
        </div>
        <div className="image-card">
          <img src={require("./assets/4.PNG")} alt="4" />
        </div>
        <div className="image-card">
          <img src={require("./assets/5.PNG")} alt="5" />
        </div>
        <div className="image-card">
          <img src={require("./assets/6.PNG")} alt="6" />
        </div>
        <div className="image-card">
          <img src={require("./assets/7.PNG")} alt="7" />
        </div>
        <div className="image-card">
          <img src={require("./assets/8.PNG")} alt="8" />
        </div>
        <div className="image-card">
          <img src={require("./assets/9.png")} alt="9" />
        </div>
      </div>
    </div>
  );
}

export default App;
