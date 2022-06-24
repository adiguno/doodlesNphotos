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
          <img src={require("./assets/1.PNG")} alt="1" />
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
          <img src={require("./assets/2.PNG")} alt="2" />
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
          <img src={require("./assets/3.PNG")} alt="3" />
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
          <img src={require("./assets/4.PNG")} alt="4" />
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
          <img src={require("./assets/5.PNG")} alt="5" />
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
          <img src={require("./assets/6.PNG")} alt="6" />
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
