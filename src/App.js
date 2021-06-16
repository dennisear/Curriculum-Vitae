import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "./pages/Main/Main"
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import HeaderM from "./components/HeaderM"
import BodyM from "./components/BodyM"

function App() {
  return (
    <div className="App">
    <Router>
     <GlobalStyles/>
     <Switch>
      <Route path="/"exact component={Main}/>
      <Route path="/Home"exact component={Home}/>
      <Route path="/AboutMe"exact component={AboutMe}/>
      <Route path="/HeaderM"exact component={HeaderM}/>
      <Route path="/BodyM"exact component={BodyM}/>
    </Switch>
    </Router>
    </div>
  )
}
export default App;
