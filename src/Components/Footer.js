import styled from 'styled-components'
import { SingleVector } from './Home'

const Bottom = styled.div`
    border-top: 5px solid black;
    height: 80px;
    width: 95vw;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
    display: flex;
    align-items: center;
`

const VectorContainer = styled.div`
    width: 75vw;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
`

// margin-top: auto;

function Footer({ windowWidth, gmail, medium, linkedin, twitter, github }) {
    return (
        <Bottom>
            <VectorContainer>
                <SingleVector href='mailto: ryanhutzley@gmail.com'>
                    <img src={gmail} alt='gmail' width='45px' />
                </SingleVector>
                <SingleVector href='https://ryanhutzley.medium.com/'>
                    <img src={medium} alt='medium' width='45px' />
                </SingleVector>
                <SingleVector href='https://www.linkedin.com/in/ryan-hutzley-0246a8169/'>
                    <img src={linkedin} alt='linkedin' width='45px'/>
                </SingleVector>
                <SingleVector href='https://twitter.com/ryan_hutzley'>
                    <img src={twitter} alt='twitter' width='45px'/>
                </SingleVector>
                <SingleVector href='https://github.com/ryanhutzley'>
                    <img src={github} alt='github' width='45px'/>
                </SingleVector>
            </VectorContainer>
        </Bottom>
    )
}

export default Footer