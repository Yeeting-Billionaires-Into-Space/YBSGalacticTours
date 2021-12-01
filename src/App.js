// App.js

// imports NPM modules 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import LandingPage from './LandingPage';
import OurClients from './components/OurClients';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import TravelPage from './components/TravelPage';
// import SelectDates from './components/SelectDates';
import DateComponent from './components/SelectDates/DateComponent';
import TourMars from './Screens/TourPages/TourMars';
import TourSaturn from './Screens/TourPages/TourSaturn';
import TourUranus from './Screens/TourPages/TourUranus';
import PlanetComponents from './Screens/PlanetComponents';
import Gallery from './components/Gallery'
// import SelectDates from './components/SelectDates'


function App() {
  



  return (
    <Router>



        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/travel' element={<TravelPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/ourclients' element={<OurClients />}/>
          {/* <Route path='/selectdates' element={<SelectDates />}/> */}
          <Route path='/travel/mars' element={<PlanetComponents header='Mars' children={<TourMars />} />}/>
          <Route path='/travel/saturn' element={<PlanetComponents header='Saturn' children={<TourSaturn />} />} />
          <Route path='/travel/uranus' element={<PlanetComponents header='Uranus' children={<TourUranus />} />} />
          <Route path="/travel/:planetID/tour" element={<Gallery />} />
          <Route path='/travel/:planetName/dates' element={<DateComponent />}/>


        </Routes>


    </Router>
  );
}

export default App;
