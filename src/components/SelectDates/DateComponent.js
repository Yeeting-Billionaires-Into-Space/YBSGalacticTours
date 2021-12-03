// DATE COMPONENT



import Header from '../Header';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';
import SelectDates from './index.js';
import './styles.css';
import '../../Screens/styles.css'
import Footer from '../Footer';

function DateComponent() {

  const params = useParams();
  const planetID = params.planetName;

    return (
        <>
            <Header />
            <section className='planetComponent dateComponent'>
                <div className='dateContainer'>
                    <div className='planetBox'>
                    <h1>{planetID}</h1>
                    <Link to='/travel' className='closeButton' aria-label='Click to close'>X</Link>
                    </div>
                    <SelectDates />
                  
                </div>
            </section>
            <Footer />
        </>
    );
}

export default DateComponent; 
