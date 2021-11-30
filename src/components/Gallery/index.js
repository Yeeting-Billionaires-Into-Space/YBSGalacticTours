// Gallery

import Header from '../Header';
import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import GalleryContainer from "./GalleryContainer";
import Footer from '../Footer';
import Loading from '../Loading';
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
                      <Link to='/travel' className='closeButton'>X</Link>
                    </div>
                    {/* /planetBox */}
                    <GalleryContainer />
                    <Link to={`/travel/${planetID}/dates`} className='default'>See Dates</Link>
                </div>
                {/* anon div */}
            </section>
            {/* /planetComponent */}
            <Footer />
        </>
    );
}

export default Gallery; 
