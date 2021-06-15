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
    border-radius: 25px;
    font-size: 20px;
    width: auto;
    height: auto;
    padding: 3% 3% 3% 3%;
    color: #00C0B1;
    border-color: #58575D;
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


`;
export default GlobalStyles;