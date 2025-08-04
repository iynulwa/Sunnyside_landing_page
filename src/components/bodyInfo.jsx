import './components.css'

function BodyInfo() {
    return (
        <main>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-transform.jpg' alt='' />
                <img src='/images/mobile/image-transform.jpg' alt=''/>
            </picture>

            <div className='body-info-text-div'>
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button type='button' className='yellow-btn'>LEARN MORE</button>
            </div>

            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-stand-out.jpg' alt='' />
                <img src='/images/mobile/image-stand-out.jpg' alt=''/>
            </picture>

            <div className='body-info-text-div'>
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <button type='button' className='red-btn'>LEARN MORE</button>
            </div>

            <div className='product-info'>
                <picture>
                    <source media='(min-width: 40rem)' srcSet='/images/desktop/image-graphic-design.jpg' alt='hero image'/>
                    <img src='/images/mobile/image-graphic-design.jpg' alt='hero image' />
                </picture>
                <div className='product-stats-one'>
                    <h2>Graphic design</h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>
            
            <div className='product-info'>
                <picture>
                    <source media='(min-width: 40rem)' srcSet='/images/desktop/image-photography.jpg' alt='hero image'/>
                    <img src='/images/mobile/image-photography.jpg' alt='hero image' />
                </picture>
                <div className='product-stats-two'>
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </main>
    )
}

export default BodyInfo;