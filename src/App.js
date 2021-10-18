import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Modal from './Components/Modal'
import Footer from './Components/Footer'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { useState, useEffect } from 'react'
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
      logoNum: undefined,
      alt: undefined,
      description: undefined,
      repo1: undefined,
      repo2: null,
      demo: undefined,
      liveSite: undefined
  })

  const ref = React.createRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      console.log(e.target, 'ref :' + ref.current)
      if (isDisplayed && ref.current && !ref.current.contains(e.target)) {
        setModalData({
            logoNum: undefined,
            alt: undefined,
            description: undefined,
            details: undefined,
            repo1: undefined,
            repo2: null,
            demo: undefined,
            liveSite: undefined
        })
        setDisplayed(false)
      }
    }

    const checkIfEscaped = e => {
      if (isDisplayed && e.key === "Escape") {
        setModalData({
            logoNum: undefined,
            alt: undefined,
            description: undefined,
            details: undefined,
            repo1: undefined,
            repo2: null,
            demo: undefined,
            liveSite: undefined
        })
        setDisplayed(false)
      }
    }

    document.addEventListener("click", checkIfClickedOutside)
    document.addEventListener("keydown", checkIfEscaped)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside)
      document.removeEventListener("keydown", checkIfEscaped)
    }
  }, [isDisplayed])
  

  function activateModal(data) {
    setModalData({...modalData, ...data})
    setDisplayed(true)
  }

  function closeModal() {
    setModalData({
      logoNum: undefined,
      alt: undefined,
      description: undefined,
      details: undefined,
      repo1: undefined,
      repo2: null,
      demo: undefined,
      liveSite: undefined
    })
    setDisplayed(false)
  }

  // function closeModal(e) {
  //   debugger
  //   const activeModal = document.querySelector('.sc-kfzBvY')
  //   console.log(activeModal)
  //   if (!activeModal.contains(e.target)) {
  //     setModalData({
  //         logoNum: undefined,
  //         alt: undefined,
  //         description: undefined,
  //         repo1: undefined,
  //         repo2: null,
  //         demo: undefined,
  //         liveSite: undefined
  //     })
  //     setDisplayed(false)
  //   }
  // }
  
  // if (isDisplayed) {
  //   console.log('added')
  //   document.addEventListener("click", e => closeModal(e), true)
  // } else {
  //   console.log('removed')
  //   document.removeEventListener("click", e => closeModal(e))
  // }

  // console.log(isDisplayed)


  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setWindowWidth(true)
    } else {
      setWindowWidth(false)
    }
  })

  // console.log(windowWidth)

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
              <Projects windowWidth={windowWidth} activateModal={activateModal}/>
          </Route>
        </Switch>
        {isDisplayed ? <Modal modalData={modalData} ref={ref} closeModal={closeModal} windowWidth={windowWidth}/> : null}
      <Footer windowWidth={windowWidth} gmail={gmail} medium={medium} linkedin={linkedin} twitter={twitter} github={github} />
    </Container>
  );
}

export default App;
