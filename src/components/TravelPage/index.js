// TravelPage
import { Link, Route, Routes } from "react-router-dom";
import './styles.css'


function TravelPage () {
  return (
  <>
    <section>
      <h1>Yeet Billionaires Into Space</h1>
      <p>3 free virtual tours per day</p>
    </section>
    
    <ul className='toursContainer'>
      <li className='mars'>
        <h2>mars</h2>
        <Link to='mars'>
          <button>VIRTUAL TOUR</button>
          {/* <Button /> */}
        </Link>
        </li>
      <li className='uranus'>
        <h2>uranus</h2>
        <Link to='uranus'>
          <button>VIRTUAL TOUR</button>
          {/* <Button /> */}
        </Link>
      </li>
      <li className='saturn'>
        <h2>saturn</h2>
        <Link to='saturn'>
          <button>VIRTUAL TOUR</button>
          {/* <Button /> */}
        </Link>
      </li>
    </ul>
    <Routes>
      {/* <Route path='/mars' element={<TourMars />}/>
      <Route path='/uranus' element={<TourUranus />}/>
      <Route path='/saturn' element={<TourSaturn />}/> */}
      </Routes>
  </> 

  )
}



export default TravelPage;