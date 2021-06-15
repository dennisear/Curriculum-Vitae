import React from 'react' // importar SIEMPRE react //
import '../utils/css/headerStyles.css'
import Git from '../utils/images/git.png'
import Linkedin from '../utils/images/linkedin.png'
import {Link} from 'react-router-dom'

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
                        <Link to='https://github.com/dennisear/'>
                        <button type="button" className="ButtonH"><h3>@dennisear</h3></button>
                        </Link> 
                        <Link to='https://www.linkedin.com/in/dennis-arango/'>
                        <button type="button" className="ButtonH"><h3>@dennis-arango</h3></button>
                        </Link>  
                    </div>
                </div>
            </div>
            <div className="Circle">
                <div className="photo">
                    <div>

                   </div>
                </div>
            </div>
        </div>
    )
}
export default Header