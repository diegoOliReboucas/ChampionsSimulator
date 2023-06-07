import React from 'react'
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} from '../Redux/Reducers/showReducer'

export const Jogos3 = () => {
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
        dispatch(setThird(false))
        dispatch(setSecond(true))
    }

    const Avancar = () =>{
        dispatch(setThird(false))
        dispatch(setFourth(true))
    }

    return (
        <C.Main show={show.third}>
            <h1>Rodada 3</h1>
            <C.jogo3>
            <h2>Grupo A</h2>
                <li><p>Ajax</p> <span>{Ajax.AjaxRod3} - {Napoli.NapoliRod3} </span> <p>Napoli</p></li>
                <li><p>Liverpool</p> <span>{Liverpool.LiverpoolRod3} - {Rangers.RangersRod3} </span> <p>Rangers</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo B</h2>
                <li><p>FC Porto</p> <span>{Porto.PortoRod3} - {BayerL.BayerLRod3} </span> <p>Bayer Leverkusen</p></li>
                <li><p>Club Brugge</p> <span>{Brugge.BruggeRod3} - {AtleticoM.AtleticoMRod3} </span> <p>Atletico Madrid</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo C</h2>
                <li><p>Bayern de Munique</p> <span>{BayernM.BayernMRod3} - {Plzen.PlzenRod3} </span> <p>Vitoria Plzen</p></li>
                <li><p>Inter</p> <span>{Inter.InterRod3} - {Barcelona.BarcelonaRod3} </span> <p>FC Barcelona</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo D</h2>
                <li><p>Marselha</p> <span>{Marselha.MarselhaRod3} - {Sporting.SportingRod3} </span> <p>Sporting</p></li>
                <li><p>Eintracht Frankfurt</p> <span>{Frankfurt.FrankfurtRod3} - {Tottenham.TottenhamRod3} </span> <p>Tottenham</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo E</h2>
                <li><p>Chelsea</p> <span>{Chelsea.ChelseaRod3} - {Milan.MilanRod3} </span> <p>Milan</p></li>
                <li><p>RB Salzburg</p> <span>{Salzburg.SalzburgRod3} - {Dinamo.DinamoRod3} </span> <p>NK Dinamo Zagreb</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo F</h2>
                <li><p>RB Leipzig</p> <span>{Leipzig.LeipzigRod3} - {Celtic.CelticRod3} </span> <p>Celtic Glasgow</p></li>
                <li><p>Real Madrid</p> <span>{RealM.RealMRod3} - {Shakhtar.ShakhtarRod3} </span> <p>FC Shakhtar Donetsk</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo G</h2>
                <li><p>Sevilla</p> <span>{Sevilla.SevillaRod3} - {Dortmund.DortmundRod3} </span> <p>Borussia Dortmund</p></li>
                <li><p>Manchester City</p> <span>{ManC.ManCRod3} - {Copenhaga.CopenhagaRod3} </span> <p>FC Copenhaga</p></li>
            </C.jogo3>

            <C.jogo3>
            <h2>Grupo H</h2>
                <li><p>Juventus</p> <span>{Juventus.JuventusRod3} - {Maccabi.MaccabiRod3} </span> <p>Maccabi Haifa FC</p></li>
                <li><p>Benfica</p> <span>{Benfica.BenficaRod3} - {PSG.PSGRod3} </span> <p>PSG</p></li>
            </C.jogo3>
            <C.Buttons>
            <button onClick={Voltar}>Anterior</button>
            <button onClick={Avancar}>Proximo</button>
            </C.Buttons>

        </C.Main>
    )
}