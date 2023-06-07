import styled from "styled-components";

type showButtonRod = {
    showRodButton?: boolean
}

export const Main = styled.div<showButtonRod>`
   display: ${props => props.showRodButton ? 'flex' : 'none'};
   margin-top: 10px;
   justify-content: center;

   button{
 color: #fff;
 cursor: pointer;
 font-weight: bold;
 background: transparent;
 border: none;
 font-size: 1rem;
 border-radius: 2px;
 padding: 5px;

 &:hover{
    background-color: #5af7dc;
    color: #000;
    transition: .4s;
 }
}
`