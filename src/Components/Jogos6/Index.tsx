import React from 'react'
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} from '../Redux/Reducers/showReducer'

export const Jogos6 = () => {
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
        dispatch(setSixth(false))
        dispatch(setFifth(true))
    }

    return (
        <C.Main show={show.sixth}>
            <h1>Rodada 6</h1>
            <C.jogo6>
            <h2>Grupo A</h2>
                <li><p>Liverpool</p> <span>{Liverpool.LiverpoolRod6} - {Napoli.NapoliRod6} </span> <p>Napoli</p></li>
                <li><p>Rangers</p> <span>{Rangers.RangersRod6} - {Ajax.AjaxRod6} </span> <p>Ajax</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo B</h2>
                <li><p>FC Porto</p> <span>{Porto.PortoRod6} - {AtleticoM.AtleticoMRod6} </span> <p>Atletico Madrid</p></li>
                <li><p>Bayer Leverkusen</p> <span>{BayerL.BayerLRod6} - {Brugge.BruggeRod6} </span> <p>Club Brugge</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo C</h2>
                <li><p>Bayern de Munique</p> <span>{BayernM.BayernMRod6} - {Inter.InterRod6} </span> <p>Inter</p></li>
                <li><p>Vitoria Plzen</p> <span>{Plzen.PlzenRod6} - {Barcelona.BarcelonaRod6} </span> <p>FC Barcelona</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo D</h2>
                <li><p>Marselha</p> <span>{Marselha.MarselhaRod6} - {Tottenham.TottenhamRod6} </span> <p>Tottenham</p></li>
                <li><p>Sporting</p> <span>{Sporting.SportingRod6} - {Frankfurt.FrankfurtRod6} </span> <p>Eintracht Frankfurt</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo E</h2>
                <li><p>Milan</p> <span>{Milan.MilanRod6} - {Salzburg.SalzburgRod6} </span> <p>RB Salzburg</p></li>
                <li><p>Chelsea</p> <span>{Chelsea.ChelseaRod6} - {Dinamo.DinamoRod6} </span> <p>NK Dinamo Zagreb</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo F</h2>
                <li><p>Real Madrid</p> <span>{RealM.RealMRod6} - {Celtic.CelticRod6} </span> <p>Celtic Glasgowk</p></li>
                <li><p>FC Shakhtar Donets</p> <span>{Shakhtar.ShakhtarRod6} - {Leipzig.LeipzigRod6} </span> <p>RB Leipzig</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo G</h2>
                <li><p>FC Copenhaga</p> <span>{Copenhaga.CopenhagaRod6} - {Dortmund.DortmundRod6} </span> <p>Borussia Dortmund</p></li>
                <li><p>Manchester City</p> <span>{ManC.ManCRod6} - {Sevilla.SevillaRod6} </span> <p>Sevilla</p></li>
            </C.jogo6>

            <C.jogo6>
            <h2>Grupo H</h2>
                <li><p>Maccabi Haifa FC</p> <span>{Maccabi.MaccabiRod6} - {Benfica.BenficaRod6} </span> <p>Benfica</p></li>
                <li><p>Juventus</p> <span>{Juventus.JuventusRod6} - {PSG.PSGRod6} </span> <p>PSG</p></li>
            </C.jogo6>
            <C.Buttons>
            <button onClick={Voltar}>Anterior</button>
            <button></button>
            </C.Buttons>

        </C.Main>
    )
}