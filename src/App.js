// App.js

// imports NPM modules 
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// import components
import LandingPage from './LandingPage';
import Button from './components/Button';
import Footer from './components/Footer'



import Header from './components/Header';
import OurClients from './components/OurClients';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

import Gallery from './components/Gallery';
import TravelPage from './components/TravelPage';



import TourMars from './Screens/TourPages/TourMars';
import TourSaturn from './Screens/TourPages/TourSaturn';
import TourUranus from './Screens/TourPages/TourUranus';
import PlanetComponents from './Screens/PlanetComponents';



function App() {
  const [ asteroids, setAsteroids ] = useState({});

  useEffect(() => {
    // axios call: Asteroids NeoWs
    axios({
      // only likes to return one week at a time?
      url:'https://api.nasa.gov/neo/rest/v1/feed',
      method: 'GET',
      responseType: 'json',
      params:{
        start_date: '2021-12-03',
        api_key: 'X4WfjYooUbriBSQODcWwLkcOgGZuUlO2JrirMCZN'
      }
    })
      .then((response) => {
        //                      with date = array that we will want  👇
        const asteroidResponse = response.data.near_earth_objects['2021-12-10'];
        // console.log(asteroidResponse)
        })
  }, [])



  return (
    <Router>



        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/travel/*' element={<TravelPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/ourclients' element={<OurClients />}/>
          <Route path='/travel/mars' element={<PlanetComponents header='Mars' children={<TourMars />} />}/>
          <Route path='/travel/saturn' element={<PlanetComponents header='Saturn' children={<TourSaturn />} />} />
          <Route path='/travel/uranus' element={<PlanetComponents header='Uranus' children={<TourUranus />} />} />
          <Route path="/travel/:planetID/tour" element={<Gallery />} />


        </Routes>


    </Router>
  );
}

export default App;
