import styled from "styled-components";

type showButton = {
   show?: boolean,
   show2?: boolean
}

export const Main = styled.div`

   button {
   font-size: .7rem;
   width: 90px;
   }

   div{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
   }
`

export const buttonOit = styled.button<showButton> `
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
 }
`

export const buttonQua = styled.button<showButton>`
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