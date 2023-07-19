import { CardProducts, Header, FormContac } from '../components'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import '../css/home.css'


export default function Home() {
    return (
        <>
            <Header />
            {/* Contenedor del carrusel */}
            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
                {/* Indicadores del carrusel */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2" />
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3" />
                </div>

                {/* Contenido del carrusel */}
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active c-item">
                        <img src="https://arredo.vtexassets.com/assets/vtex.file-manager-graphql/images/30aa78c4-050b-4bdc-b2a9-9a39baf15752___9904e210db46604d238bb68050aee9d0.jpg" className="d-block w-100 c-img" alt="acolchado" />
                        <div className="carousel-caption top-0 mt-4">
                            <p className="mt-5 fs-3 text-uppercase">¡ LLEGO EL FRIO! </p>
                            <h2 className="display-1 fw-bolder text-capitalize fs-1">ACOLCHADOS DE INVIERNO</h2>
                            <Link className='anchor-category mt-5'>
                                <span>ver más</span>
                            </Link>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item c-item">
                        <img src="https://arredo.vtexassets.com/assets/vtex.file-manager-graphql/images/13745182-282a-4cec-8950-25a62c28f38a___5297fd3100b1db8e081484aa3686f6cc.jpg" className="d-block w-100 c-img" alt="cubrecama" />
                        <div className="carousel-caption top-0 mt-4">
                            <p className="text-uppercase fs-3 mt-5">MANTAS TERMICAS Y POLARES</p>
                            <h2 className="display-1 fw-bolder text-capitalize fs-1">DANUBIO</h2>
                            <Link className='anchor-category  mt-5'>
                                <span>ver más</span>
                            </Link>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item c-item">
                        <img src="https://arredo.vtexassets.com/assets/vtex.file-manager-graphql/images/fe22be1c-46d4-4fca-bd8b-73ce2ac7f3aa___2243501193208ceb1ba5480c5e50266d.jpg" className="d-block w-100 c-img" alt="cortina rollers" />
                        <div className="carousel-caption top-0 mt-4">
                            <p className="text-uppercase fs-3 mt-5">CORTINAS ROLLER</p>
                            <h2 className="display-1 fw-bolder text-capitalize fs-1">PEDI TU PRESUPUESTO YA!</h2>
                            <Link className='anchor-category mt-5 '>
                                <span>ver más</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Botones de control del carrusel */}
                <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className='about-me d-flex justify-content-evenly align-items-center flex-wrap'>
                <Fade left>
                    <div className='ctn-text-about m-4'>
                        <div className='ctn-about'>
                            {/* Título */}
                            <h1 className='fs-1 mb-4 text-about'>Textil Calzada</h1>
                            {/* Línea decorativa */}
                            <span className='line-about' />
                        </div>
                        {/* Párrafos de texto */}
                        <p className='fs-4 text-about'>Somos un comercio minor-mayorista de retacería, cortineria, merceria, blanco y plásticos.</p>
                        <p className='fs-4 text-about'>Una empresa Familiar dedicada a la venta de Telas y todo tipo de artículos textiles en el sur del Gran Buenos Aires.</p>
                        <p className='fs-4 text-about'>Situados en la localidad de Rafael Calzada y con mas de 30 años de historia, siendo uno de los referentes de la zona.</p>
                    </div>
                </Fade>
                <Fade right>
                    <div>
                        {/* Imagen de la fábrica */}
                        <img className='photo-about' src="https://n5ce86.a2cdn1.secureserver.net/wp-content/uploads/2019/09/fabrica-4-1024x1024.jpg" alt="Fabrica" />
                    </div>
                </Fade>
            </section>
            <CardProducts />
            <FormContac />
            <div className='d-flex align-items-center p-4 ctn-map'>
                <iframe
                    title="map-local"
                    className='map-location'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.47623764932!2d-58.3625480847653!3d-34.7939585804106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d73385711d3%3A0xaea6c355a255abb8!2sTextil%20Calzada!5e0!3m2!1sen!2sar!4v1686146792308!5m2!1sen!2sar"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    )
}
