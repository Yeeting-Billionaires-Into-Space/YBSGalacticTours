// TravelPage
import { Link } from "react-router-dom";
import Header from "../Header";
import './styles.css'
import Footer from '../Footer';



function TravelPage() {
  return (
    <>
      <Header />
      <section className='wrapper travelPage'>
        <h1>Yeeting Billionaires <span>Into Space</span></h1>
        <p className='tagLine'>Book a faster than light speed travel package from our upcoming line of space tours.</p>
        <p>3 free virtual tours per day</p>
      </section>

      <ul className='toursContainer wrapper'>
        <li className='mars tour'>
            <h2>mars</h2>
            <Link to='mars' className='default cardButton'>Virtual Tour</Link>
        </li>
        <li className='uranus tour'>
          <h2>uranus</h2>
          <Link to='uranus' className='default cardButton'>Virtual Tour</Link>
        </li>
        <li className='saturn tour'>
          <h2>saturn</h2>
          <Link to='saturn' className='default cardButton'>Virtual Tour</Link>
        </li>
      </ul>
      <Footer />
    </>

  )
}



export default TravelPage;
