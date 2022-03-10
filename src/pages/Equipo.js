import React from 'react'
import { Avatar, name, surname, username } from 'react-lorem-ipsum';


export default function Equipo() {
    return (
        <div class="text-center text-uppercase" >
            <h1 class="text-center">Equipo</h1>
            <img src="https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/245847364_4568549573167121_8622151214908424915_n.jpg?stp=c0.79.720.720a_dst-jpg_s552x414&_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=BM22JxeemawAX9wZMSH&tn=ofjlS9rnmlvQc6Oe&_nc_ht=scontent-den4-1.xx&oh=00_AT_S2kkgOaxJUtxuGERWjjER7b3svigH69F8b4igMdD5-w&oe=622FF9CC" width="200" height="200" alt="Avatar" />
            <div className="name">Alfredo Mejia</div>
            <div className="surname">Kiko</div>
            <div className="username">Fundador y dueño de este establecimiento de borrachos</div> 
            <br></br>
            <Avatar gender="male" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('male')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div>
            <Avatar gender="female" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('female')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div>
            <Avatar gender="male" className="avatar" width="200" height="200" alt="Avatar" />
            <div className="name">{name('male')}</div>
            <div className="surname">{surname()}</div>
            <div className="username">{username()}</div>
        </div>
    )
}
