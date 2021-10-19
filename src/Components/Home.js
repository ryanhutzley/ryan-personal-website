import styled from 'styled-components'
import profile_photo from '../images/profile_photo.jpeg'
import resume from '../images/Ryan Hutzley Resume.pdf'
import js from '../images/icons8-javascript-100.png'
import css from '../images/icons8-css3-100.png'
import html from '../images/icons8-html-5-100.png'
import react from '../images/icons8-react-100.png'
import ruby from '../images/icons8-ruby-programming-language-100.png'
import ror from '../images/icons8-ruby-on-rails-100.png'
import postgres from '../images/icons8-postgresql-100.png'
import git from '../images/icons8-git-100.png'
import vscode from '../images/icons8-visual-studio-logo-100.png' 

const HomeWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.windowwidth ? '20px' : '80px'};
    justify-content: center;
    align-items: center;
`

// margin-top: ${props => props.windowwidth ? '40px' : '30px'};
// margin-bottom: 80px;

const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${props => props.windowwidth ? '20px' : '100px'};
    flex-wrap: wrap;
    
`

// margin-bottom: 40px;

// margin-bottom: ${props => props.windowwidth ? '50px' : '100px'};

const StyledImage = styled.img`
    position: relative;
    border-radius: 30px;
    box-shadow:  20px 20px 60px #d08400,
             -20px -20px 60px #ffb200;
    width: ${props => props.windowwidth ? '220px' : ''};
    height: ${props => props.windowwidth ? '220px' : '400px'};
`

const Bio = styled.div`
    width: ${props => props.windowwidth ? '75%' : '40%'};
    font-size: 28px;
`

const Clickables = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledButton = styled.button`
    min-width: 130px;
    margin: auto;
    height: 40px;
    color: #f59b00;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    border: 2px solid black;
    background: black;
    &:hover {
        background: #f59b00;
        color: #212529
    }
`

const Vectors = styled.div`
    display: inline-flex;
    justify-content: center;
    gap: ${props => props.windowwidth ? '20px' : '80px'};
`

const Quote = styled.div`
    text-align: center;
    font-size: 28px;
    margin-bottom: ${props => props.windowwidth ? '30px' : ''};
`

// justify-content: space-evenly;

export const SingleVector = styled.a`
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`

const LanguagesContainer = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


function Home({ windowWidth, gmail, medium, linkedin, twitter, github }) {
    return (
        <HomeWrapper windowwidth={windowWidth ? 'true' : ''}>
            <ContentWrapper windowwidth={windowWidth ? 'true' : ''}>
                <StyledImage src={profile_photo} windowwidth={windowWidth ? 'true' : ''} />
                <Bio windowwidth={windowWidth ? 'true' : ''}>
                    <span className='bold'>Hello! My name is Ryan Hutzley.</span> 
                    <br/><br/> 
                    I am a Full-Stack Developer experienced in Ruby on Rails and JavaScript based programming, with a background in law and sports performance. 
                    <span className='italics'> Let's connect!</span>
                    <br/><br/> 
                    <Clickables>
                        <StyledButton onClick={() => window.open(resume)}>Resume</StyledButton>
                        <br></br>
                        <Vectors windowwidth={windowWidth ? 'true' : ''}>
                            <SingleVector href='mailto: ryanhutzley@gmail.com'>
                                <img src={gmail} alt='gmail'/>
                            </SingleVector>
                            {/* <SingleVector href='https://ryanhutzley.medium.com/'>
                                <img src={medium} alt='medium'/>
                            </SingleVector> */}
                            <SingleVector href='https://www.linkedin.com/in/ryan-hutzley-0246a8169/'>
                                <img src={linkedin} alt='linkedin'/>
                            </SingleVector>
                            {/* <SingleVector href='https://twitter.com/ryan_hutzley'>
                                <img src={twitter} alt='twitter'/>
                            </SingleVector> */}
                            <SingleVector href='https://github.com/ryanhutzley'>
                                <img src={github} alt='github'/>
                            </SingleVector>
                        </Vectors>
                    </Clickables>
                </Bio>
            </ContentWrapper>
            <Quote windowwidth={windowWidth ? 'true' : ''}><span className='italics'>"To give anything less than your best is to sacrifice the gift."</span> - Steve Prefontaine</Quote>
            <LanguagesContainer>
                <img src={js} alt='javascript' />
                <img src={css} alt='css' />
                <img src={html} alt='html' />
                <img src={react} alt='react' />
                <img src={ruby} alt='ruby' />
                <img src={ror} alt='ruby on rails' />
                <img src={postgres} alt='postgres' />
                <img src={git} alt='git' />
                <img src={vscode} alt='vscode' />
            </LanguagesContainer>
        </HomeWrapper>
    )
}

export default Home