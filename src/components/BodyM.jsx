import React from 'react' // import ALWAYS react //
import '../utils/css/bodyMStyles.css'  // Styles //
import conversion from '../utils/images/conversion.mp4'
import signos from '../utils/images/signos.mp4'
import trivia from '../utils/images/trivia.mp4'

const BodyM = () => {
    return (
        <div className="containerSlider">
            <h1 name="Repository" id="Repository"></h1>

            <ul className="slider">
                <li id="slide1"> {/*First slide*/}
                    <video className='conversion' autoPlay loop muted>
                        <source src={conversion} type='video/mp4' alt="Vídeo" />
                    </video>
                    <div className="infoRep">
                        <p><strong>CONVERSOR DE TEMPERATURA</strong></p><br/>
                        <br/>Conversor de escalas de temperatura (Fahrenheit→Celsius, Fahrenheit→Kelvin, Celsius→Fahrenheit, Celsius→Kelvin,Kelvin→Fahrenheit, Kelvin→Celsius). Realizado con HTML, CSS y JS
                        <p><strong> &#171; FUNCIONAMIENTO </strong></p>
                    </div>
                </li>
                <li id="slide2"> {/*Second slide*/}
                    <video className='signos'autoPlay loop muted>
                        <source src={signos} type='video/mp4' alt="Vídeo" />
                    </video>
                    <div className="infoRep">
                        <p><strong>SIGNOS ZODIACALES</strong></p>
                        El proyecto perfecto para los amantes e interesados en la astrología. Con este, el usuario descubrira lo que los astros tienen preparados para él.
                        <p><strong> &#171; FUNCIONAMIENTO </strong></p>
                    </div>
                </li>
                <li id="slide3"> {/*Third slide*/}
                    <video className='trivia' autoPlay loop muted>
                        <source src={trivia} type='video/mp4' alt="Vídeo" />
                    </video>
                    <div className="infoRep">
                        <p><strong>TRIVIA</strong></p><br/>
                        <br/>Interfaz que presenta información acerca de Colombia y adicional, una trivia para medir lo leído y los conocimientos previos.<br/>
                        <p><strong> &#171; FUNCIONAMIENTO </strong></p>
                    </div>
                </li>
            </ul>
            <ul className="menu">
                <li>
                    <a href="#slide1">1</a>  {/*First slide*/}
                </li>
                <li>
                    <a href="#slide2">2</a>  {/*Second slide*/}
                </li>
                <li>
                    <a href="#slide3">3</a>  {/*Third slide*/}
                </li>     
            </ul>
            <a href='https://github.com/dennisear/'><button type="button" className="ButtonH"><h3>Ver proyectos en GitHub</h3></button></a> {/* Button that redirects me to my github account */}

        </div> 
    )
}
export default BodyM