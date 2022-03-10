import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='footer1'>

            <section className='footer'>
                <div className='text-center'>
                    <div className='row mt-5'>
                        <div>
                            <h6>Contacto</h6>
                            <p className="text-center">
                                Guadalajara, Jalisco 44898, MX
                            </p>
                            <p className='text-center'>
                                freddy_detallado@hotmail.com
                            </p>
                            <p className='text-center'>
                                Abierto de Lunes a Viernes 9:00 am - 7:00pm
                            </p>
                            <p className='text-center'>
                                Sabados 9:00 am - 2:00pm
                            </p>
                            <p className='text-center'>
                                +52 33 3384 2373
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                © 2022 Copyright: <a href="https://df-developer.netlify.app/">David Flores</a>
            </div>
        </MDBFooter>
    );
}