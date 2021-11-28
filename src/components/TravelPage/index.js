// TravelPage
import { Link, Route, Routes } from "react-router-dom";
import Button from "../Button";

import './styles.css'



function TravelPage () {
  return (
  <>
    <section className='wrapper'>
      <h1>Yeet Billionaires <span>Into Space</span></h1>
      <p>3 free virtual tours per day</p>
    </section>
    
    <ul className='toursContainer wrapper'>
      <li className='mars tour'>
        <h2>mars</h2>
        <Link to='mars'>
          {/* <button>VIRTUAL TOUR</button> */}
          <Button text='virtual tour'   />
        </Link>
      </li>
      <li className='uranus tour'>
        <h2>uranus</h2>
        <Link to='uranus '>
          {/* <button>VIRTUAL TOUR</button> */}
          <Button text='virtual tour' />
        </Link>
      </li>
      <li className='saturn tour'>
        <h2>saturn</h2>
        <Link to='saturn'>
          {/* <button>VIRTUAL TOUR</button> */}
          <Button text='virtual tour' />
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
