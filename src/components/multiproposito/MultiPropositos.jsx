import multiPropositos from '../../mocks/multiPropositos';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './multiproposito.css';

export default function MultiPropositos() {

    return (
        <section className='ctn-main-multiproposito' style={{ width: '85%', padding: '15px' }}>
            {multiPropositos.map((producto) => (
                <CartaMultiproposito key={producto.id} producto={producto} />
            ))}
        </section>
    );
}

function CartaMultiproposito({ producto }) {
    const [quantity, setQuantity] = useState(0);

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < producto.stock) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <>
            {/* Contenedor principal de la tarjeta */}
            <section className='card-multiproposito'>
                <div className="d-flex flex-column align-items-center">
                    {/* Contenedor de la imagen */}
                    <figure className='wrapper-img-multiproposito'>
                        <div className='img-wrapper-multiproposito'
                            style={{ backgroundImage: `url(${producto.thumbnail})` }} />
                    </figure>
                    <span className='p-2'>
                        <h1 className="fs-5">
                            {producto.title}
                        </h1>
                    </span>
                </div>
                <div className="d-flex flex-column aling-items-center w-100 justify-content-between">
                    {/* Precios */}
                    <div className="w-100 d-flex justify-content-between price-multiproposito">
                        <span className="m-3">
                            + 1m
                        </span>
                        <span className="m-3">
                            $870
                        </span>
                    </div>
                    <div className="w-100 d-flex justify-content-between price-multiproposito">
                        <span className="m-3">
                            + 5m
                        </span>
                        <span className="m-3">
                            $800
                        </span>
                    </div>
                </div>
                {/* Control de cantidad */}
                <div className='quantity-control-multiproposito'>
                    <button className='quantity-btn-multiproposito' onClick={handleDecrement}>-</button>
                    <input className='quantity-input-multiproposito' type='number' value={quantity} readOnly />
                    <button className='quantity-btn-multiproposito' onClick={handleIncrement}>+</button>
                </div>
                <div className='w-100 p-2'>
                    {/* Botón de agregar */}
                    <button className='add-btn-multiproposito'>
                        AGREGAR
                    </button>
                </div>
            </section>
        </>
    );
}

CartaMultiproposito.propTypes = {
    producto: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};