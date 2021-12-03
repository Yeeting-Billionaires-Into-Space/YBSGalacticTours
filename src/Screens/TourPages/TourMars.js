// TourMars
import { Link } from 'react-router-dom';
import './styles.css';


function Mars() {
    
    return (
        
        <div className='cardContainer'>
            <p>
                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.
            </p>
            <div className='imageBox'><img className='imgMars' src='https://images-assets.nasa.gov/image/PIA01120/PIA01120~thumb.jpg' alt='Mars rover selfie'
            /></div>
            <div className='buttonContainer'>
                <Link to='tour' className='default'>Gallery</Link>
                <Link to='dates' className='default'>See Dates</Link>
            </div>
        </div>
        
    );
}

export default Mars;