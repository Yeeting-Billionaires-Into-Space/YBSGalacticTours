import NavLinks from './NavLinks';
import './style.css';
import { CgMenuRight } from 'react-icons/cg';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg'

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <CgMenuRight
                            className='menu'
                            onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose
                        className='menuClose'
                        onClick={() => setOpen(!open)} />

    const closeHamburgerMenu = () => setOpen(false);

    return (
        <nav className='mobileNav'>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isHamburger={true} closeHamburgerMenu={closeHamburgerMenu}/>}
        </nav>
    )


}

export default MobileNavigation