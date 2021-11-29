// TourMars
import { Link } from "react-router-dom";
import "./styles.css";

function Mars() {
    return (
        
        <div className="cardContainer">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            debitis soluta sit ut. Soluta quam dolorum earum quae eaque!
            Cupiditate, necessitatibus vero eius porro ullam quae minima
            aspernatur sapiente rerum?
            </p>
            <div className="imageBox"></div>
            <div className="buttonContainer">
                <Link to='tour' className='default'>Gallery</Link>
                <Link to='dates' className='default'>See Dates</Link>
            </div>
        </div>
        
    );
}

export default Mars;
