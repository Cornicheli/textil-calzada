import { Link } from "react-router-dom"
import { Header } from "../components"
import { CarrouselProducts } from "../components"
import '../components/carrouselProducts/cardCategory.css'

export default function Telax() {
    return (
        <>
            <Header />
            <section className="d-flex align-items-center justify-content-center flex-column p-5">
                <div className="ctn-card text-center ctn-tapiceria">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title">Tapiceria</h5>
                        <p className="card-text">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ctn-card text-center ctn-multiproposito">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title">MultiProposito</h5>
                        <p className="card-text">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ctn-card text-center ctn-estampados">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title">Estampados</h5>
                        <p className="card-text">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex flex-wrap justify-content-center"> */}
                <div className="ctn-card text-center d-flex flex-row p-0">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column ctn-silver">
                        <h5 className="card-title text-light">Silver</h5>
                        <p className="card-text text-light">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center flex-column ctn-cordura">
                        <h5 className="card-title">Cordura</h5>
                        <p className="card-text">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className="ctn-card text-center ctn-corderito">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title">Polar y Corderito</h5>
                        <p className="card-text">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ctn-card text-center ctn-tusores">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title">Tusores</h5>
                        <p className="card-text">Venta x Mayor y Menor</p>
                        <div className='cnt-redirection'>
                            <Link className='anchor-category' to='#' style={{ color: "white" }}>
                                Las Necesito!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <CarrouselProducts />
        </>
    )
}
