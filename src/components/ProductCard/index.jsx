import "./index.css"

export function ProductCard(props) {
    return ( 
        <div className = "product-card">
            <img className = "product-card__image" width="200" src={props.data.img} alt=""/>
            <h4 className = "product-card__name">{props.data.name}</h4>
            <span className = "product-card__price">{props.data.price}</span>
        </div>
        )
}