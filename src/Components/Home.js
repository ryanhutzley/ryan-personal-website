import styled from 'styled-components'
import profile_photo from '../images/profile_photo.jpeg'

const HomeWrapper = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: ${props => props.windowwidth ? '20px' : '100px'};
    flex-wrap: wrap;
    margin-bottom: ${props => props.windowwidth ? '10px' : '100px'};
`

const StyledImage = styled.img`
    position: relative;
    border-radius: 30px;
    box-shadow:  20px 20px 60px #d08400,
             -20px -20px 60px #ffb200;
    width: ${props => props.windowwidth ? '200px' : ''};
    height: ${props => props.windowwidth ? '200px' : '300px'};
`

const Bio = styled.div`
    width: ${props => props.windowwidth ? '75%' : '40%'};
    font-size: 28px;
    
`

function Home({ windowWidth }) {
    return (
        <>
            <HomeWrapper windowwidth={windowWidth ? 'true' : ''}>
                <StyledImage src={profile_photo} windowwidth={windowWidth ? 'true' : ''} />
                <Bio windowwidth={windowWidth ? 'true' : ''}><span className='bold'>Hello! My name is Ryan Hutzley.</span> <br/><br/> I am a Full-Stack Developer experienced in Ruby on Rails and JavaScript based programming, with a background is in law and sports performance. <span className='italics'>Let's connect!</span></Bio>
            </HomeWrapper>
        </>
    )
}

export default Home