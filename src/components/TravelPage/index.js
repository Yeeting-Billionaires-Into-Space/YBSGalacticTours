// TravelPage
import { Link } from "react-router-dom";
import Header from "../Header";
import './styles.css'
import Footer from '../Footer';



function TravelPage() {
  return (
    <>
      <Header />
      <section className='wrapper'>
        <h1>Yeet Billionaires <span>Into Space</span></h1>
        <p>3 free virtual tours per day</p>
      </section>

      <ul className='toursContainer wrapper'>
        <li className='mars tour'>
          <h2>mars</h2>
          <Link to='mars' className='default'>Virtual Tour</Link>
        </li>
        <li className='uranus tour'>
          <h2>uranus</h2>
          <Link to='uranus' className='default'>Virtual Tour</Link>
        </li>
        <li className='saturn tour'>
          <h2>saturn</h2>
          <Link to='saturn' className='default'>Virtual Tour</Link>
        </li>
      </ul>
      <Footer />
    </>

  )
}



export default TravelPage;
