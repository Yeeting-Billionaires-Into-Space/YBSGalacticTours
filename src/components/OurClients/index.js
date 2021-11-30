// OurClients

// Style components
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import clientDrEvil from '../../assets/clientDrEvil.jpeg';
import clientBezos from '../../assets/clientBezos.webp';
import clientColinZevia from '../../assets/clientColinZevia.png';
import { Link } from 'react-router-dom';

// Nav components
import MobileNavigation from '../Header/MobileNavigation';



function OurClients() {
  return (
    <>
      <section>
          <Header/>
          <MobileNavigation />
        <div className="wrapper">
          <div className='clientContainer'>
            <div className='textContainer'>
              <h1>Testimonials</h1>
              <p>Connect with our clients! Here at YBS we put the customer in the driver seat. From Earth to space we let you be number 1. See below to see reviews from a select amount of our clients. </p>
              <Link to='saturn' className='default'>become a client </Link>
            </div>
            <div className='clientGallery'>
              <div className='clientBox'> 
                <img className='client' src={clientBezos} alt='' />
                <div className='clientText'>
                <h2>Kingpin</h2>
                <h3>Last Tour: Mars 11/05/21</h3>
                <p>"It is I, Mr. Bezos; human rights activist and humble 'almost' trillionaire. Please don't forget that Amazon has free same-day delivery if you are an Amazon Prime member. Alexa, mic drop."</p>
                </div>
              </div> 
              <div className='clientBox'> 
                <img className='client' src={clientColinZevia} alt='' />
                <div className='clientText'>
                <h2>Lexluther</h2>
                <h3>Last Tour: Saturn 08/20/21</h3>
                <p>"Ever since the age of 13, I have always dreamed of drinking a hot can of Zevia deep in the cold, empty, vacuous void that is outer space." </p>
                </div>
              </div> 
              <div className='clientBox'> 
                <img className='client' src={clientDrEvil} alt='' />
                <div className='clientText'>
                <h2>dr evil</h2>
                <h3>Last Tour: Uranus 04/19/21</h3>
                <p>"... I'm freaking evil... What else is there to say."</p>
                </div>
              </div> 
              
            </div>
          </div>
        </div>
      </section>  
      <Footer />
    </>
  )
}

export default OurClients;
