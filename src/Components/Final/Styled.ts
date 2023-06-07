import styled from "styled-components";


type showButton = {
   show?: boolean,
   show2?: boolean,
   h2left?: boolean
}

export const Main = styled.div`
   display: flex;
   flex-direction: column;
   gap: 300px;
   position: absolute;

   button {
   font-size: .7rem;
   width: 70px;
   }
   div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

   }
`

export const h1 = styled.h1`
   position: absolute;
   width: 450px;
   top: 380px;
   left: -100px;
`

export const buttonFinal = styled.button<showButton> `
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

export const Taça = styled.div`
   position: absolute;
   top: 180px;
   left: 10px;

   img{
      width: 100px;
   }
`