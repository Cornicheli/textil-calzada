import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
export default function CardCarousel(props) {

    const { price, description, thumbnail, title } = props;

    return (
        <li className='d-flex flex-column justify-content-around align-items-center card-carrousel p-3'>
            <figure className='ctn-photo-carrousel'>
                <img className='photo-carrousel' src={thumbnail} alt={title} />
            </figure>
            <h5 className='fs-4 m-1 p-1'>{title}</h5>
            <p>{description}</p>
            <p> $ {price}</p>
            <div className='btn'>
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
