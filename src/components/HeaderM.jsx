import React from 'react' // importar SIEMPRE react //
import {Link} from 'react-router-dom'
import '../utils/css/headerMStyles.css'
import Logo from '../utils/images/logo.png'
import Banner from '../utils/images/banner.jpg'

const HeaderM = () => {
    return (
        <div className="allHeaderM">
            <div className="Logo">
               <img src={Logo} alt="Logo"/>
            </div>
            <div className="Menu"> 
                <Link to='/Home'>
                    <button type="button" id="boton" className="grow_spin">Formación académica</button>
                </Link>
                <Link to='AboutMe/'>
                    <button type="button" id="boton" className="grow_spin">Sobre mí</button>
                </Link>
            </div>
            <div className="Banner">
               <img src={Banner} alt="Banner"></img>
            </div>
        </div>
    )
}
export default HeaderM