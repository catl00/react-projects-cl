import '../styles/card.css'

const Card = ({ image, title, description, price}) => {
    return (
        <div className="card">
            <div className='content'>
                <h3>{title}</h3>
                <p className='card-price'>{price}</p>
                <p>{description}</p>
            </div>
            <div className="image-wrapper">
                <img src={image} alt="drink-image"/>
            </div>
            
            <button className='card-button'>add to cart</button>
        </div>
    )
}

export default Card;