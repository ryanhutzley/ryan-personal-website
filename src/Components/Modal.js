import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Logo } from './Projects'
import { SpecialLogo } from './Projects'
import fuelright from '../images/FuelRight Logo.png'
import beatmatch from '../images/logo-normal-5000 round.png'
import pumpingflatiron from '../images/Pumping Flatiron-logos.png'


const logos = [fuelright, beatmatch, pumpingflatiron]

// const container = document.querySelector('#page-container')

const ModalContent = styled.div`
    width: 50%;
    margin: auto;
    max-height: 70vh;
    background:#f59b00;
    padding:50px;
    display: inline-block;
    font-weight:300;
    position:relative;
    border-radius: 20px;
    border: 8px solid black;
    overflow-y: scroll;
`

const ModalBackground = styled.div`
    display:table-cell;
    background:rgba(0,0,0,.8);
    text-align:center;
    vertical-align:middle;
    ${ModalContent} {
        width: 50%;
        margin: auto;
        max-height: 70vh;
        background:#f59b00;
        padding:50px;
        display: inline-block;
        font-weight:300;
        position:relative;
        border-radius: 20px;
        border: 8px solid black;
        overflow-y: scroll;
    }
`

const blowUpModal = keyframes`
    0% {
        transform:scale(0);
    }
    100% {
        transform:scale(1);
    }
`

const ModalContainer = styled.div`
    position:fixed;
    display:table;
    height:100%;
    width:100%;
    
    
    ${ModalBackground} {
        background:rgba(0,0,0,.7);
        ${ModalContent} {
            animation: ${blowUpModal} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
    }
`

const ResponsiveLogoSpecial = styled(SpecialLogo)`
    width: ${props => props.windowwidth ? '150px' : ''};
    height: ${props => props.windowwidth ? '150px' : ''};
`

const ResponsiveLogo = styled(Logo)`
    width: ${props => props.windowwidth ? '150px' : ''};
    height: ${props => props.windowwidth ? '150px' : ''};
`

const LinksContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
    justify-content: center;
`

//     flex-direction: ${props => props.windowwidth ? 'column' : 'row'};
//     justify-content: ${props => props.windowwidth ? 'center' : 'space-evenly'};
//     align-items: ${props => props.windowwidth ? 'center' : ''};
//     gap: ${props => props.windowwidth ? '20px' : ''};
//     flex-wrap: ${props => props.windowwidth ? '' : 'wrap'};

const RoundButton = styled.button`
    min-width: 130px;
    height: 40px;
    color: #f59b00;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 20px;
    border: 2px solid #212529;
    background: black;
    &:hover {
        background: #f59b00;
        color: #212529;
    }
`

const CloseButton = styled.button`
    margin: auto;
    background:none;
    border:none; 
    padding:0;
    color:black;
    cursor:pointer;
    font-size: 24px;
    font-family: Mulish, sans-serif;
    &:hover {
        text-decoration: underline;
    }
`

const Detail = styled.p`
    margin-bottom: 0;
    font-size: 20px;
    font-style: italic;
`


const Modal = React.forwardRef((props, ref) => {

    return (
        <ModalContainer>
            <ModalBackground>
                <ModalContent ref={ref} windowwidth={props.windowWidth ? 'true' : ''}> 
                    {props.modalData.logoNum === 0 ? <ResponsiveLogoSpecial src={logos[props.modalData.logoNum]} alt={props.modalData.alt} windowwidth={props.windowWidth ? 'true' : ''}/> : <ResponsiveLogo src={logos[props.modalData.logoNum]} alt={props.modalData.alt} windowwidth={props.windowWidth ? 'true' : ''}/>}
                    <h1 className='bold underline'>{props.modalData.alt}</h1>
                    <p>{props.modalData.description}</p>
                    {props.modalData.details ? <Detail>{props.modalData.details[0]}</Detail> : null}
                    {props.modalData.details ? <Detail>{props.modalData.details[1]}</Detail> : null}
                    {props.modalData.details ? <Detail>{props.modalData.details[2]}</Detail> : null}
                    {props.modalData.details ? <Detail>{props.modalData.details[3]}</Detail> : null}
                    <LinksContainer windowwidth={props.windowWidth ? 'true' : ''}>
                        {props.modalData.repo2 ?  <a href={props.modalData.repo1}> <RoundButton>Frontend Repo</RoundButton> </a> : <a href={props.modalData.repo1}> <RoundButton>Github Repo</RoundButton> </a>}
                        {props.modalData.repo2 ? <a href={props.modalData.repo2}> <RoundButton>Backend Repo</RoundButton> </a> : null}
                        <a href={props.modalData.demo}> <RoundButton>Video Demo</RoundButton> </a>
                        {props.modalData.liveSite ? <a href={props.modalData.liveSite}> <RoundButton>{props.modalData.liveSite.substring(8)}</RoundButton> </a> : null}
                    </LinksContainer>
                    <p style={{marginBottom: '0px'}}><CloseButton onClick={() => props.closeModal()}>Close</CloseButton></p>
                </ModalContent>
            </ModalBackground>
        </ModalContainer>
    )
})

export default Modal

// &.four {
//     z-index:0;
//     transform:scale(1);
//     .modal-background {
//       background:rgba(0,0,0,.7);
//       .modal {
//         animation: blowUpModal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//       }
//     }
//     + .content {
//       z-index:1;
//       animation:blowUpContent .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//     }
//     &.out {
//       .modal-background {
//         .modal {
//           animation: blowUpModalTwo .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//         }
//       }
//       + .content {
//         animation: blowUpContentTwo .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//       }
//     }
//   }

// + ${container} {
//     z-index:1;
//     animation: ${blowUpContent} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
// }


// &.out {
//     ${ModalBackground} {
//         ${ModalContent} {
//             animation: ${blowUpModalTwo} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//         }
//     }
//     + ${container} {
//         animation: ${blowUpContentTwo} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//     }
// }

// const blowUpContent = keyframes`
//     0% {
//         transform:scale(1);
//         opacity:1;
//     }
//     99.9% {
//         transform:scale(2);
//         opacity:0;
//     }
//     100% {
//         transform:scale(0);
//     }
// `

// const blowUpModalTwo = keyframes`
//     0% {
//         transform:scale(1);
//         opacity:1;
//     }
//     100% {
//         transform:scale(0);
//         opacity:0;
//     }
// `

// const blowUpContentTwo = keyframes`
//     0% {
//         transform:scale(2);
//         opacity:0;
//     }
//     100% {
//         transform:scale(1);
//         opacity:1;
//     } 
// `