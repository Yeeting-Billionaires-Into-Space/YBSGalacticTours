// TravelPage
import { Link } from "react-router-dom";
import Header from "../Header";
import './styles.css'
import Footer from '../Footer';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
// import DisplayToursLeft from "./DisplayToursLeft";



function TravelPage() {
  // inititalize state for counter
  const [ counter, setCounter ] = useState(3);
  const [ disableTour, setDisableTour] = useState(false);

  useEffect(() => {
    // localStorage.clear()
    if (!localStorage.getItem('tourCount')){
      localStorage.setItem('tourCount', 3)
      setCounter(localStorage.getItem('tourCount'))
    } else {
      setCounter(localStorage.getItem('tourCount'))
    };

    if (localStorage.getItem('tourCount') <= 0) {
      setDisableTour(true)
    }

  }, [])


  const handleCounterClicks = () => {
      setCounter(counter - 1)
      localStorage.setItem('tourCount', counter - 1)
  };



  return (
    <>
      <Header />
      <section className='wrapper travelPage'>
        <h1>Yeeting Billionaires <span>Into Space</span></h1>
        <p className='tagLine'>Book a faster than light speed travel package from our upcoming line of space tours.</p>
        <p>3 free virtual tours per day</p>
        <p className='toursLeft'>You have {counter} tours left today</p>
      </section>

      <ul className='toursContainer wrapper'>
        <li className='mars tour'>
            <h2>mars</h2>
          {!disableTour ? <Link to='mars' onClick={handleCounterClicks} className='default cardButton'>Virtual Tour</Link>
            : <Link to='mars' className='default cardButton disable'>Virtual Tour</Link>}
        </li>
        <li className='uranus tour'>
          <h2>uranus</h2>
          {!disableTour ? <Link to='uranus' onClick={handleCounterClicks} className='default cardButton'>Virtual Tour</Link>
            : <Link to='uranus' className='default cardButton disable'>Virtual Tour</Link>}
        </li>
        <li className='saturn tour'>
          <h2>saturn</h2>
          {!disableTour ? <Link to='saturn' onClick={handleCounterClicks} className='default cardButton'>Virtual Tour</Link>
            : <Link to='saturn' className='default cardButton disable'>Virtual Tour</Link>}
        </li>
      </ul>
      <Footer />
    </>

  )
}



export default TravelPage;
