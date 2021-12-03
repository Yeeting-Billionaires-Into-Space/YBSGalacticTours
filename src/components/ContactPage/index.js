// ContactPage

// Style components
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';


// React Icons Import
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'




function ContactPage() {
  return (
    <>
      <Header/>
      <section>
        <div className='wrapper'>
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
                    <li><FaInstagram className='icons'/>@YBSGT</li>
                  <li><FaTwitter className='icons'/>@YBSGT</li>
                    <li><FaFacebook className='icons'/>/YBSTours</li>
                  <li><FaEnvelope className='icons'/>ybs@ybs.com</li>
                  </ul>
                </aside>
                  <form action='registerForm'>
                    <label className='hide' htmlFor='firstName'>First Name</label>
                    <input 
                      className='formFirst'
                      placeholder='First Name'
                      name='firstName'
                      required/>
                      <label className='hide' htmlFor='lastName'> Last Name</label>
                      <input 
                      className='formLast'
                      placeholder='Last Name'
                      name='lastName'
                      required/>
                    <label className='hide' htmlFor='email'>Email</label>
                      <input 
                      type='email'
                      className='form'
                      placeholder='Email'
                      name='email'
                      required/>
                    
                    <label className='hide' htmlFor='message'>  Message</label>
                    <textarea
                      rows={5}
                      maxLength={350}
                      
                      className='textArea'
                      placeholder='Message'
                      name='message'
                      />
                      <button 
                      className='form default' type='submit'>Register</button>
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
