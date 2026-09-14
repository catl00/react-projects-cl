
const Card = ({ image, title, description, price}) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt="drink-image"/>
            <p>{price}</p>
            <button>add to cart</button>
        </div>
    )
}

export default Card;