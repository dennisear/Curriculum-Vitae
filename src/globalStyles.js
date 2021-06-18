import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Roboto-Medium.ttf'
import SecundaryFont from './utils/fonts/Roboto-Light.ttf'

const GlobalStyles=createGlobalStyle` 

*{
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'RobotoL';
    src: local('RobotoL'), url(${SecundaryFont}) format('ttf');

    font-family: 'RobotoM';
    src: local('RobotoM'), url(${PrimaryFont}) format('ttf');
}

.allHeader{
    margin-top: 1%;
    margin-bottom: 1%;
    display: flex;
}

.titleHeader{
    font-family: RobotoM;
    display: flex;
}

h1{
    color: #FFFAFA;
    font-size: 55px;
    font-family: RobotoL;
}

h2{
    color: #58575D;
    font-size: 55px;
    Font-family: RobotoL;
}



.subtitleHeader{
    font-size: 25px;
    text-align: left;
    margin-top: 1%;
    Font-family: RobotoL;

}



.Title{
    padding: 7% 9% 4%;
    display: flex;
    color: #00C0B1;
    justify-content: center;
    font-size: 20px;

}
.IconT{
    background: #00C0B1;
    border-radius: 40px;
    padding: .9%;
}
.IconT img{
    width: 35px;
    height: 28px;
}


.Button{
    background: #58575D; 
    border-radius:30px;
    font-size: 20px;
    padding: 2%;
    color: #00C0B1;
}

.ButtonH{
    width: 65%;
    height: 50px;
    margin-bottom: 3%;
    color: #58575D;
    background: hsl(175, 100%, 38%);
    border-radius: 25px;

}

.btn {
    box-sizing: border-box;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    border: 2px solid #58575D;
    border-radius: 0.6em;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-self: center;
        -ms-flex-item-align: center;
            align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    justify-content: center;
    font-weight: 700;
    width: 85%;
    heigth: auto;
  }
  .btn:hover, .btn:focus {
    color: #58575D;
    outline: 0;
  }
  .third {
    border-color: #58575D;
    color: #fff;
    box-shadow: 0 0 40px 40px #58575D inset, 0 0 0 0 #58575D;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
  }
  .third:hover {
    box-shadow: 0 0 10px 0 #58575D inset, 0 0 10px 4px #58575D;
  }
  /*Home button styles and animations*/

  #boton {
    font-size: 15px;
    background: #00C0B1;
    color: #fff;
    border: 0.25rem solid #00C0B1;
    margin: 16px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 200px;
    height: 40px;
    justify-content: center;
  }
  #boton:hover {
    color: #00C0B1;
  }
  #boton::after {
    content: "";
    background: #fff;
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
  }
  Button[class^="grow"]::after {
    transition: all 0.3s ease;
  }
  Button[class^="grow"]:hover::after {
    transition: all 0.3s ease-out;
  }
  Button.grow_spin::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: scale(0, 0) rotate(-180deg);
  }
  Button.grow_spin:hover::after {
    transform: scale(1, 1) rotate(0deg);
  }
  
  






@media only screen and (min-width:340px) and (max-width:580px){

    h1{
        color: #FFFAFA;
        font-size: 55px;
        font-family: RobotoL;
    }
    
    h2{
        color: #58575D;
        font-size: 55px;
        Font-family: RobotoL;
    }
    
}
@media only screen and (min-width:769px) and (max-width:1024px){
    h1{
        color: #FFFAFA;
        font-size: 55px;
        font-family: RobotoL;
    }
    
    h2{
        color: #58575D;
        font-size: 55px;
        Font-family: RobotoL;
    }

}








`;

export default GlobalStyles;