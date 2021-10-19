import styled from 'styled-components'
import song from '../audio/ryanhutzley_song.mp3'
import 'react-h5-audio-player/lib/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import AudioPlayer from 'react-h5-audio-player'
import rowingPhoto from '../images/63A0BA5F-F0BF-4B89-84D5-734A74DFE67B.JPG'
import p1 from '../images/Gallery/IMG_2005.jpg'
import p2 from '../images/Gallery/IMG_2132.jpg'
import p3 from '../images/Gallery/IMG_2179.jpg'
import p4 from '../images/Gallery/IMG_2229-EFFECTS.jpg'
// import p5 from '../images/Gallery/IMG_2253-EFFECTS.jpg'
import p6 from '../images/Gallery/IMG_2265.jpg'
import p7 from '../images/Gallery/PXL_20201016_234045361.jpg'
import p8 from '../images/Gallery/PXL_20201017_180839121.jpg'
import p9 from '../images/Gallery/PXL_20201028_200400792.jpg'
import p10 from '../images/Gallery/PXL_20201106_210357939.jpg'
import p11 from '../images/Gallery/PXL_20201107_161225499.jpg'
import p12 from '../images/Gallery/PXL_20201107_174809830.jpg'
import p13 from '../images/Gallery/PXL_20201107_184105277.jpg'


const AboutWrapper = styled.div`
    flex-grow: 1;
    margin: auto;
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
    width: ${props => props.windowwidth ? '220px' : '20%'};
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
    width: ${props => props.windowwidth ? '85%' : '75%'};
`

const Video = styled.iframe`
    margin: auto;
    margin-bottom: 30px;
    width: ${props => props.windowwidth ? '250px' : '600px'};
    height: ${props => props.windowwidth ? '125px' : '300px'};
`

const SectionWrapper = styled.div`
    margin: auto;
    width: ${props => props.windowwidth ? '85%' : ''}
`

const Resource = styled.p`
    margin: 0 auto;
    font-style: italic;
`

const GalleryImage = styled.img`
    border-radius: 20px;
`


function About({ windowWidth }) {

    const carousel = document.querySelector('.carousel-root')

    if (carousel) {
        if (windowWidth) {
            carousel.style.width = '250px'
        } else {
            carousel.style.width = '600px'
        }
    }

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
            <SectionWrapper windowwidth={windowWidth ? 'true' : ''}>
                <h1 className='bold underline'>Present-Day</h1>
                <p>Currently, I am refining my latest project - <a href='https://www.fuelright.app/'>FuelRight</a>, which allows users track their sleep/nutrition habits and get more from their workouts, while learning about data structures, mobile development, Python, and Machine Learning. I have also just started crafting the frontend and backend architecture for my first React Native project - an app to assist my father's bottled water business.</p>
            </SectionWrapper>
            <SectionWrapper windowwidth={windowWidth ? 'true' : ''}>
                <h1 className='bold underline'>My Interests</h1>
                <p>My favorite activities include programming (developing websites and projects and learning more about computer science), reading (sci-fi and non-fiction), going to the movies, playing and writing music (guitar/keyboard - check out my most recent composition <a href='#audio'>below</a>), running, hiking, bouldering, and traveling (especially to <a href='#travels'>national parks</a>).</p>
            </SectionWrapper>
            <SectionWrapper windowwidth={windowWidth ? 'true' : ''}>
                <h1 className='bold underline'>Why Coding?</h1>
                <p>After a few months of remote coworking alongside software developer friends, I fell in love with the collaboration, problem-solving, and teamwork I witnessed in my friends' day-to-day work life. Furthermore, the constant challenges within the ever evolving field of software engineering guaranteed that no engineer could ever run out of room to improve or grow. The opportunity for endless learning with other driven individuals in a field that shapes how we, as humans, interact with one another is what led me to pursue a career in software development. </p>
            </SectionWrapper>
            <h1 className='bold underline'>Resources</h1>
            <Resource>Special Olympics Rowing at Princeton</Resource>
            <Video id='video' src="https://www.youtube.com/embed/viWW6CbKHjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen windowwidth={windowWidth ? 'true' : ''}></Video>
            <Resource>My Latest Composition</Resource>
            <div id='audio' style={{marginBottom: '30px'}}>
                <AudioPlayer
                    style={{
                        width: windowWidth ? '275px' : '800px',
                        borderRadius: '20px'
                    }}
                    src={song}
                />
            </div>
            <Resource id='travels'>Travels</Resource>
            <Carousel dynamicHeight={true}>
                <div>
                    <GalleryImage src={p1} alt='Monhegan Island, ME' />
                    <p className='legend'>Monhegan Island, ME</p>
                </div>
                <div>
                    <GalleryImage src={p2} alt='Jenny Lake, Grand Teton National Park' />
                    <p className='legend'>Jenny Lake, Grand Teton National Park, WY</p>
                </div>
                <div>
                    <GalleryImage src={p3} alt='Mormon Settlement, Grand Teton National Park' />
                    <p className='legend'>Mormon Settlement, Grand Teton National Park</p>
                </div>
                <div>
                    <GalleryImage src={p4} alt='Old Faithful Geyser Basin, Yellowstone National Park' />
                    <p className='legend'>Old Faithful Geyser Basin, Yellowstone National Park</p>
                </div>
                {/* <div>
                    <GalleryImage src={p5} alt='nature' />
                    <p className='legend'>Legend</p>
                </div> */}
                <div>
                    <GalleryImage src={p6} alt='Yellowstone Grand Canyon' />
                    <p className='legend'>Yellowstone Grand Canyon</p>
                </div>
                <div>
                    <GalleryImage src={p7} alt='Zion National Park, UT' />
                    <p className='legend'>Zion National Park, UT</p>
                </div>
                <div>
                    <GalleryImage src={p8} alt='Bryce Canyone National Park, UT' />
                    <p className='legend'>Bryce Canyone National Park, UT</p>
                </div>
                <div>
                    <GalleryImage src={p9} alt='Utah Salt Flats' />
                    <p className='legend'>Utah Salt Flats</p>
                </div>
                <div>
                    <GalleryImage src={p10} alt='Capitol Reef National Park, UT' />
                    <p className='legend'>Capitol Reef National Park, UT</p>
                </div>
                <div>
                    <GalleryImage src={p11} alt='Arches National Park, UT' />
                    <p className='legend'>Arches National Park, UT</p>
                </div>
                <div>
                    <GalleryImage src={p12} alt='Arches National Park, UT' />
                    <p className='legend'>Arches National Park, UT</p>
                </div>
                <div>
                    <GalleryImage src={p13} alt='Arches National Park, UT' />
                    <p className='legend'>Arches National Park, UT</p>
                </div>
            </Carousel>
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