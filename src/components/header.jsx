import './components.css'
import Hamburger from 'hamburger-react'
import { useState } from 'react';

function Header() {

    const [open, setOpen] = useState(false);

    return(
        <>
            <header>
                <img className='logo' src='/images/logo.svg' alt='company logo' />
                <Hamburger
                    size={28}
                    color='white'
                    toggled={open}
                    toggle={setOpen}
                />
                <div className='desktop-links' hidden>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
            { open && <div className='mobile-links'>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
            </div>}
        </>
        
    )
}

export default Header;