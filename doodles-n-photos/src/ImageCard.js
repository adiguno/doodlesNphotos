import "./ImageCard.css"

// props: image and video
function ImageCard(props) {
    
    const handleOnMouseOver = (e) => {
        e.currentTarget.play()
      }
      const handleOnMouseOut = (e) => {
        e.currentTarget.pause()
      }

    return(
        <div className="image-card">
          <img src={props.image} alt="1" />
          <video
            loop
            preload='none'
            muted
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
              <source src={props.video} 
                type="video/mp4"/>
            </video>
        </div>
    );
}