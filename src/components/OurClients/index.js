// OurClients

// Style components
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import clientDrEvil from '../../assets/clientDrEvil.jpeg';
import lexLuthor from '../../assets/lexLuthor.png';
import kingPin from '../../assets/kingPin.png';
import { Link } from 'react-router-dom';



function OurClients() {
  return (
    <>
      <Header/>
      <section>
        <div className='wrapper'>
          <div className='clientContainer'>
            <div className='textContainer'>
              <h1>Our Clients</h1>
              <p>Connect with our clients! Here at YBS we put the customer in the driver seat. From Earth to space we let you be number 1. See below to see reviews from a select amount of our clients. </p>
              <Link to='/contact' className='default'>become a client </Link>
            </div>
            <div className='clientGallery'>
              <div className='clientBox'> 
                <img className='client' src={kingPin} alt='Our client, Wilson Fisk' />
                <div className='clientText'>
                <h2>Wilson Fisk</h2>
                <h3>Last Tour: Mars 11/05/21</h3>
                  <p>"Rage cannot stay inside. It needs to go somewhere or it becomes a poison. So I took my rage into space. "</p>
                </div>
              </div> 
              <div className='clientBox'> 
                <img className='client' src={lexLuthor} alt='Our client, Lex Luthor' />
                <div className='clientText'>
                <h2>Lex luthor</h2>
                <h3>Last Tour: Saturn 08/20/21</h3>
                  <p>"LEX LUTHOR! Possibly you’ve heard the name? The Greatest Criminal Mind on Earth! Ever since the age of 13, I have always dreamed of drinking a hot can of Zevia deep in the cold, empty, vacuous void that is outer space." </p>
                </div>
              </div> 
              <div className='clientBox'> 
                <img className='client' src={clientDrEvil} alt='Our client, Dr. Evil' />
                <div className='clientText'>
                <h2>Dr Evil</h2>
                <h3>Last Tour: Uranus 04/20/21</h3>
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
