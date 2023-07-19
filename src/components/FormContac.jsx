import "../css/formContac.css";
import Fade from 'react-reveal/Fade';
import { Email, PhoneIcon, WhatsappIcon } from '../asset/icon/index'

function FormContac() {
    return (
        <section className="ctn-formContac border border-dark">
            <div className="d-flex flex-column justify-content-evenly align-items-center contact-info m-5 p-1">
                <Fade left>
                    <h1 className="fs-2 text-center text-dark fw-semibold">
                        ¿Necesitas más información o queres contactarnos? <br />
                        Déjanos tus datos y nos pondremos en contacto contigo
                    </h1>
                    <br />
                    <h2 className="fs-2 text-center text-dark fw-semibold">
                        ¡CONTACTANOS!
                    </h2>
                    <div>
                        <div className="d-flex align-items-center justify-content-evenly flex-wrap m-2 p-2">
                            <div className='ctn-contact'>
                                <a className='text-dark fs-5 text-decoration-none' href='tel:555-666-7777' target="_blank" rel="noreferrer">
                                    <img className="icon-contact" src={PhoneIcon} alt="logo-number" />
                                    (235) 462-3623
                                </a>
                            </div>
                            <div className='ctn-contact'>
                                <a className='text-dark fs-5 text-decoration-none' href='https://api.whatsapp.com/send/?phone=541136821653&text=Buenos Dias, gracias por comunicarte con textil calzada, dejanos un mensaje y te responderemo a la brevedad.
                                ' target="_blank" rel="noreferrer">
                                    <img className="icon-contact" src={WhatsappIcon} alt="logo-whatsapp" />
                                    1136821653
                                </a>
                            </div>
                            <div className='ctn-contact'>
                                <a className='text-dark fs-5 text-decoration-none' href="mailto:m.bluth@example.com" target="_blank" rel="noreferrer">
                                    <img className="icon-contact" src={Email} alt="logo-email" />
                                    textil_calzada@hotmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="fs-2 text-center text-dark fw-semibold" >
                            ¡NUESTRAS REDES!
                        </h2>
                        <div className="d-flex align-items-center justify-content-evenly flex-wrap m-2 p-3">
                            <div>
                                <a className='btn-form' href="https://www.facebook.com/textilcalzada" target="_blank" rel="noreferrer" > Facebook </a>
                            </div>
                            <div>
                                <a className='btn-form' href="https://www.instagram.com/textil_calzada/?hl=en" target="_blank" rel="noreferrer" > Instagram </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="d-flex align-items-center m-2 p-1">
                <Fade right>
                    <form className="card-form-contact">
                        <label className="inputBox">
                            <input className='fs-5' name='nombre' type="text" required="required" />
                            <span className="user">Nombre</span>
                        </label>
                        <label className="inputBox">
                            <input className='fs-5' name='apellido' type="text" required="required" />
                            <span>Apellido</span>
                        </label>
                        <label className="inputBox">
                            <input className='fs-5' name='email' type="email" required="required" />
                            <span>Email</span>
                        </label>
                        <label className="inputBox">
                            <input className='fs-3' name='mensaje' type="text" required="required" />
                            <span>Mensaje</span>
                        </label>
                        <button className="btn-form">Enviar</button>
                    </form>
                </Fade>
            </div>
        </section>
    );
}

export default FormContac;
