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
                <div className='container text-center text-md-start mt-4'>
                    <div className='row mt-3'>
                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-center text-uppercase fw-bold mb-4'>Contacto</h6>
                            <p className="text-center">
                                <i className='fas fa-home me-3'></i> Guadalajara, Jalisco 44820, MX
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                freddy's@example.com
                            </p>
                            <p className='text-center'>
                                <i className='fas fa-phone me-3'></i> + 01 234 567 88
                            </p>
                            <p className='text-center'>
                                <i className='fas fa-print me-3'></i> + 01 234 567 89
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