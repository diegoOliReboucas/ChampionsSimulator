import styled from "styled-components";

type showRodada3 = {
    show: boolean
}

export const Main = styled.div<showRodada3>`
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    gap: 5px;

    h1{
        color: #fff;
    }
`
export const jogo5 = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: #fff;
    color: #000041;
    align-items: center;
    padding: 0;
li{
    display: flex;
    list-style: none;
    width: 300px;
    gap: 10px;
    padding: 5px;
    font-weight: bold;
    span{
        width: 60px;
    }
    
p{
    font-size: .8rem;
   width: 250px;
   display: flex;
   align-items: center;
   justify-content: center;
}
}

`

export const Buttons = styled.div`
display: flex;
width: 300px;
justify-content: space-around;
margin-top: 10px;

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