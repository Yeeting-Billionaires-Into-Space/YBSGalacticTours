// ContactPage

// Style components
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
// import clientDrEvil from '../../assets/clientDrEvil.jpeg';
// import clientBezos from '../../assets/clientBezos.webp';
// import clientColinZevia from '../../assets/clientColinZevia.png';
// import { Link } from 'react-router-dom';

// Nav components
import MobileNavigation from '../Header/MobileNavigation';

// React Icons Import
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"




function ContactPage() {
  return (
    <>
      <section>
          <Header/>
          <MobileNavigation />
        <div className="wrapper">
          <div className='contactContainer'>
            <h1>contact us</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt provident iusto quam dolorem rem, ut deleniti porro sapiente delectus.</p>
              <div className="contactFormContainer">
                <aside className='contactSideCard'>
                  <h2>reach us</h2>
                  <ul>
                    <li><FaInstagram />YBSgalactic</li>
                    <li><FaTwitter />YBSGT</li>
                    <li><FaFacebook className='icon'/>YBSGalacticTours</li>
                    <li><FaEnvelope />ybsgalactic@ybs.com</li>
                  </ul>
                </aside>
                  <form action="registerForm">
                    <label className="hide" htmlFor="firstName">First Name</label>
                    <input 
                      className="formFirst"
                      placeholder="First Name"
                      name="firstName"
                      required/>
                      <label className="hide" htmlFor="lastName"> Last Name</label>
                      <input 
                      className="formLast"
                      placeholder="Last Name"
                      name="lastName"
                      required/>
                    <label className="hide" htmlFor="email">Email</label>
                      <input 
                      type="email"
                      className="form"
                      placeholder="Email"
                      name="email"
                      required/>
                    
                    <label className="hide" htmlFor="message">  Message</label>
                    <textarea
                      rows={5}
                      maxLength={350}
                      
                      className="textArea"
                      placeholder="Message"
                      name="message"
                      />
                      <button 
                      className="form" type="submit">Register</button>
                  </form>
                
              {/* end of form container */}
              </div>
            {/* end of contactSideCard */}
          </div>
          {/* end of contactContainer */}
        </div>
        {/* end of wrapper  */}
      </section>  
      <Footer />
    </>
  )
}

export default ContactPage;
