import React from 'react'
import Iframe from 'react-iframe'


export default function Inicio() {
    return (
        <>
            <p class="text-center">Somos una empresa de estética automotriz, donde lo más importante es satisfacer a los clientes.</p>
            <div class="text-center">
                <Iframe url="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ffreddysautodetail%2Fvideos%2F697297488106616%2F&show_text=false&width=560&t=0" width="90%" height="410px" id="myId" className="video" display="initial" position="relative"></Iframe>
                <p className="video">Aplicación de protección “Grafeno” en pintura y cristales</p>
            </div>
            <div class="text-center">
                <Iframe url="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ffreddysautodetail%2Fvideos%2F576774390433043%2F&show_text=false&width=560&t=0" width="90%" height="410px" id="myId" className="video" display="initial" position="relative"></Iframe>
                <p className="video">Detallado profundo, lavado con espuma alcalina y protección base Grafeno a esta BMW X1</p>
            </div>
        </>
    )
}
