// Gallery

import Header from '../Header';
import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import GalleryContainer from "./GalleryContainer";
import Footer from '../Footer';
import './styles.css';
import '../../Screens/styles.css'

function Gallery() {

  const params = useParams();
  const planetID = params.planetID;

    return (
        <>
            <Header />
            <section className="planetComponent">
                <div className='gridMargin'>
                    <div className="planetBox">
                    <h1 className='planetID'>{planetID}</h1>
                    <Link to='/travel' className='closeButton'>X</Link>
                    </div>
                    {/* /planetBox */}
                    <GalleryContainer />
                </div>
                    <Link to={`/travel/${planetID}/dates`} className='default galleryDateButton'>See Dates</Link>
                {/* anon div */}
            </section>
            {/* /planetComponent */}
            <Footer />
        </>
    );
}

export default Gallery; 
