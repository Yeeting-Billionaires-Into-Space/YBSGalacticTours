// OurClients
import './styles.css';
import Navigation from "../Header/Navigation";
import MobileNavigation from '../Header/MobileNavigation';
import NavLinks from '../Header/NavLinks';
import Header from '../Header'
import clientDrEvil from '../../assets/clientDrEvil.jpeg'
import clientBezos from '../../assets/clientBezos.webp'
import clientColinZevia from '../../assets/clientColinZevia.png'



function OurClients() {
  return (
    <section className="wrapper">
      <Header/>
      <MobileNavigation />
      <div className="clientContainer">
        <h1>Our Clients</h1>
        <div className="clientGallery">
          <div className='clientBox'> 
            <h2>jeffrey bezos</h2>
            <img className="client" src={clientBezos} alt="" />
            <p>"Namaste, it is I, Mr. Bezos; human rights activist and eccentric billionaire. Please don't forget that Amazon has free same-day shipping if you sign up with Amazon Prime."</p>
          </div> 
          <div className='clientBox'> 
            <h2>colin zevia</h2>
            <img className="client" src={clientColinZevia} alt="" />
            <p>"Ever since the age of 13, I have always wanted to drink hot Zevia deep in the cold depths of outer-space. Well, December 3rd, 2021...there were 0 hazerdous N.E.O. around earth's orbit, and I made my dreams come true! Eveyrthing was only made possible thanks to YBS!" </p>
          </div> 
          <div className='clientBox'> 
            <h2>dr evil</h2>
            <img className="client" src={clientDrEvil} alt="" />
            <p>"... I'm freaking evil... What else is there to say."</p>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default OurClients;
