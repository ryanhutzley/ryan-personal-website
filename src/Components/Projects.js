import styled from 'styled-components'
import fuelright from '../images/FuelRight Logo.png'
import beatmatch from '../images/logo-normal-5000 round.png'
import pumpingflatiron from '../images/Pumping Flatiron-logos.png'


const CardContainer = styled.div`
    margin: auto;
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: ${props => props.windowwidth ? 'column' : 'row'};
    justify-content: ${props => props.windowwidth ? '' : 'space-between'};
    flex-wrap: ${props => props.windowwidth ? '' : 'wrap'};
    gap: ${props => props.windowwidth ? '40px' : ''};
    width: ${props => props.windowwidth ? '90%' : '80%'};
`

const Card = styled.div`
    width: ${props => props.windowwidth ? '200ox' : '300px'};
    height: auto;
    padding: 20px;
    border: 5px solid black;
    border-radius: 20px;
    display: block;
    text-align: center;
    cursor: pointer;
    box-shadow:  20px 20px 60px #d08400,
             -20px -20px 60px #ffb200;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &:hover {
        -webkit-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
    }
    &:hover:after {
        opacity: 1;
    }
`

export const Logo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 30px;
    margin: auto;
`

export const SpecialLogo = styled(Logo)`
    border-radius: 63px;
    margin: auto;
`


function Projects({ windowWidth, activateModal }) {

    function handleClick(e) {
        let id;
        if (e.target.matches('div')) {
            id = e.target.id
        } else {
            id = e.target.parentElement.id
        }
        console.log(id)
        let data;
        switch(id) {
            case '1':
                data = {
                    logoNum: 0,
                    alt: 'FuelRight',
                    description: 'Record workouts, sleep durations, and consumed foods to gain insight into how sleep durations and foods maximize workout performance.',
                    repo1: 'https://github.com/ryanhutzley/fuel-right-backend-api',
                    demo: 'https://www.loom.com/share/4d80b606effd4eb5adc119cd253dff5a',
                    liveSite: 'https://www.fuelright.app/'
                }
                console.log(data)
                activateModal(data)
                break
            case '2':
                data = {
                    logoNum: 1,
                    alt: 'BeatMatch',
                    description: 'Matchmaking and music streaming platform for rappers and producers designed to promote musical collaboration. Profiles feature the user\'s music, playable in the app and visible to other users.',
                    repo1: 'https://github.com/ryanhutzley/beat-match',
                    demo: 'https://www.loom.com/share/d7c358a55fd7413199dd95b97fe92a09',
                    liveSite: 'https://www.beatmatch.us/'
                }
                activateModal(data)
                break
            case '3':
                data = {
                    logoNum: 2,
                    alt: 'Pumping Flatiron',
                    description: 'A gym membership application that recommends exercise classes based on user preferences and displays other attendees for a class.',
                    repo1: 'https://github.com/ryanhutzley/phase-3-project-frontend',
                    repo2: 'https://github.com/ryanhutzley/sinatra-API',
                    demo: 'https://www.loom.com/share/814ab1161a7e40acaaa6d052ac5b1e1f',
                    liveSite: 'https://www.pumpingflatiron.com/'
                }
                activateModal(data)
        }
    }

    return (
        <CardContainer windowwidth={windowWidth ? 'true' : ''}>
            <Card windowwidth={windowWidth ? 'true' : ''} id='1' onClick={handleClick}>
                <SpecialLogo src={fuelright} alt='FuelRight' />
                <h1 className='bold underline'>FuelRight</h1>
                <p>Record workouts, sleep durations, and consumed foods to gain insight into how sleep durations and foods affect workout performance.</p>
            </Card>
            <Card windowwidth={windowWidth ? 'true' : ''} id='2' onClick={handleClick}>
                <Logo src={beatmatch} alt='beatmatch' />
                <h1 className='bold underline'>BeatMatch</h1>
                <p>Matchmaking and music streaming platform for rappers and producers designed to promote musical collaboration. Profiles feature the user's music, playable in the app and visible to other users.</p>
            </Card>
            <Card windowwidth={windowWidth ? 'true' : ''} id='3' onClick={handleClick}>
                <Logo src={pumpingflatiron} alt='pumpingflatiron' />
                <h1 className='bold underline'>Pumping Flatiron</h1>
                <p>A gym membership application that recommends exercise classes based on user preferences and displays other attendees for a class.</p>
            </Card>
        </CardContainer>
    )
}

export default Projects

{/* <ProjectsContainer>
</ProjectsContainer> */}

// {isDisplayed ? <Modal modalData={modalData} /> : null}