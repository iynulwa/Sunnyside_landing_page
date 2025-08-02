import './components.css'

function Cards(props) {
    return(
        <div className='cards'>
            <img className='avatar-img' src={props.image} alt='avatar image' />
            <p>{props.testimony}</p>
            <h3>{props.name}</h3>
            <p>{props.occupation}</p>
        </div>
    )
}

export default Cards;