import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/About">
            <About />
        </Route>
        <Route exact path="/Projects">
            <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
