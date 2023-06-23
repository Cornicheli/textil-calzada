import Fade from 'react-reveal/Fade';
import './aboutMe.css'

export default function AboutMe() {
    return (
        // Sección contenedora con estilos de flexbox y altura mínima de 50vh
        <section className='about-me d-flex justify-content-evenly align-items-center flex-wrap' style={{ minHeight: '50vh' }}>
            <Fade left>
                <div className='text-about m-4'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Título */}
                        <h1 className='fs-1 mb-4' style={{ lineHeight: '35px', color: '#333333' }}>Textil Calzada</h1>
                        {/* Línea decorativa */}
                        <span style={{ width: '35%', height: '3px', backgroundColor: '#c10d1b', marginBottom: '25px' }}></span>
                    </div>
                    {/* Párrafos de texto */}
                    <p className='fs-4' style={{ lineHeight: '35px', color: '#333333' }}>Somos un comercio minor-mayorista de retacería, cortineria, merceria, blanco y plásticos.</p>
                    <p className='fs-4' style={{ lineHeight: '35px', color: '#333333' }}>Una empresa Familiar dedicada a la venta de Telas y todo tipo de artículos textiles en el sur del Gran Buenos Aires.</p>
                    <p className='fs-4' style={{ lineHeight: '35px', color: '#333333' }}>Situados en la localidad de Rafael Calzada y con mas de 30 años de historia, siendo uno de los referentes de la zona.</p>
                </div>
            </Fade>
            <Fade right>
                <div className='m-3'>
                    {/* Imagen de la fábrica */}
                    <img src="https://n5ce86.a2cdn1.secureserver.net/wp-content/uploads/2019/09/fabrica-4-1024x1024.jpg" style={{ width: '400px', height: '400px', border: 'solid 1.5px grey', borderRadius: '15px' }} alt="Fabrica" />
                </div>
            </Fade>
        </section>
    );
}
