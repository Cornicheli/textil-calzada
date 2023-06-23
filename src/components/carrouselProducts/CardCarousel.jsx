import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
export default function CardCarousel(props) {

    const { price, description, thumbnail, title } = props;

    return (
        <li className='d-flex flex-column justify-content-around align-items-center card-carrousel p-3'>
            <figure style={{ height: '210px', width: '210px' }} >
                <img src={thumbnail} alt={title} style={{ width: '100%', height: '100%' }} />
            </figure>
            <h5 className='fs-4 m-1 p-1'>{title}</h5>
            <p>{description}</p>
            <p> $ {price}</p>
            <div>
                <button className="anchor-category">AGREGAR</button>
            </div>
        </li>
    );
}

CardCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
};
