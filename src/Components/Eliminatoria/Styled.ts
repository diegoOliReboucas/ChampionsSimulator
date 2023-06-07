
import styled from "styled-components";

type showElTela = {
    show: boolean
}

type Oitavas = {
    ida?: boolean,
    volta?: boolean
}

type Quartas = {
    ida?: boolean,
    volta?: boolean
}

type Semis = {
    ida?: boolean,
    volta?: boolean
}

type Final = {
    campeao?: boolean,
}

type Telas = {
    oitavas?: boolean, 
    quartas?: boolean,
    semifinais?: boolean,
    final?: boolean
}

export const Main = styled.div<showElTela>`
    display: ${props => props.show ? 'flex' : 'none'};
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
    background-image: url('https://i.redd.it/b10brark3g031.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -90px;
    background-blend-mode: darken;
    color: #fff;
    position: fixed;
    margin: -10px;
    padding: 10px;

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        padding: 0 40px;

        div{
            display: flex;
            gap: 5px;

            &:nth-child(3){
                margin-top: 30px;
            }

            &:nth-child(5){
                margin-top: 30px;
            }

            &:nth-child(7){
                margin-top: 30px;
            }

            li{
            background-color: #fff;
            color: #000;
            padding: 5px;
            width: 150px;
            }
        }
        
    }
`

export const oitIda = styled.p<Oitavas>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.ida ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`

export const oitVolta = styled.p<Oitavas>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.volta ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`

export const Fechar = styled.div`
    position: absolute;
    right: 50px;
    cursor: pointer;
    font-weight: bold;
    color: #730000;
    background-color: #fff;
    padding: 2px 10px;
`

export const Oitavas = styled.div<Telas>`
width: 90vw;
display: ${props => props.oitavas ? 'flex' : 'none'};
justify-content: space-between;
margin: 0 auto;

`
export const Oita = styled.div<Telas>`
display: ${props => props.oitavas ? 'flex' : 'none'};
   position: absolute;
   left: 45%;
`

export const Quart = styled.div<Telas>`
display: ${props => props.quartas ? 'flex' : 'none'};
   position: absolute;
   left: 45%;
`

export const Semi = styled.div<Telas>`
display: ${props => props.semifinais ? 'flex' : 'none'};
   position: absolute;
   left: 45%;
`

export const Final = styled.div<Telas>`
display: ${props => props.final ? 'flex' : 'none'};
   position: absolute;
   left: 45%;
`

export const Quartas = styled.div<Telas>`
width: 90vw;
display: ${props => props.quartas ? 'flex' : 'none'};
justify-content: space-between;
margin: 0 auto;
`

export const quaIda = styled.p<Quartas>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.ida ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`

export const quaVolta = styled.p<Quartas>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.volta ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`

export const Semis = styled.div<Telas>`
width: 70vw;
display: ${props => props.semifinais ? 'flex' : 'none'};
justify-content: space-between;
margin: 0 auto;
`

export const semiIda = styled.p<Semis>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.ida ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`

export const semiVolta = styled.p<Semis>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.volta ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`

export const Finais = styled.div<Telas>`
width: 60vw;
display: ${props => props.final ? 'flex' : 'none'};
justify-content: space-between;
margin: 0 auto;
`

export const finalRes = styled.p<Final>`
        height: 20px;
        width: 20px;
        background-color: #fff;
        color: #000;
        padding: 5px;
        display: ${props => props.campeao ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
`