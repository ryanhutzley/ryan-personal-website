import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { useState } from 'react'

function App() {
  const [windowWidth, setWindowWidth] = useState(false)

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      console.log(window.innerWidth)
      setWindowWidth(true)
    } else {
      setWindowWidth(false)
    }
  })

  return (
    <div>
      <GlobalStyle />
      <NavBar windowWidth={windowWidth}/>
        <Switch>
          <Route exact path="/">
              <Home windowWidth={windowWidth}/>
          </Route>
          <Route exact path="/About">
              <About windowWidth={windowWidth}/>
          </Route>
          <Route exact path="/Projects">
              <Projects windowWidth={windowWidth}/>
          </Route>
        </Switch>
      <Footer windowWidth={windowWidth} />
    </div>
  );
}

export default App;
