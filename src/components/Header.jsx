import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import textilCalzada from '../asset/image/textilCalzada.webp'
import "../style/header.css";

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            header.classList.toggle("scrollDown", window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const navLinks = [
        { text: "Broderie", to: "/broderie" },
        { text: "Camiseria", to: "/camiseria" },
        { text: "Coral", to: "/coral" },
        { text: "Cuerina", to: "/cuerina" },
        // { text: "Gabardina", to: "/gabardina" },
        // { text: "Interlock", to: "/interlock" },
        // { text: "Lanilla", to: "/lanilla" },
        // { text: "Loneta Estampada", to: "/loneta-estampada" },
        // { text: "Matelasse", to: "/matelasse" },
        // { text: "Modal", to: "/modal" },
        // { text: "Panama", to: "/panama" },
        // { text: "Peluche", to: "/peluche" },
        // { text: "Pique", to: "/pique" },
        // { text: "Plastico Estampado", to: "/plastico-estampado" },
        // { text: "Player", to: "/player" },
        // { text: "Polar", to: "/polar" },
        // { text: "Sabaneria", to: "/sabaneria" },
        // { text: "Sicilia", to: "/sicilia" },
        // { text: "Toalla", to: "/toalla" },
    ];

    return (
        <>
            <header className='ctn-header'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item cta">
                                    <NavLink to="#" className="nav-link text-dark hover-underline-animation fs-4">
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to="#"
                                        className="nav-link dropdown-toggle text-dark fs-4"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Blanco
                                    </NavLink>
                                    <ul className="dropdown-menu p-0 m-0">
                                        <li className="cta">
                                            <NavLink className="dropdown-item bg-light text-dark fs-5 hover-underline-animation">
                                                Linea de Cama
                                            </NavLink>
                                        </li>
                                        <li className="cta">
                                            <NavLink className="dropdown-item bg-light text-dark fs-5 hover-underline-animation">
                                                Living y Ambiente
                                            </NavLink>
                                        </li>
                                        <li className="cta">
                                            <NavLink className="dropdown-item bg-light text-dark fs-5 hover-underline-animation">
                                                Linea Cocina
                                            </NavLink>
                                        </li>
                                        <li className="cta">
                                            <NavLink className="dropdown-item bg-light text-dark fs-5 hover-underline-animation">
                                                Linea Baño
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to="#"
                                        className="nav-link dropdown-toggle text-dark fs-4"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Telas
                                    </NavLink>
                                    <ul className="dropdown-menu p-0 m-0">
                                        {navLinks.map((link) => (
                                            <li className="cta" key={link.to}>
                                                <NavLink
                                                    to={link.to}
                                                    className="dropdown-item fs-5 hover-underline-animation"
                                                    activeClassName="active"
                                                >
                                                    {link.text}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <figure className='ctnLogo'>
                    <img className='logo' src={textilCalzada} />
                </figure>
            </header>
        </>
    );
};

export default Header;
