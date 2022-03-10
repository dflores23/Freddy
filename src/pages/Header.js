import React from 'react';

export default function Header() {
    return (
        <header>
            <div
                className='bg-image'
                style={{ backgroundImage: "url('https://scontent.xx.fbcdn.net/v/t1.15752-9/275450742_4992788550805336_6798419080914109545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=VNEPaGzLsWIAX_qM8sv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLm84AYYf4RYaoPN69LGcLgkTFtnxYKmix3TpYCr6S_8g&oe=6250AE79')", height: 270,  }}
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