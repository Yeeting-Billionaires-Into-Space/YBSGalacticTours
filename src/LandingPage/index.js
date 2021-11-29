//Landing Page
// import Button from './component/Button';
import { Link } from 'react-router-dom'
// import YBSLogo from './assets/YBSLogo.png'

function LandingPage () {
  return (
  <>
    <img src='../.././assets/YBSLogo.png' alt='The logo for YBS Galactic Tours' />
    <Link to={ '/Travel' }>
      {/* <Button /> */}
    </Link>
  </>  
  )
}

export default LandingPage;