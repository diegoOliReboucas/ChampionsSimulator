import React from 'react'
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} from '../Redux/Reducers/showReducer'

export const Jogos5 = () => {
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

    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)

    const Voltar = () =>{
        dispatch(setFifth(false))
        dispatch(setFourth(true))
    }

    const Avancar = () =>{
        dispatch(setFifth(false))
        dispatch(setSixth(true))
    }

    return (
        <C.Main show={show.fifth}>
            <h1>Rodada 5</h1>
            <C.jogo5>
            <h2>Grupo A</h2>
                <li><p>Ajax</p> <span>{Ajax.AjaxRod5} - {Liverpool.LiverpoolRod5} </span> <p>Liverpool</p></li>
                <li><p>Napoli</p> <span>{Napoli.NapoliRod5} - {Rangers.RangersRod5} </span> <p>Rangers</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo B</h2>
                <li><p>Club Brugge</p> <span>{Brugge.BruggeRod5} - {Porto.PortoRod5} </span> <p>FC Porto</p></li>
                <li><p>Atletico Madrid</p> <span>{AtleticoM.AtleticoMRod5} - {BayerL.BayerLRod5} </span> <p>Bayer Leverkusen</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo C</h2>
                <li><p>Inter</p> <span>{Inter.InterRod5} - {Plzen.PlzenRod5} </span> <p>Vitoria Plzen</p></li>
                <li><p>FC Barcelona</p> <span>{Barcelona.BarcelonaRod5} - {BayernM.BayernMRod5} </span> <p>Bayern de Munique</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo D</h2>
                <li><p>Eintracht Frankfurt</p> <span>{Frankfurt.FrankfurtRod5} - {Marselha.MarselhaRod5} </span> <p>Marselha</p></li>
                <li><p>Tottenham</p> <span>{Tottenham.TottenhamRod5} - {Sporting.SportingRod5} </span> <p>Sporting</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo E</h2>
                <li><p>RB Salzburg</p> <span>{Salzburg.SalzburgRod5} - {Chelsea.ChelseaRod5} </span> <p>Chelsea</p></li>
                <li><p>NK Dinamo Zagreb</p> <span>{Dinamo.DinamoRod5} - {Milan.MilanRod5} </span> <p>Milan</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo F</h2>
                <li><p>Celtic Glasgowk</p> <span>{Celtic.CelticRod5} - {Shakhtar.ShakhtarRod5} </span> <p>FC Shakhtar Donets</p></li>
                <li><p>RB Leipzig</p> <span>{Leipzig.LeipzigRod5} - {RealM.RealMRod5} </span> <p>Real Madrid</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo G</h2>
                <li><p>Sevilla</p> <span>{Sevilla.SevillaRod5} - {Copenhaga.CopenhagaRod5} </span> <p>FC Copenhaga</p></li>
                <li><p>Borussia Dortmund</p> <span>{Dortmund.DortmundRod5} - {ManC.ManCRod5} </span> <p>Manchester City</p></li>
            </C.jogo5>

            <C.jogo5>
            <h2>Grupo H</h2>
                <li><p>PSG</p> <span>{PSG.PSGRod5} - {Maccabi.MaccabiRod5} </span> <p>Maccabi Haifa FC</p></li>
                <li><p>Benfica</p> <span>{Benfica.BenficaRod5} - {Juventus.JuventusRod5} </span> <p>Juventus</p></li>
            </C.jogo5>
            <C.Buttons>
            <button onClick={Voltar}>Anterior</button>
            <button onClick={Avancar}>Proximo</button>
            </C.Buttons>

        </C.Main>
    )
}