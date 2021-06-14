import {createGlobalStyle} from 'styled-components'

const GlobalStyles=createGlobalStyle` 

*{
    margin: 0;
    padding: 0;
}

.allHeader{
    margin-top: 1%;
    margin-bottom: 1%;
    display: flex;
}

.containerHeader{
    background: hsl(175, 100%, 38%);
    position: absolute;
    font-size: 30px;
}

.titleHeader{
    display: flex;
}

h1{
    color: #FFFAFA;
    font-size: 60px;
}

h2{
    color: #58575D;
    font-size: 55px;
}

.subtitleHeader{
    color: #FFFAFA;
    font-size: 25px;
    text-align: left;
    margin-top: 1%;

}






`;

export default GlobalStyles;