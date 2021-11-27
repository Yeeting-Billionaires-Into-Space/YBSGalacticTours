// App.js

// imports NPM modules 
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import components
import LandingPage from './LandingPage';
import TravelPage from './components/TravelPage';

// syntax to import component
// import Header from './components/Header';

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
        console.log(asteroidResponse)
        })





      // api call: NASA Image and Video Library
      axios({
        //                                      👇 test nasa id
        url: 'https://images-api.nasa.gov/asset/PIA01383',
        method: 'GET',
        responseType: 'json'
      })
        .then((response) => {
          // gets image url for specified image (by nasa id)
          const imagePath = response.data.collection.items[0].href;
          console.log(imagePath, 'image path');
        })
  }, [])



  return (
    <Router>
      <div className="wrapper">

        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/travel/*' element={<TravelPage />}/>
          {/* <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/ourclients' element={<OurClients />}/> */}
        </Routes>
          
      </div>

    </Router>
  );
}

export default App;
