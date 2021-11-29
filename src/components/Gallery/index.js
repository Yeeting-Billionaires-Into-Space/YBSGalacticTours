// Gallery
import Button from "../Button";
import Header from "../Header";
import { useParams } from "react-router";
import GalleryContainer from "./GalleryContainer";
import './styles.css';
import '../../Screens/styles.css'

function Gallery() {

  const params = useParams();
  const planetID = params.planetID;

    return (
        <>
            <Header />
            <section className="planetComponent">
                <div>
                    <div className="planetBox">
                    <h1>{planetID}</h1>
                    <Button intent="closeButton" />
                    </div>
                    <GalleryContainer />
                    <Button text="See Dates" />
                </div>
            </section>
        </>
    );
}

export default Gallery;
