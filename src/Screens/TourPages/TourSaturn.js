// TourSaturn
import { Link } from "react-router-dom";
import "./styles.css";

function Saturn() {
  return (
    <div className="cardContainer">
      <p>
        Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.
      </p>
      <div className="imageBox"><img className="imgSaturn" src="https://images-assets.nasa.gov/image/PIA12542/PIA12542~thumb.jpg" alt="closeup of the planet saturn"
      /></div>
      <div className="buttonContainer">
        <Link to='tour' className='default'>Gallery</Link>
        <Link to='dates' className='default'>See Dates</Link>
      </div>
    </div>
  );
}

export default Saturn; 
