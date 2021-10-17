import styled, { keyframes } from 'styled-components'
// import { Container } from '../App'

const container = document.querySelector('#page-container')

const ModalContent = styled.div`

`

const ModalBackground = styled.div`

`

const blowUpModal = keyframes`
    0% {
        transform:scale(0);
    }
    100% {
        transform:scale(1);
    }
`

const blowUpContent = keyframes`
    0% {
        transform:scale(1);
        opacity:1;
    }
    99.9% {
        transform:scale(2);
        opacity:0;
    }
    100% {
        transform:scale(0);
    }
`

const blowUpModalTwo = keyframes`
    0% {
        transform:scale(1);
        opacity:1;
    }
    100% {
        transform:scale(0);
        opacity:0;
    }
`

const blowUpContentTwo = keyframes`
    0% {
        transform:scale(2);
        opacity:0;
    }
    100% {
        transform:scale(1);
        opacity:1;
    } 
`

const ModalContainer = styled.div`
    position:fixed;
    display:table;
    height:100%;
    width:100%;
    top:0;
    left:0;
    transform:scale(1);
    z-index:0;
    ${ModalBackground} {
        background:rgba(0,0,0,.7);
        ${ModalContent} {
            animation: ${blowUpModal} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
    }
    + ${container} {
        z-index:1;
        animation: ${blowUpContent} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }
    &.out {
        ${ModalBackground} {
            ${ModalContent} {
                animation: ${blowUpModalTwo} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
            }
        }
        + ${container} {
            animation: ${blowUpContentTwo} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
    }
`

function Modal({ modalData }) {
    return (
        <ModalContainer>
            <ModalBackground>
                <ModalContent>
                    Hello
                </ModalContent>
            </ModalBackground>
        </ModalContainer>
    )
}

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