import React from 'react'
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} from '../Redux/Reducers/showReducer'

export const Jogos1 = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)

    const Napoli = useAppSelector(state => state.Napoli)
    const Liverpool = useAppSelector(state => state.Liverpool)
    const Ajax = useAppSelector(state => state.Ajax)
    const Rangers = useAppSelector(state => state.Rangers)

    const AtleticoM = useAppSelector(state => state.AtleticoM)
    const BayerL = useAppSelector(state => state.BayerL)
    const Brugge = useAppSelector(state => state.Brugge)
    const Porto = useAppSelector(state => state.Porto)

    const BayernM = useAppSelector(state => state.BayernM)
    const Barcelona = useAppSelector(state => state.Barcelona)
    const Inter = useAppSelector(state => state.Inter)
    const Plzen = useAppSelector(state => state.Plzen)

    const Frankfurt = useAppSelector(state => state.Frankfurt)
    const Marselha = useAppSelector(state => state.Marselha)
    const Sporting = useAppSelector(state => state.Sporting)
    const Tottenham = useAppSelector(state => state.Tottenham)

    const Chelsea = useAppSelector(state => state.Chelsea)
    const Milan = useAppSelector(state => state.Milan)
    const Dinamo = useAppSelector(state => state.Dinamo)
    const Salzburg = useAppSelector(state => state.Salzburg)

    const Celtic = useAppSelector(state => state.Celtic)
    const Shakhtar = useAppSelector(state => state.Shakhtar)
    const RealM = useAppSelector(state => state.RealM)
    const Leipzig = useAppSelector(state => state.Leipzig)

    const Dortmund = useAppSelector(state => state.Dortmund)
    const Copenhaga = useAppSelector(state => state.Copenhaga)
    const ManC = useAppSelector(state => state.ManC)
    const Sevilla = useAppSelector(state => state.Sevilla)

    const Benfica = useAppSelector(state => state.Benfica)
    const Juventus = useAppSelector(state => state.Juventus)
    const Maccabi = useAppSelector(state => state.Maccabi)
    const PSG = useAppSelector(state => state.PSG)

    const Avancar = () =>{
        dispatch(setFirst(false))
        dispatch(setSecond(true))
    }

    return (
        <C.Main show={show.first}>
           <h1>Rodada 1</h1> 
            <C.jogo1>
            <h2>Grupo A</h2>
                <li><p>Napoli</p> <span>{Napoli.NapoliRod1} - {Liverpool.LiverpoolRod1} </span> <p>Liverpool</p></li>
                <li><p>Ajax</p> <span>{Ajax.AjaxRod1} - {Rangers.RangersRod1}</span>  <p>Rangers</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo B</h2>
                <li><p>Atletico Madrid</p> <span>{AtleticoM.AtleticoMRod1} - {Porto.PortoRod1} </span> <p>FC Porto</p></li>
                <li><p>Club Brugge</p> <span>{Brugge.BruggeRod1} - {BayerL.BayerLRod1} </span> <p>Bayer Leverkusen</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo C</h2>
                <li><p>FC Barcelona</p> <span>{Barcelona.BarcelonaRod1} - {Plzen.PlzenRod1}</span> <p>Vitoria Plzen</p></li>
                <li><p>Inter</p> <span>{Inter.InterRod1} - {BayernM.BayernMRod1}</span> <p>Bayern de Munique</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo D</h2>
                <li><p>Eintracht Frankfurt</p> <span>{Frankfurt.FrankfurtRod1} - {Sporting.SportingRod1}</span> <p>Sporting</p></li>
                <li><p>Tottenham</p> <span>{Tottenham.TottenhamRod1} - {Marselha.MarselhaRod1}</span> <p>Marselha</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo E</h2>
                <li><p>NK Dinamo Zagreb</p> <span>{Dinamo.DinamoRod1} - {Chelsea.ChelseaRod1}</span> <p>Chelsea</p></li>
                <li><p>RB Salzburg</p> <span>{Salzburg.SalzburgRod1} - {Milan.MilanRod1}</span> <p>Milan</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo F</h2>
                <li><p>Celtic Glasgow</p> <span>{Celtic.CelticRod1} - {RealM.RealMRod1}</span> <p>Real Madrid</p></li>
                <li><p>RB Leipzig</p> <span>{Leipzig.LeipzigRod1} - {Shakhtar.ShakhtarRod1}</span> <p>FC Shakhtar Donetsk</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo G</h2>
                <li><p>Borussia Dortmund</p> <span>{Dortmund.DortmundRod1} - {Copenhaga.CopenhagaRod1}</span> <p>FC Copenhaga</p></li>
                <li><p>Sevilla</p> <span>{Sevilla.SevillaRod1} - {ManC.ManCRod1}</span> <p>Manchester City</p></li>
            </C.jogo1>

            <C.jogo1 >
            <h2>Grupo H</h2>
                <li><p>PSG</p> <span>{PSG.PSGRod1} - {Juventus.JuventusRod1}</span> <p>Juventus</p></li>
                <li><p>Benfica</p> <span>{Benfica.BenficaRod1} - {Maccabi.MaccabiRod1}</span> <p>Maccabi Haifa FC</p></li>
            </C.jogo1>

              <C.Buttons>
              <button></button>
            <button onClick={Avancar}>Proximo</button>
            </C.Buttons>

        </C.Main>
    )
}