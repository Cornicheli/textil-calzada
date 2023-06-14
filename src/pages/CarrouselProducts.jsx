import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardCarousel } from '../components'
import { productData, responsive } from "../data/products";
import { Link } from "react-router-dom";
import '../style/carrousel.css'

export default function CarrouselProducts() {


    const product = productData.map((item) => (
        <CardCarousel
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
        />
    ));

    return (
        <main>
            <section className="d-flex flex-arrow p-3">
                <figure className="d-flex justify-content-around flex-column m-5 ctn-panna" style={{ height: '550px', width: '600px' }}>
                    <h1 className="text-center text-light" style={{ fontSize: '75px' }}>
                        Panna
                    </h1>
                    <div className='d-flex justify-content-center'>
                        <Link className='btn-buyCarrito' to='#'>
                            Ver mas
                        </Link>
                    </div>
                </figure>
                <Carousel className="w-100 p-1" responsive={responsive}>
                    {product}
                </Carousel>
            </section>
            <section className="d-flex flex-arrow p-3">
                <figure className="d-flex justify-content-around flex-column m-5 ctn-cuerina" style={{ height: '550px', width: '600px' }}>
                    <h1 className="text-center  text-light" style={{ fontSize: '75px' }}>
                        Cuerina
                    </h1>
                    <div className='d-flex justify-content-center'>
                        <Link className='btn-buyCarrito' to='#'>
                            Ver mas
                        </Link>
                    </div>
                </figure>
                <Carousel className="w-100 p-1" responsive={responsive}>
                    {product}
                </Carousel>
            </section>
            <section>
                <h1 className="text-center fs-1 mb-4">
                    LOS MÁS VENDIDOS
                </h1>
                <Carousel className="w-100 p-1" responsive={responsive}>
                    {product}
                </Carousel>
            </section>
        </main>
    )
}
