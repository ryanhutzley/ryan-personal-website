import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledNavBar = styled.div`
    position: relative;
    height: 10%;
    top: 0;
    margin-top: ${props => props.windowwidth ? '10px' : '20px'};
    margin-left: ${props => props.windowwidth ? '10px' : '20px'};
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${props => props.windowwidth ? '10px' : '50px'};
`

const StyledIcon = styled(Link)`
    position: relative;
    text-decoration: none;
    font-size: ${props => props.windowwidth ? '20px' : '36px'};
    color: #000;
    font-weight: bold;
    padding: ${props => props.windowwidth ? '5px' : '10px'};
    border: ${props => props.windowwidth ? '7.5px solid black' : '10px solid black'};
    border-radius: 10px;
    margin-right: ${props => props.windowwidth ? '0px' : '10px'};
    &:hover {
        cursor: pointer;
    }
`

const StyledLink = styled(Link)`
    position: relative;
    font-size: ${props => props.windowwidth ? '20px' : '36px'};
    color: #000;
    text-decoration: none;
    &:hover {
        color: #000;
    }
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: ${props => props.windowwidth ? '2px' : '5px'};
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
    &:hover:before {
        transform: scaleX(1);
    }
`

function NavBar({ windowWidth }) {

    return (
        <StyledNavBar windowwidth={windowWidth ? 'true' : ''}>
            <StyledIcon windowwidth={windowWidth ? 'true' : ''} to="/">RH</StyledIcon>
            <StyledLink windowwidth={windowWidth ? 'true' : ''} to="/">Home</StyledLink>
            <StyledLink windowwidth={windowWidth ? 'true' : ''} to="/About">About</StyledLink>
            <StyledLink windowwidth={windowWidth ? 'true' : ''} to="/Projects">Projects</StyledLink>
        </StyledNavBar>
    )
}

export default NavBar