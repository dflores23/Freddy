import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='example-square bg-transparent shadow-1-strong text-dark'>
            <MDBContainer className='p-0'>
                <section className='mb-4'>
                    <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/search/top?q=freddy%E2%80%99s%20auto%20detail%20detallado' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/freddys_autodetail/' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                </section>
            </MDBContainer>
            <section className='footer'>
                <div className='container text-center text-md-start mt-0'>
                    <div className='row mt-5'>
                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-center text-uppercase fw-bold mb-4'>Contacto</h6>
                            <p className="text-center">
                                <i className='fas fa-home me-3'></i> Guadalajara, Jalisco 44898, MX
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                freddy_detallado@hotmail.com
                            </p>
                            <p className='text-center'>
                                <i className='fas fa-phone me-3'></i> Abierto de Lunes a Viernes 9:00 am - 7:00pm
                            </p>
                            <p className='text-center'>
                                <i className='fas fa-phone me-3'></i> Sabados 9:00 am - 2:00pm
                            </p>
                            <p className='text-center'>
                                <i className='fas fa-print me-3'></i> +52 33 3384 2373
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                © 2022 Copyright:
                <a className='text-reset fst-italic' href='https://mdbootstrap.com/'>
                     David Flores
                </a>
            </div>
        </MDBFooter>
    );
}