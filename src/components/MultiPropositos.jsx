import InfiniteScroll from 'react-infinite-scroll-component';
import multiPropositos from '../mocks/multiPropositos';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/multiproposito.css';

export default function MultiPropositos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [visibleCards, setVisibleCards] = useState(10);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        const result = multiPropositos.filter((item) => {
            return item.title.toLowerCase().includes(term.toLowerCase());
        });

        setFilteredItems(result);
        setVisibleCards(10); // Reiniciar el número de cartas visibles al hacer una nueva búsqueda
    };

    const itemsToShow = searchTerm !== '' ? filteredItems.slice(0, visibleCards) : multiPropositos.slice(0, visibleCards);

    const loadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 10); // Cargar 10 cartas adicionales al hacer scroll
    };

    return (
        <div className='ctn-card-multi'>
            {/* Campo de búsqueda */}
            <label className='label-search-multi'>
                <input
                    className='input-search-multi'
                    type="search"
                    placeholder="¿Qué tela estás buscando?"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </label>
            {/* Componente InfiniteScroll */}
            <InfiniteScroll
                className='ctn-main-multiproposito'
                dataLength={itemsToShow.length}
                next={loadMore}
                hasMore={itemsToShow.length < (searchTerm !== '' ? filteredItems.length : multiPropositos.length)}
                loader={<h4>Cargando...</h4>}
                endMessage={
                    <div className="end-message-column">
                        <h4>No hay más productos... 😔</h4>
                    </div>
                }
            >
                {/* Lista de cartas */}
                {itemsToShow.map((producto) => (
                    <CartaMultiproposito key={producto.id} producto={producto} />
                ))}
            </InfiniteScroll>
        </div>
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
                <Link to='/categorias' className='text-dark text-decoration-none'>
                    <div className="d-flex flex-column align-items-center">
                        {/* Contenedor de la imagen */}
                        <figure className='wrapper-img-multiproposito'>
                            <div className='img-wrapper-multiproposito' style={{ backgroundImage: `url(${producto.thumbnail})` }} />
                        </figure>
                        <span className='p-2'>
                            <h1 className="fs-5">
                                {producto.title}
                            </h1>
                        </span>
                    </div>
                </Link>
                <div className="d-flex flex-column aling-items-center w-100 justify-content-between">
                    {/* Precios */}
                    <div className="w-100 d-flex justify-content-between price-multiproposito">
                        <span className="m-3">+ 1m</span>
                        <span className="m-3">$ 870</span>
                    </div>
                    <div className="w-100 d-flex justify-content-between price-multiproposito">
                        <span className="m-3">+ 5m</span>
                        <span className="m-3">$ 800</span>
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
                    <button className='add-btn-multiproposito'>AGREGAR</button>
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

