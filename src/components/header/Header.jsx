import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isHeaderSticky = window.scrollY > 0;
            setIsSticky(isHeaderSticky);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const NavLineaCama = [
        { text: "Linea de Cama", to: "/lineadecama" },
        { text: "Living y Ambiente", to: "/livingyambiente" },
        { text: "Linea Cocina", to: "/lindecocina" },
        { text: "Linea baño", to: "/lineabaño" },
    ];

    const NavTelas = [
        { text: "Broderie", to: "/broderie" },
        { text: "Camiseria", to: "/camiseria" },
        { text: "Coral", to: "/coral" },
        { text: "Cuerina", to: "/cuerina" },
        { text: "Gabardina", to: "/gabardina" },
        { text: "Interlock", to: "/interlock" },
        { text: "Lanilla", to: "/lanilla" },
        { text: "Loneta Estampada", to: "/loneta-estampada" },
        { text: "Matelasse", to: "/matelasse" },
        { text: "Modal", to: "/modal" },
        { text: "Panama", to: "/panama" },
        { text: "Peluche", to: "/peluche" },
        { text: "Pique", to: "/pique" },
        { text: "Plastico Estampado", to: "/plastico-estampado" },
        { text: "Player", to: "/player" },
        { text: "Polar", to: "/polar" },
        { text: "Sabaneria", to: "/sabaneria" },
        { text: "Sicilia", to: "/sicilia" },
        { text: "Toalla", to: "/toalla" },
    ];

    const NavLanas = [
        { text: "Soft (Cashmillon)", to: "#" },
        { text: "Hilo Algódon", to: "#" },
        { text: "Brandy (Sedificada)", to: "#" },
        { text: "Oaky (Gruesa)", to: "#" },
    ];

    return (
        <header className={`ctn-header navbar fixed-top ${isSticky ? 'flex' : ''}`}>
            <div className="container-fluid d-flex justify-content-around">
                <h1 className="navbar-brand" style={{ color: 'black' }}>
                    Textil Calzada
                </h1>
                {/* <label style={{ width: '375px', height: '35px' }}>
                    <input style={{ width: '100%', height: '100%', borderRadius: '8px', outline: 'none', border: ' none', padding: '7px' }} type="search" placeholder="¿Qué tela estas buscando?" />
                </label> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end "
                    style={{
                        backgroundColor: '#e2f0fb', border: 'none'
                    }}
                    tabIndex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fs-4" id="offcanvasDarkNavbarLabel">
                            Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-black"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item cta">
                                <Link to="/" className="nav-link active fs-5 p-2 text-dark fw-medium">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item cta text-dark fw-medium">
                                <Link to="/categorias" className="text-decoration-none text-dark fw-medium fs-5 p-2">
                                    Categorías
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle text-dark fw-medium fs-5 p-2"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Blanco
                                </Link>
                                <ul className="dropdown-menu dropdown-menu" style={{
                                    backgroundColor: '#e2f0fb', border: 'none'
                                }}>
                                    {NavLineaCama.map((link, index) => (
                                        <li className="cta text-dark fw-medium" key={index}>
                                            <Link className="dropdown-item text-decoration-none text-dark fw-medium fs-5" to={link.to}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-dark fw-medium fs-5 p-2"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Telas - Confección
                                </Link>
                                <ul className="dropdown-menu dropdown-menu" style={{
                                    backgroundColor: '#e2f0fb', border: 'none'
                                }}>
                                    {NavTelas.map((link, index) => (
                                        <li className=" text-dark fw-medium" key={index}>
                                            <Link className="dropdown-item text-decoration-none text-dark fw-medium fs-5" to={link.to}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-dark fw-medium fs-5 p-2"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Lanas
                                </Link>
                                <ul className="dropdown-menu dropdown-menu" style={{
                                    backgroundColor: '#e2f0fb', border: 'none'
                                }}>
                                    {NavLanas.map((link, index) => (
                                        <li className="cta text-dark fw-medium" key={index}>
                                            <Link className="dropdown-item text-decoration-none text-dark fw-medium fs-5" to={link.to}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
