import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { Switch, Route } from 'react-router-dom'

function NavBar() {
    return (
        <div>
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
    )
}

export default NavBar