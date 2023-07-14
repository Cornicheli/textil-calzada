import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardCarousel } from '../components'
import { productData, responsive } from "../mocks/products";
// import { Link } from "react-router-dom";

export default function CarrouselProducts() {

    const product = productData.map((item) => (
        <CardCarousel
            key='cardproduct'
            title={item.title}
            thumbnail={item.thumbnail}
        // price={item.price}
        // description={item.description}
        />
    ));

    return (
        <section className="d-flex align-items-center justify-content-center flex-column p-5">
            <section>
                <h1 className="text-center fs-1 mb-4">
                    LOS MÁS VENDIDOS
                </h1>
            </section>
            <Carousel className="w-100 p-3" responsive={responsive}>
                {product}
            </Carousel>
        </section>
    )
}
