import Fade from 'react-reveal/Fade';
import './aboutMe.css'

export default function AboutMe() {
    return (
        // Sección contenedora con estilos de flexbox y altura mínima de 50vh
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
                <div className='m-3'>
                    {/* Imagen de la fábrica */}
                    <img className='photo-about' src="https://n5ce86.a2cdn1.secureserver.net/wp-content/uploads/2019/09/fabrica-4-1024x1024.jpg" alt="Fabrica" />
                </div>
            </Fade>
        </section>
    );
}
