//Landing Page
import './styles.css'
// import Button from './component/Button';
import { Link } from 'react-router-dom';
// import YBSLogo from './assets/YBSLogo.png'
import Button from '../components/Button';
import Footer from '../components/Footer';



function LandingPage () {
  return (
  <>
  <section className='wrapper flex'>
    <img src='../.././assets/YBSLogo.png' alt='The logo for YBS Galactic Tours' />
    <Link to='travel'>
      <Button text='yeet into space' />
    </Link>
    <Footer />
  </section>
  </>  
  )
}

export default LandingPage;