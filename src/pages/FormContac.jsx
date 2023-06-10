import Fade from 'react-reveal/Fade';
import "../style/formContac.css";
import { Email, PhoneIcon, WhatsappIcon } from '../asset/icon/index'

function FormContac() {
    return (
        <main className="ctn-formContac border border-dark">
            <div className="d- flex contact-info m-5 p-1">
                <Fade left>
                    <h1 className="fs-2 text-center" style={{ color: '#333333', fontWeight: 700, marginBottom: '15px' }}>
                        ¿Necesitas más información o queres contactarnos? <br />
                        Déjanos tus datos y nos pondremos en contacto contigo
                    </h1>
                    <br />
                    <h2 className="fs-2 text-center" style={{ color: '#333333', fontWeight: 700, marginBottom: '15px' }}>
                        ¡CONTACTANOS!
                    </h2>
                    <div>
                        <div className="d-flex align-items-center justify-content-evenly flex-wrap m-2 p-2">
                            <div style={{ width: 320, margin: 2 }}>
                                <a style={{ textDecoration: 'none', color: '#333333', fontWeight: 'bold', fontSize: 20 }} href='tel:555-666-7777' target="_blank" rel="noreferrer">
                                    <img className="icon-contact" src={PhoneIcon} />
                                    (235) 462-3623
                                </a>
                            </div>
                            <div style={{ width: 320, margin: 2 }}>
                                <a style={{ textDecoration: 'none', color: '#333333', fontWeight: 'bold', fontSize: 20 }} href='https://api.whatsapp.com/send/?phone=541136821653&text=Buenos Dias, gracias por comunicarte con textil calzada, dejanos un mensaje y te responderemo a la brevedad.
                                ' target="_blank" rel="noreferrer">
                                    <img className="icon-contact" src={WhatsappIcon} />
                                    1136821653
                                </a>
                            </div>
                            <div style={{ width: 320, margin: 2 }}>
                                <a style={{ textDecoration: 'none', color: '#333333', fontWeight: 'bold', fontSize: 20 }} href="mailto:m.bluth@example.com" target="_blank" rel="noreferrer">
                                    <img className="icon-contact" src={Email} />
                                    textil_calzada@hotmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="fs-2 text-center" style={{ color: '#333333', fontWeight: 700, marginBottom: '15px' }}>
                            ¡NUESTRAS REDES!
                        </h2>
                        <div className="d-flex align-items-center justify-content-evenly flex-wrap m-2 p-2">
                            <div>
                                <a className='btn-form' href="https://www.facebook.com/textilcalzada" target="_blank" rel="noreferrer" style={{ color: 'white' }}> Facebook </a>
                            </div>
                            <div>
                                <a className='btn-form' href="https://www.instagram.com/textil_calzada/?hl=en" target="_blank" rel="noreferrer" style={{ color: 'white' }}> Instagram </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="d-flex align-items-center m-2 p-1">
                <Fade right>
                    <div className="card">
                        <div className="inputBox">
                            <input type="text" required="required" />
                            <span className="user">Nombre</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required="required" />
                            <span>Apellido</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required="required" style={{ height: '75px' }} />
                            <span>Mensaje</span>
                        </div>
                        <button className="btn-form">Enviar</button>
                    </div>
                </Fade>
            </div>
        </main>
    );
}

export default FormContac;
