// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Border = styled.div`
    position: relative;
    margin: auto;
    height: 3px;
    width: 90vw;
    border-top: 3px solid black;
`

function Footer({ windowWidth }) {
    return (
        <Border></Border>
    )
}

export default Footer