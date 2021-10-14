import styled from 'styled-components'
import rowingPhoto from '../images/63A0BA5F-F0BF-4B89-84D5-734A74DFE67B.JPG'

const AboutWrapper = styled.div`
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: ${props => props.windowwidth ? '90%' : '75%'};
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.windowwidth ? 'column' : 'row'};
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StyledImage = styled.img`
    width: ${props => props.windowwidth ? '220px' : '25%'};
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    border-radius: 30px;
    margin: ${props => props.windowwidth ? 'auto' : ''};
    box-shadow:  20px 20px 60px #d08400,
             -20px -20px 60px #ffb200;
`

const TextWrapper = styled.div`
    width: ${props => props.windowwidth ? '85%' : '69%'};
`

const Video = styled.iframe`
    margin: auto;
    width: ${props => props.windowwidth ? '250px' : '600px'};
    height: ${props => props.windowwidth ? '125px' : '300px'};
`

const PresentDayWrapper = styled.div`
    margin: auto;
    width: ${props => props.windowwidth ? '85%' : ''}
`

function About({ windowWidth }) {
    return (
        <AboutWrapper windowwidth={windowWidth ? 'true' : ''}>
            <BackgroundWrapper windowwidth={windowWidth ? 'true' : ''}>
                <StyledImage src={rowingPhoto} alt='rowing' windowwidth={windowWidth ? 'true' : ''}/>
                <TextWrapper windowwidth={windowWidth ? 'true' : ''}>
                    <h1 className='bold underline'>My Background</h1>
                    <p>As a former D1 student-athlete at Princeton University, I understand the grittiness required to be successful and am eager to apply that same grittiness to a role as a software engineer.</p>
                    <p>In addition to my role as a student-athlete, I served as a volunteer rowing coach for the Special Olympics Rowing Program from 2014 to 2020 (see video <a href='#video'>below</a> for more info on Special Olympics Rowing at Princeton). I am very passionate about giving back to the community, and am extremely excited to continue developing and refining this passion as a software engineer.</p>
                </TextWrapper>
            </BackgroundWrapper>
            <PresentDayWrapper windowwidth={windowWidth ? 'true' : ''}>
                <h1 className='bold underline'>Present-Day</h1>
                <p>Currently, I am refining my latest project - <a href='https://www.fuelright.app/'>FuelRight</a>, which allows users track their sleep/nutrition habits and get more from their workouts, while learning about data structures, mobile development, Python, and Machine Learning. I have also just started crafting the frontend and backend architecture for my first React Native project - an app to assist my father's bottled water business.</p>
            </PresentDayWrapper>
            <div>
                <h1 className='bold underline'>My Interests</h1>
                <p>My favorite activities include programming (developing websites and projects and learning more about computer science), reading (sci-fi and non-fiction), going to the movies, playing and writing music (guitar/keyboard - check out my most recent composition below), running, hiking, bouldering, and traveling (especially to national parks).</p>
            </div>
            <div>
                <h1 className='bold underline'>Why Coding?</h1>
                <p>After a few months of remote coworking alongside software developer friends, I fell in love with the collaboration, problem-solving, and teamwork I witnessed in my friends' day-to-day work life. Furthermore, the constant challenges within the ever evolving field of software engineering guaranteed that no engineer could ever run out of room to improve or grow. The opportunity for endless learning with other driven individuals in a field that shapes how we, as humans, interact with one another is what led me to pursue a career in software development. </p>
            </div>
            <h1 className='bold underline'>Resources</h1>
            <Video id='video' src="https://www.youtube.com/embed/viWW6CbKHjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen windowwidth={windowWidth ? 'true' : ''}></Video>
        </AboutWrapper>
    )
}

export default About

/*
My Background

As a former D1 student-athlete at Princeton University, I understand the grittiness required to be successful and am eager to apply that same grittiness to a role as a software engineer.

-- image of me rowing

In addition to my role as a student-athlete, I served as a volunteer rowing coach for the Special Olympics Rowing Program from 2014 to 2020 (see video below for more info on Special Olympics Rowing at Princeton). I am very passionate about giving back to the community, and am extremely excited to continue developing and refining this passion as a software engineer.

-- special olympics video

State of Affairs

Currently, I am refining my latest project - FuelRight (link), which allows users track their sleep/nutrition habits and get more from their workouts, while learning about data structures, mobile development, Python, and Machine Learning. I have also just started crafting the frontend and backend architecture for my first React Native project - an app to assist my father's bottled water business. 

My Interests

My favorite activities include programming (developing websites and projects and learning more about computer science), reading (sci-fi and non-fiction), going to the movies, playing and writing music (guitar/keyboard - check out my most recent composition below), running, hiking, bouldering, and traveling (especially to national parks).

-- song player
-- photo carousel

Why Coding?

After a few months of remote coworking alongside software developer friends, I fell in love with the collaboration, problem-solving, and teamwork I witnessed in my friends' day-to-day work life. Furthermore, the constant challenges within the ever evolving field of software engineering guaranteed that no engineer could ever run out of room to improve or grow. The opportunity for endless learning with other driven individuals in a field that shapes how we, as humans, interact with one another is what led me to pursue a career in software development. 
*/