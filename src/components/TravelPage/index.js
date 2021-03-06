// TravelPage
import { Link } from 'react-router-dom';
import Header from '../Header';
import './styles.css'
import Footer from '../Footer';
import { useEffect, useState, useRef } from 'react';



function TravelPage() {
  // initialize state for counter
  const [counter, setCounter] = useState(3);
  const [disableTour, setDisableTour] = useState(false);
  let tourCount = useRef({});
  

  useEffect(() => {
    // localStorage.clear()

    if (!localStorage.getItem('tourCountKey')) {

      const now = new Date()


      tourCount.current = {
        value: 3,
        expiry: now.getTime() + 86400000,
      }


      localStorage.setItem('tourCountKey', JSON.stringify(tourCount.current))
      setCounter(tourCount.current.value)
    } else {
      const newValue = JSON.parse(window.localStorage.getItem('tourCountKey'))
      const newCounter = parseInt(newValue.value)
      const expiryTime = parseInt(newValue.expiry)
      const currentTime = new Date().getTime()

      if (currentTime >= expiryTime) {
        localStorage.clear()
        tourCount.current = {
          value: 3,
          expiry: currentTime + 86400000,
        }
        localStorage.setItem('tourCountKey', JSON.stringify(tourCount.current))
        setCounter(tourCount.current.value)
      } else {
        setCounter(newCounter)
        if (newCounter <= 0) {
          setDisableTour(true)
        }
      }
    };



  }, [])


  const handleCounterClicks = () => {
    setCounter(counter - 1);
    tourCount.current.value = counter - 1
    tourCount.current.expiry = new Date().getTime() + 86400000
    localStorage.setItem('tourCountKey', JSON.stringify(tourCount.current))
  };



  return (
    <>
      <Header />
      <section className='wrapper travelPage'>
        <h1>Yeeting Billionaires <span>Into Space</span></h1>
        <p className='tagLine'>Book a faster than light speed travel package from our upcoming line of space tours.</p>
        <p className='tourAd'>3 free virtual tours per day</p>
        <p className='toursLeft'>You have <span className='counterColor'>{counter}</span> tours left today</p>
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
