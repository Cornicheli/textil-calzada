import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardCarousel } from '../../components'
import { productData, responsive } from "../../mocks/products";
import { Link } from "react-router-dom";

export default function CarrouselProducts() {

    const product = productData.map((item) => (
        <CardCarousel
            key='cardproduct'
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            description={item.description}
        />
    ));

    return (
        <section>
            <section className="d-flex flex-arrow p-3 justify-content-start">
                <figure className="d-flex justify-content-around flex-column m-7 ctn-panna" style={{ height: '350px', width: '100%' }}>
                    <h1 className="text-center text-light" style={{ fontSize: '75px' }}>
                        Panna
                    </h1>
                    <div className='d-flex justify-content-center'>
                        <Link className='anchor-category' to='#' style={{ color: "white" }}>
                            Ver mas
                        </Link>
                    </div>
                </figure>
            </section>
            <Carousel className="w-100 p-5" responsive={responsive}>
                {product}
            </Carousel>
            <section className="d-flex flex-arrow p-3 justify-content-end">
                <figure className="d-flex justify-content-around flex-column m-5 ctn-cuerina" style={{ height: '350px', width: '100%' }}>
                    <h1 className="text-center  text-light" style={{ fontSize: '75px' }}>
                        Cuerina
                    </h1>
                    <div className='d-flex justify-content-center'>
                        <Link className='anchor-category' to='#' style={{ color: "white" }}>
                            Ver mas
                        </Link>
                    </div>
                </figure>
            </section>
            <Carousel className="w-100 p-5" responsive={responsive}>
                {product}
            </Carousel>
            <section>
                <h1 className="text-center fs-1 mb-4">
                    LOS MÁS VENDIDOS
                </h1>
            </section>
            <Carousel className="w-100 p-5" responsive={responsive}>
                {product}
            </Carousel>
        </section>
    )
}
