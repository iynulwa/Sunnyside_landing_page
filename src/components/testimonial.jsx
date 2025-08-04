import './components.css'
import Cards from './cards.jsx';
import testimonialInfo from '../TestimonialInfo.js'

function createCard(info){
    return(
        <Cards
            key={info.id}
            image={info.image}
            testimony={info.testimony}
            name={info.name}
            occupation={info.occupation}
        />
    )
}

function Testimonial() {
    return(
        <div role='region' className='testimonial' aria-labelledby='Testimonials'>
            <h2 className='testimonial-heading'>CLIENT TESTIMONIALS</h2>
            <div className='testimonial-card'>
                {testimonialInfo.map(createCard)}
            </div>
        </div>
        
    )
}

export default Testimonial;