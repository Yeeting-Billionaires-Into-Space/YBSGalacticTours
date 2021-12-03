// ContactPage

// Style components
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import { useState } from 'react';



// React Icons Import
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';




function ContactPage() {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [register, setRegister] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setUserInput({...userInput, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setUserInput({...userInput, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setUserInput({...userInput, email: event.target.value})
  }
  const handleMessageInputChange = (event) => {
    setUserInput({...userInput, message: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegister(true);
  }

 

  return (
    <>
      <Header/>
      <section className="contactUsSection">
        <div className="wrapper">
          <div className='contactContainer'>
            <h1>contact us</h1> 
            <p>Get in touch! Contact us for a free tour quote or to join our elite clientele. Fill out our form and our Team will get back to you within 24 hours. Your saftey is paramount.</p>
              <div className='contactFormContainer'>
                <aside className='contactSideCard'>
                  <div>
                    <h2>reach us</h2>
                    <p>51 Area Street, Roswell <span>3827927 Milky Way</span> </p>
                    <p>(123) - 867 - 5309</p>
                  </div>
                  <ul>
                    <li><FaInstagram className='icons' aria-label='instagram' />@YBSGT</li>
                  <li><FaTwitter className='icons' aria-label='twitter' />@YBSGT</li>
                    <li><FaFacebook className='icons' aria-label='facebook' />/YBSTours</li>
                  <li><FaEnvelope className='icons' aria-label='email' />ybs@ybs.com</li>
                  </ul>
                </aside>

                  <form action="registerForm" onSubmit={handleSubmit}>
                    <label className="hide" htmlFor="firstName">First Name</label>
                    <input 
                      onChange={handleFirstNameInputChange}
                      value={userInput.firstName}
                      className="formFirst"
                      placeholder="First Name"
                      name="firstName"
                      required/>
                      <label className='hide' htmlFor='lastName'> Last Name</label>
                      <input 

                      onChange={handleLastNameInputChange}
                      value={userInput.lastName}
                      className="formLast"
                      placeholder="Last Name"
                      name="lastName"
                      required/>
                    <label className='hide' htmlFor='email'>Email</label>
                      <input 
                      onChange={handleEmailInputChange}
                      value={userInput.email}
                      type="email"
                      className="form"
                      placeholder="Email"
                      name="email"
                      required/>
                    
                    <label className='hide' htmlFor='message'>  Message</label>
                    <textarea
                      onChange={handleMessageInputChange}
                      value={userInput.message}
                      rows={5}
                      maxLength={350}
                      
                      className='textArea'
                      placeholder='Message'
                      name='message'
                      />
                      <button className='form' type='submit'>Register</button>
                      {register ? <div className='registerSuccess'>Thank you for registering!</div> :null}

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
