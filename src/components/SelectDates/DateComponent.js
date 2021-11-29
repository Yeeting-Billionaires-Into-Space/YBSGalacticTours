// DATE COMPONENT



import Header from '../Header';
import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import SelectDates from './index.js';
import './styles.css';
import '../../Screens/styles.css'

function DateComponent() {

  const params = useParams();
  const planetID = params.planetName;

    return (
        <>
            <Header />
            <section className="planetComponent">
                <div>
                    <div className="planetBox">
                    <h1>{planetID}</h1>
                    <Link to='/travel' className='closeButton'>X</Link>
                    </div>
                    <SelectDates />
                  
                </div>
            </section>
        </>
    );
}

export default DateComponent; 
