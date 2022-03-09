import React from 'react'
import { Avatar, name, surname, username } from 'react-lorem-ipsum';


export default function Equipo() {
    return (
        <div class="text-center text-uppercase" >
            <h1 class="text-center">Equipo</h1>
            <Avatar gender="female" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('female')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div> 
            <Avatar className="picture" gender="male" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('male')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div>
            <Avatar gender="female" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('female')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div>
            <Avatar className="picture" gender="male" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('male')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div>
        </div>
    )
}
