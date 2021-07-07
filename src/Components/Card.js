import './Card.css'
const Card = ({ name, image, price, description }) => {
    return (


        <div className="card">

            <h2> {name}</h2>
            <img src={image}
                alt="" />
            <div className="card__content">
                <p>{description}</p>
            </div>
            <div className="card__info" >
                ${price}
            </div>

            <div className="card__buy">
                Add to cart
                    </div>

        </div>


    )
}

export default Card
