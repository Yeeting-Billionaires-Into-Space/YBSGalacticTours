//Landing Page
import './styles.css'
// import Button from './component/Button';
import { Link } from 'react-router-dom';
// import YBSLogo from './assets/YBSLogo.png'
import Button from '../components/Button';




function LandingPage () {
  return (
  <>
  <section className='wrapper'>
    <div className="landingContainer">
      <img className='landingLogo' src='../.././assets/YBSLogo.png' alt='The logo for YBS Galactic Tours' />
      <Link to='travel'>
        <Button text='enter space' />
      </Link>
    </div>
  </section>
  </>  
  )
}

export default LandingPage;