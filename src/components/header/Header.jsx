import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
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
        <header className={isScrolled ? "navbar navbar-dark bg-dark fixed-top scrollDown" : "navbar navbar-dark bg-dark fixed-top"}>
            <div className="container-fluid ctn-header">
                <h1 className="navbar-brand" style={{ marginLeft: '115px' }}>
                    Textil Calzada
                </h1>
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
                    className="offcanvas offcanvas-end text-bg-dark"
                    tabIndex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fs-5" id="offcanvasDarkNavbarLabel">
                            Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item cta text-light">
                                <Link to="/" className="nav-link active fs-5">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item cta text-light">
                                <Link to="/categorias" className="text-decoration-none text-light fs-5">
                                    Categorías
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle text-light fs-5"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Blanco
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {NavLineaCama.map((link, index) => (
                                        <li className="cta text-light" key={index}>
                                            <Link className="dropdown-item text-decoration-none text-light fs-5" to={link.to}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-light fs-5"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Telas - Confección
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {NavTelas.map((link, index) => (
                                        <li className=" text-light" key={index}>
                                            <Link className="dropdown-item text-decoration-none text-light fs-5" to={link.to}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-light fs-5"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Lanas
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {NavLanas.map((link, index) => (
                                        <li className="cta text-light" key={index}>
                                            <Link className="dropdown-item text-decoration-none text-light fs-5" to={link.to}>
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
