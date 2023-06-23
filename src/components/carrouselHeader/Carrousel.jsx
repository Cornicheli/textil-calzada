import './carrousel.css'

function Carrousel() {
  return (
    <>
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
            <img src="https://textilcalzada.com/wp-content/uploads/2020/05/Acolchado_slide.jpg" className="d-block w-100 c-img" alt="Slide 1" />
            <div className="carousel-caption top-0 mt-4">
              <p className="mt-5 fs-3 text-uppercase">¡ LLEGO EL FRIO! </p>
              <h1 className="display-1 fw-bolder text-capitalize fs-1">ACOLCHADOS DE INVIERNO</h1>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5">Ver Más</button>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item c-item">
            <img src="https://textilcalzada.com/wp-content/uploads/2020/05/MANTA-DE-CAMA_SLIDE.jpg" className="d-block w-100 c-img" alt="Slide 2" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">MANTAS TERMICAS Y POLARES</p>
              <p className="display-1 fw-bolder text-capitalize fs-1">DANUBIO</p>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                data-bs-target="#booking-modal">Ver Más</button>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item c-item">
            <img src="https://textilcalzada.com/wp-content/uploads/2020/06/imagen_roller_doble.png" className="d-block w-100 c-img" alt="Slide 3" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">CORTINAS ROLLER</p>
              <p className="display-1 fw-bolder text-capitalize fs-1">PEDI TU PRESUPUESTO YA!</p>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                data-bs-target="#booking-modal">Ver Más</button>
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
    </>
  );
}

export default Carrousel;

// src="https://textilcalzada.com/wp-content/uploads/2020/05/MANTA-DE-CAMA_SLIDE.jpg"
// src="https://www.meleroller.com.ar/media/blackout/cortinas-roller-blackout-mele-roller-01.jpg"
// src="https://textilcalzada.com/wp-content/uploads/2020/05/Acolchado_slide.jpg"
// src="https://www.meleroller.com.ar/media/blackout/cortinas-roller-blackout-mele-roller-01.jpg"

// src="https://textilcalzada.com/wp-content/uploads/2020/05/Acolchado_slide.jpg"
// src="https://textilcalzada.com/wp-content/uploads/2020/05/MANTA-DE-CAMA_SLIDE.jpg"
// src="https://textilcalzada.com/wp-content/uploads/2020/05/online_store_24.jpg"
// src="https://www.meleroller.com.ar/media/blackout/cortinas-roller-blackout-mele-roller-01.jpg"