import React from 'react'
import Iframe from 'react-iframe'


export default function Inicio() {
    return (
        <>
            <p class="text-center">Somos una empresa de estética automotriz, donde lo más importante es satisfacer a los clientes.</p>
            <br />
            <div class="text-center">
                <p className="hola">Aplicación de protección “Grafeno” en pintura y cristales</p>
                <Iframe url="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ffreddysautodetail%2Fvideos%2F697297488106616%2F&show_text=false&width=560&t=0" width="370px" height="310px" id="myId" className="video" display="initial" position="relative"></Iframe>
            </div>
            <div class="text-center">
                <p className="hola">Detallado profundo, lavado con espuma alcalina y protección base Grafeno a esta BMW X1</p>
                <Iframe url="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ffreddysautodetail%2Fvideos%2F576774390433043%2F&show_text=false&width=560&t=0" width="370px" height="310px" id="myId" className="video" display="initial" position="relative"></Iframe>
            </div>
        </>
    )
}
