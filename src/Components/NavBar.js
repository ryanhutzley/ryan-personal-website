import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {

    const StyledDiv = styled.div`
        position: relative;
        height: 10%;
        top: 0;
        margin: 20px 5px 5px 20px;
        display: flex;
        justify-content: flex-start;
    `

    const StyledLink = styled(Link)`
        position: relative;
        font-size: 36px;
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
            height: 2px;
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
        <StyledDiv>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/About">About</StyledLink>
            <StyledLink to="/Projects">Projects</StyledLink>
        </StyledDiv>
    )
}

export default NavBar