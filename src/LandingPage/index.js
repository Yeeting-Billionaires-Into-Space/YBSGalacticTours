//Landing Page
import './styles.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



function LandingPage () {
  return (
  <>
  <section className='wrapper flex'>
    <img src='../.././assets/YBSLogo.png' alt='The logo for YBS Galactic Tours' />
    <Link to='travel' className='default'>Enter Space</Link>
    <Footer />
  </section>
  </>  
  )
}

export default LandingPage;