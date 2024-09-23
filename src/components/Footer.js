import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='footer1'>

            <section className='footer'>
                <div className='text-center'>
                    <div className='row mt-5'>
                        <div>
                            <h6>General Information</h6>
                            <p className="text-center">
                                Addresses: 4900 E Colfax Ave, Denver, CO 80220
                            </p>
                            <p className='text-center'>
                                vivacoffee
                            </p>
                            <p className='text-center'>
                                Open Daily 6:00am - 3:00pm
                            </p>
                            <p className='text-center'>
                            (720) 327-0267
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