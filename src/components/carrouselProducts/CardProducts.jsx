import Fade from 'react-reveal/Fade';
import './cardProducts.css'

export default function CardProducts() {
    return (
        <>
            <section className='border-dark d-flex flex-column p-5'>
                <div className='m-3'>
                    <h1 className='text-center fs-1'>
                        Novedades
                    </h1>
                    <h2 className='text-center fs-3'>
                        Estos son los nuevos productos que incorporamos para vos ¡no te los pierdas!
                    </h2>
                </div>
                <div className="wrap">
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://i0.wp.com/textilcalzada.com/wp-content/uploads/2020/05/online_store_55.jpg?w=800&ssl=1" />
                            <div className="txt">
                                <h2> Chair Collection </h2>
                                <p> Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum  </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://i0.wp.com/textilcalzada.com/wp-content/uploads/2020/05/online_store_54.jpg?w=800&ssl=1" />
                            <div className="txt">
                                <h2> Desk Collection </h2>
                                <p> Nulla quis lorem ut libero malesuada feugiat </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://i0.wp.com/textilcalzada.com/wp-content/uploads/2020/05/online_store_53.jpg?w=800&ssl=1" />
                            <div className="txt">
                                <h2> Accessories </h2>
                                <p> Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum  </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://d368auk498h4tr.cloudfront.net/wp-content/uploads/2022/05/6068-6.jpg" />
                            <div className="txt">
                                <h2>Title</h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti! </p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className='m-3'>
                    <h1 className='text-center fs-1'>
                        Nuestros Productos
                    </h1>
                </div>
                <div className="wrap">
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://i0.wp.com/textilcalzada.com/wp-content/uploads/2020/05/online_store_55.jpg?w=800&ssl=1" />
                            <div className="txt">
                                <h2> Chair Collection </h2>
                                <p> Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum  </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://i0.wp.com/textilcalzada.com/wp-content/uploads/2020/05/online_store_54.jpg?w=800&ssl=1" />
                            <div className="txt">
                                <h2> Desk Collection </h2>
                                <p> Nulla quis lorem ut libero malesuada feugiat </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://i0.wp.com/textilcalzada.com/wp-content/uploads/2020/05/online_store_53.jpg?w=800&ssl=1" />
                            <div className="txt">
                                <h2> Accessories </h2>
                                <p> Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum  </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="item-card">
                            <img className='h-100 w-100' src="https://d368auk498h4tr.cloudfront.net/wp-content/uploads/2022/05/6068-6.jpg" />
                            <div className="txt">
                                <h2>Title</h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti! </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    );
}
