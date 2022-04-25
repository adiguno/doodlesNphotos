import "./App.css";

function App() {
  
  const handleOnMouseOver = (e) => {
    e.currentTarget.play()
  }
  const handleOnMouseOut = (e) => {
    e.currentTarget.pause()
  }

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
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={require("./assets/Doge.mp4")} 
                type="video/mp4"/>
            </video>
        </div>
        <div className="image-card">
          <img src={require("./assets/flam.PNG")} alt="2" />
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={require("./assets/Flam.mp4")} 
                type="video/mp4"/>
            </video>
        </div>
        <div className="image-card">
          <img src={require("./assets/penguin.PNG")} alt="3" />
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={require("./assets/Penguin.mp4")} 
                type="video/mp4"/>
            </video>
        </div>
        <div className="image-card">
          <img src={require("./assets/Landscape.png")} alt="4" />
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={require("./assets/Landscape.mp4")} 
                type="video/mp4"/>
            </video>
        </div>
        <div className="image-card">
          <img src={require("./assets/powder.PNG")} alt="5" />
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={require("./assets/Powder.mp4")} 
                type="video/mp4"/>
            </video>
        </div>
        <div className="image-card">
          <img src={require("./assets/portrait.JPG")} alt="6" />
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={require("./assets/portrait.mp4")} 
                type="video/mp4"/>
            </video>
        </div>
      </div>
    </div>
  );


}

export default App;
