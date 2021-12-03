// TourUranus
import { Link } from 'react-router-dom';
import './styles.css';

function Uranus() {


  return (
    <div className='cardContainer'>
      <p>
        Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.
      </p>
      <div className='imageBox'><img className='imgUranus' src='https://images-assets.nasa.gov/image/ARC-1986-AC86-7017/ARC-1986-AC86-7017~thumb.jpg' alt='uranus photograph from satellite flyby'
      />
      </div>
      <div className='buttonContainer'>
        <Link to='tour' className='default'>Gallery</Link>
        <Link to='dates' className='default'>See Dates</Link>
      </div>
    </div>
  );
}

export default Uranus; 
