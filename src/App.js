import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Modal from './Components/Modal'
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
  const [isDisplayed, setDisplayed] = useState(false)
  const [modalData, setModalData] = useState({
      logo: undefined,
      description: undefined,
      repo1: undefined,
      repo2: null,
      demo: undefined,
      liveSite: undefined
  })

  function toggleModal(data) {
    setModalData({...modalData, ...data})
    setDisplayed(true)
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setWindowWidth(true)
    } else {
      setWindowWidth(false)
    }
  })

  console.log(isDisplayed)

  return (
    <Container id='page-container'>
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
              <Projects windowWidth={windowWidth} toggleModal={toggleModal}/>
          </Route>
        </Switch>
        {isDisplayed ? <Modal modalData={modalData} /> : null}
      <Footer windowWidth={windowWidth} gmail={gmail} medium={medium} linkedin={linkedin} twitter={twitter} github={github} />
    </Container>
  );
}

export default App;
