//Landing Page
import './styles.css'
import { Link } from 'react-router-dom';



function LandingPage () {
  return (
  <>
    <section className='landingPage wrapper'>
      <div className='landingContainer'>
        <img className='landingLogo' src='../.././assets/YBSLogo.png' alt='The logo for YBS Galactic Tours' />
        <Link to='/travel' className='default landingButton'>enter <span> space </span>
        </Link>
      </div>
    </section>
  </>  
  )
}

export default LandingPage;