import styled from 'styled-components'
import profile_photo from '../images/profile_photo.jpeg'

const HomeWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    gap: ${props => props.windowWidth ? '20px' : '120px'};
    flex-wrap: wrap;
`

const StyledImage = styled.img`
    position: relative;
    border-radius: 30px;
    box-shadow:  20px 20px 60px #d08400,
             -20px -20px 60px #ffb200;
    width: ${props => props.windowWidth ? '200px' : ''};
    height: ${props => props.windowWidth ? '200px' : '300px'};
`

const Bio = styled.div`
    width: ${props => props.windowWidth ? '75%' : '40%'};
    font-size: 28px;
    
`

function Home({ windowWidth }) {
    return (
        <HomeWrapper windowWidth={windowWidth}>
            <StyledImage src={profile_photo} windowWidth={windowWidth} />
            <Bio windowWidth={windowWidth}>Hello! My name is Ryan Hutzley. I am a Full-Stack Developer with a passion for sports, wellness, and travel.</Bio>
        </HomeWrapper>
    )
}

export default Home