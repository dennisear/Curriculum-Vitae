import React from 'react' // importar SIEMPRE react //
import '../utils/css/bodyMStyles.css'

const BodyM = () => {
    return (
        <div className="containerSlider">
            <ul className="slider">
            <li id="slide1">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/car.jpg" />
            </li>
            <li id="slide2">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg" />
            </li>
            <li id="slide3">
                <h1>Ejemplo con otros elementos</h1>
                <p>Esto es un párrafo de ejemplo para comprobar que podemos meter cualquier tipo de elementos en el slider</p>
                <a href="https://kikopalomares.com/">¡Corre a mi web para más contenido!</a>
            </li>
            </ul>
            <ul className="menu">
            <li>
                <a href="#slide1">1</a>
            </li>
            <li>
                <a href="#slide2">2</a>
            </li>
            <li>
                <a href="#slide3">3</a>
            </li>
            </ul>
      </div>       
    )
}
export default BodyM