import './components.css'

function Hero() {
    return(
        <div className='hero'>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-header.jpg' alt='hero image'/>
                <img src='/images/mobile/image-header.jpg' alt='hero image' />
            </picture>
            <div className='hero-text'>
                <h1>WE ARE CREATIVES</h1>
                <img src='/images/icon-arrow-down.svg' alt='' />
            </div>
        </div>
    )
}

export default Hero;