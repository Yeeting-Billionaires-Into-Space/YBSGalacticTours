// OurClients

// Style components
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import clientDrEvil from '../../assets/clientDrEvil.jpeg';
import clientBezos from '../../assets/clientBezos.webp';
import clientColinZevia from '../../assets/clientColinZevia.png';

// Nav components
import Navigation from '../Header/Navigation';
import MobileNavigation from '../Header/MobileNavigation';
import NavLinks from '../Header/NavLinks'




function OurClients() {
  return (
    <>
      <section className='wrapper'>
        <Header/>
        <MobileNavigation />
        <div className='clientContainer'>
          <h1>Our Clients</h1>
          <div className='clientGallery'>
            <div className='clientBox'> 
              <h2>jeffrey bezos</h2>
              <img className='client' src={clientBezos} alt='' />
              <p>"Namaste, it is I, Mr. Bezos; human rights activist and humble 'almost' trillionaire. Please don't forget that Amazon has free same-day delivery if you are an Amazon Prime member. Alexa, mic drop."</p>
            </div> 
            <div className='clientBox'> 
              <h2>colin zevia</h2>
              <img className='client' src={clientColinZevia} alt='' />
              <p>"Ever since the age of 13, I have always dreamed of drinking a hot can of Zevia deep in the cold, empty, vacuous void that is outer space. Well, on December 3rd, 2021...there was zero hazardous N.E.O. around the earth, and that's when I made my dream come true! Everything was made possible only thanks to YBS Galactic Tours! Cheers." </p>
            </div> 
            <div className='clientBox'> 
              <h2>dr evil</h2>
              <img className='client' src={clientDrEvil} alt='' />
              <p>"... I'm freaking evil... What else is there to say."</p>
            </div> 
          </div>
        </div>
      </section>  
      <Footer />
    </>
  )
}

export default OurClients;
