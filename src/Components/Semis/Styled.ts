import styled from "styled-components";

type showButton = {
   show?: boolean,
   show2?: boolean
}

export const Main = styled.div`
   display: flex;

   button {
   font-size: .7rem;
   width: 110px;
   }
   div{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
   }
`

export const buttonSemi = styled.button<showButton> `
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 2px;
  font-size: 1rem;
  border: 1px solid #fff;
  font-weight: bold;
  background: transparent;
  color: #fff;
  cursor: pointer;
  min-width: 100px;

  &:hover{
   background-color: #fff;
    color: #000;
    transition: .4s;
    border: none;
 }
`

export const buttonFinal = styled.button<showButton>`
display: ${props => props.show2 ? 'flex' : 'none'};
align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 2px;
  font-size: 1rem;
  border: 1px solid #fff;
  font-weight: bold;
  background: transparent;
  color: #fff;
  cursor: pointer;
  min-width: 100px;

  &:hover{
   background-color: #fff;
    color: #000;
    transition: .4s;
    border: none;
 }
`

export const Setas = styled.span`
   display:flex;
   justify-content: space-between;
   width: 95vw;
   position: absolute;
   margin-left: -515px;
   top: 250px;

   h1{
      cursor: pointer;
   }
`