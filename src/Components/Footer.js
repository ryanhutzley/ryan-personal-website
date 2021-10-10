// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Border = styled.div`
    height: 8%;
    border: 5px solid yellow;
`

// position: relative;
//     bottom: 10;
//     justify-content: center;
//     min-height: 40px;
//     width: 90vw;
//     border-bottom: 3px solid black;

function Footer({ windowWidth }) {
    return (
        <Border></Border>
    )
}

export default Footer