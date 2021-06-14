
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path="/"exact component={Home}/>
    <Route path="/AboutMe"exact component={AboutMe}/>
    </Switch>
    </Router>
    </div>
  )
}
export default App;
