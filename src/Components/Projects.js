import styled from 'styled-components'
import fuelright from '../images/FuelRight Logo.png'
import beatmatch from '../images/logo-normal-5000 round.png'
import pumpingflatiron from '../images/Pumping Flatiron-logos.png'


const CardContainer = styled.div`
    margin: auto;
    margin-top: ${props => props.windowwidth ? '20px' : ''};
    margin-bottom: ${props => props.windowwidth ? '30px' : ''};
    display: flex;
    flex-direction: ${props => props.windowwidth ? 'column' : 'row'};
    justify-content: ${props => props.windowwidth ? '' : 'space-between'};
    flex-wrap: ${props => props.windowwidth ? '' : 'wrap'};
    gap: ${props => props.windowwidth ? '20px' : ''};
    width: ${props => props.windowwidth ? '90%' : '75%'};
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
`

const Logo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 30px;
    margin: auto;
`

const SpecialLogo = styled(Logo)`
    border-radius: 63px;
    margin: auto;
`


function Projects({ windowWidth, toggleModal }) {

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
                    logo: './images/logo-normal-5000 round.png',
                    description: 'Record workouts, sleep durations, and consumed foods to gain insight into how sleep durations and foods maximize workout performance.',
                    repo1: 'https://github.com/ryanhutzley/fuel-right-backend-api',
                    demo: 'https://www.loom.com/share/4d80b606effd4eb5adc119cd253dff5a',
                    liveSite: 'https://www.fuelright.app/'
                }
                console.log(data)
                toggleModal(data)
                break
            case '2':
                data = {
                    logo: './images/logo-normal-5000 round.png',
                    description: 'Matchmaking and music streaming platform for rappers and producers designed to promote musical collaboration. Profiles feature the user\'s music, playable in the app and visible to other users.',
                    repo1: 'https://github.com/ryanhutzley/beat-match',
                    demo: 'https://www.loom.com/share/d7c358a55fd7413199dd95b97fe92a09',
                    liveSite: 'https://www.beatmatch.us/'
                }
                toggleModal(data)
                break
            case '3':
                data = {
                    logo: './images/Pumping Flatiron-logos.png',
                    description: 'A gym membership application that recommends exercise classes based on user preferences and displays other attendees for a class.',
                    repo1: 'https://github.com/ryanhutzley/phase-3-project-frontend',
                    repo2: 'https://github.com/ryanhutzley/sinatra-API',
                    demo: 'https://www.loom.com/share/814ab1161a7e40acaaa6d052ac5b1e1f',
                    liveSite: 'https://www.pumpingflatiron.com/'
                }
                toggleModal(data)
        }
    }

    return (
        <CardContainer windowwidth={windowWidth ? 'true' : ''}>
            <Card windowwidth={windowWidth ? 'true' : ''} id='1' onClick={handleClick}>
                <SpecialLogo src={fuelright} alt='FuelRight' />
                <h1>FuelRight</h1>
                <p>Record workouts, sleep durations, and consumed foods to gain insight into how sleep durations and foods affect workout performance.</p>
            </Card>
            <Card windowwidth={windowWidth ? 'true' : ''} id='2' onClick={handleClick}>
                <Logo src={beatmatch} alt='beatmatch' />
                <h1>BeatMatch</h1>
                <p>Matchmaking and music streaming platform for rappers and producers designed to promote musical collaboration. Profiles feature the user's music, playable in the app and visible to other users.</p>
            </Card>
            <Card windowwidth={windowWidth ? 'true' : ''} id='3' onClick={handleClick}>
                <Logo src={pumpingflatiron} alt='pumpingflatiron' />
                <h1>Pumping Flatiron</h1>
                <p>A gym membership application that recommends exercise classes based on user preferences and displays other attendees for a class.</p>
            </Card>
        </CardContainer>
    )
}

export default Projects

{/* <ProjectsContainer>
</ProjectsContainer> */}

// {isDisplayed ? <Modal modalData={modalData} /> : null}