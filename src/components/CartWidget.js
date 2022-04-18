import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return(
        <button type="button" className="btn position-relative circulo">
            <FontAwesomeIcon icon={faCartShopping} className="carrito" />
            <span className="position-absolute top-0 start-99 translate-middlle badge rounded-pill bg-danger">5</span>
        </button>
    )
}



export default CartWidget;