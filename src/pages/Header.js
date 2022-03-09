import React from 'react';

export default function Header() {
    return (
        <header>
            <div
                className='bg-image'
                style={{ backgroundImage: "url('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/hero-banner/huracan/11_18_sto_lancio/Huracan_STO.png')", height: 270,  }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}