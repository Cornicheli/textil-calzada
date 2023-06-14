import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
import '../style/carrousel.css'


export default function CardCarousel(props) {
    const { name, price, img } = props;

    return (
        <div className='d-flex flex-column justify-content-around align-items-center card-carrousel'>
            <img src={img} alt="" style={{ height: '210px', width: '210px' }} />
            <h5 className='fs-4 m-1 p-1'>{name}</h5>
            {/* <p>{description}</p> */}
            <p> $ {price}</p>
            <div>
                <button className="btn-buyCarrito">AGREGAR</button>
            </div>
        </div>
    );
}

CardCarousel.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};