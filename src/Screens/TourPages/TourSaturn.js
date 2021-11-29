// TourSaturn
import { Link, Route, Routes } from "react-router-dom";
import PlanetComponents from "../PlanetComponents";
import Button from "../../components/Button";
import "./styles.css";

function Saturn() {
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
                <Button text="Gallery" />
                <Button text="See Dates" />
            </div>
        </div>
    );
}

export default Saturn;