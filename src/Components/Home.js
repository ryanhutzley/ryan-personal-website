import styled from 'styled-components'
import profile_photo from '../images/profile_photo.jpeg'
import resume from '../images/Ryan Hutzley Resume.pdf'

const HomeWrapper = styled.div`
    margin: auto 0;
    margin-top: ${props => props.windowwidth ? '40px' : ''};
    margin-bottom: ${props => props.windowwidth ? '40px' : ''};
`

const Quote = styled.div`
    width: 90vw;
    height: 50px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

// text-align: center;
//     font-size: 28px;

const ContentWrapper = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: ${props => props.windowwidth ? '20px' : '100px'};
    flex-wrap: wrap;
`

// margin-bottom: ${props => props.windowwidth ? '50px' : '100px'};

const StyledImage = styled.img`
    position: relative;
    border-radius: 30px;
    box-shadow:  20px 20px 60px #d08400,
             -20px -20px 60px #ffb200;
    width: ${props => props.windowwidth ? '250px' : ''};
    height: ${props => props.windowwidth ? '250px' : '400px'};
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
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const SingleVector = styled.a`
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
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
                        <Vectors>
                            <SingleVector href='mailto: ryanhutzley@gmail.com'>
                                <img src={gmail} alt='gmail'/>
                            </SingleVector>
                            <SingleVector href='https://ryanhutzley.medium.com/'>
                                <img src={medium} alt='medium'/>
                            </SingleVector>
                            <SingleVector href='https://www.linkedin.com/in/ryan-hutzley-0246a8169/'>
                                <img src={linkedin} alt='linkedin'/>
                            </SingleVector>
                            <SingleVector href='https://twitter.com/ryan_hutzley'>
                                <img src={twitter} alt='twitter'/>
                            </SingleVector>
                            <SingleVector href='https://github.com/ryanhutzley'>
                                <img src={github} alt='github'/>
                            </SingleVector>
                        </Vectors>
                    </Clickables>
                </Bio>
            </ContentWrapper>
            <Quote><span className='italics'>"To give anything less than your best is to sacrifice the gift."</span> - Steve Prefontaine</Quote>
        </HomeWrapper>
    )
}

export default Home