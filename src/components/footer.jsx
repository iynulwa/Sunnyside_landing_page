import './components.css'

function Footer() {
    return(
        <footer>
            <img className='logo' src='/images/logo.svg' alt='comapnylogo'/>
            <div>
                <p>About</p>
                <p>Services</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className='brand-logo'>
                <img src="/images/icon-facebook.svg" alt="facebook logo"/>
                <img src="/images/icon-instagram.svg" alt="instagram logo"/>
                <img src="/images/icon-twitter.svg" alt="twitter logo"/>
                <img src="/images/icon-pinterest.svg" alt="pinterest logo"/>
            </div>
        </footer>
    )
}

export default Footer;