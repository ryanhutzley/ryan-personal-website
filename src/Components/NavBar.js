import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {

    const StyledNavBar = styled.div`
        position: relative;
        height: 10%;
        top: 0;
        margin: 20px 5px 5px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
    `

    const StyledIcon = styled(Link)`
        position: relative;
        text-decoration: none;
        font-size: 3.5vw;
        color: #000;
        font-weight: bold;
        padding: 10px;
        border: 15px solid black;
        border-radius: 10px;
        margin-right: 10px;
        &:hover {
            cursor: pointer;
        }
    `

    const StyledLink = styled(Link)`
        position: relative;
        font-size: 3.5vw;
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
            height: 5px;
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

    return (
        <StyledNavBar>
            <StyledIcon to="/">RH</StyledIcon>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/About">About</StyledLink>
            <StyledLink to="/Projects">Projects</StyledLink>
        </StyledNavBar>
    )
}

export default NavBar