import './style.css';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
    return (
        <ul>
            <li 
            onClick={() => props.isHamburger && props.closeHamburgerMenu()}className='navTravel'><Link to={'/travel'}>Travel</Link>
            </li>
            <li 
            onClick={() => props.isHamburger && props.closeHamburgerMenu()}className='navAbout'><Link to={'/about'}>About</Link>
            </li>
            <li 
            onClick={() => props.isHamburger && props.closeHamburgerMenu()}className='navContact'><Link to={'/contact'}>Contact</Link>
            </li>
            <li 
            onClick={() => props.isHamburger && props.closeHamburgerMenu()}className='navClients'><Link to={'/ourclients'}>Our Clients</Link></li>
        </ul>
    )
}

export default NavLinks;