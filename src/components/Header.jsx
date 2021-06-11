import React from 'react' // importar SIEMPRE react //
import '../utils/css/headerStyles.css'
import Git from '../utils/images/git.png'
import Linkedin from '../utils/images/linkedin.png'
const Header = () => {
    return (
        <div className="allHeader">
            <div className="containerHeader">
                <div className="titleHeader">
                    <h1>Dennis Yuliana</h1>
                    <h2>Arango Sánchez</h2>
                </div>
                <div className="subtitleHeader">
                    <h3>Desarrolladora Web</h3>
                </div>
                <div className="Redes">
                    <div className="Icons">
                        <img src={Git} alt="Icono GitHub"></img>
                        <img src={Linkedin} alt="Icono Linkedin"></img>
                    </div>
                    <div className="Users">
                        <h3>@UserGitHub</h3>
                        <h3>@UserLinkedin</h3>
                    </div>
                </div>
            </div>
            <div className="Circle">
                <div className="photo">
                    <h1>hola</h1>
                </div>
            </div>
        </div>

    )
}
export default Header