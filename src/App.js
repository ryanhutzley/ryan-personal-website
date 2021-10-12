import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { useState } from 'react'
import styled from 'styled-components'
import gmail from '../src/images/icons8-gmail-75.png'
import medium from '../src/images/icons8-medium-monogram-75.png'
import linkedin from '../src/images/icons8-linkedin-75.png'
import twitter from '../src/images/icons8-twitter-75.png'
import github from '../src/images/icons8-github-75.png'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  const [windowWidth, setWindowWidth] = useState(false)

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setWindowWidth(true)
    } else {
      setWindowWidth(false)
    }
  })

  return (
    <Container>
    <GlobalStyle />
      <NavBar windowWidth={windowWidth}/>
        <Switch>
          <Route exact path="/">
              <Home windowWidth={windowWidth} gmail={gmail} medium={medium} linkedin={linkedin} twitter={twitter} github={github}/>
          </Route>
          <Route exact path="/About">
              <About windowWidth={windowWidth}/>
          </Route>
          <Route exact path="/Projects">
              <Projects windowWidth={windowWidth}/>
          </Route>
        </Switch>
      <Footer windowWidth={windowWidth} gmail={gmail} medium={medium} linkedin={linkedin} twitter={twitter} github={github} />
    </Container>
  );
}

export default App;
