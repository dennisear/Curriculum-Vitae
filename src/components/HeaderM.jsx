import React from 'react' // import ALWAYS react //
import {Link} from 'react-router-dom' //Declaration//
import '../utils/css/headerMStyles.css' //Styles//
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
                    <button type="button" id="boton" className="grow_spin">Formación académica</button> {/* Button that takes me to the page 'formación académica' */}
                </Link>
                <Link to='AboutMe/'>
                    <button type="button" id="boton" className="grow_spin">Sobre mí</button> {/* Button that takes me to the page about me */}
                </Link>
                <Link to='BodyM/'>
                    <button type="button" id="boton" className="grow_spin">Conoce mi trabajo</button> {/* Button that takes me to the component body*/}
               </Link>
            </div>
            <div className="Banner">
               <img src={Banner} alt="Banner"></img>
            </div>
        </div>
    )
}
export default HeaderM