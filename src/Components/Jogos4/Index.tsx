import React from 'react'
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} from '../Redux/Reducers/showReducer'

export const Jogos4 = () => {
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
        dispatch(setFourth(false))
        dispatch(setThird(true))
    }

    const Avancar = () =>{
        dispatch(setFourth(false))
        dispatch(setFifth(true))
    }

    return (
        <C.Main show={show.fourth}>
            <h1>Rodada 4</h1>
            <C.jogo4>
            <h2>Grupo A</h2>
                <li><p>Napoli</p> <span>{Napoli.NapoliRod4} - {Ajax.AjaxRod4} </span> <p>Ajax</p></li>
                <li><p>Rangers</p> <span>{Rangers.RangersRod4} - {Liverpool.LiverpoolRod4} </span> <p>Liverpool</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo B</h2>
                <li><p>Bayer Leverkusen</p> <span>{BayerL.BayerLRod4} - {Porto.PortoRod4} </span> <p>FC Porto</p></li>
                <li><p>Atletico Madrid</p> <span>{AtleticoM.AtleticoMRod4} - {Brugge.BruggeRod4} </span> <p>Club Brugge</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo C</h2>
                <li><p>Vitoria Plzen</p> <span>{Plzen.PlzenRod4} - {BayernM.BayernMRod4} </span> <p>Bayern de Munique</p></li>
                <li><p>FC Barcelona</p> <span>{Barcelona.BarcelonaRod4} - {Inter.InterRod4} </span> <p>Inter</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo D</h2>
                <li><p>Tottenham</p> <span>{Tottenham.TottenhamRod4} - {Frankfurt.FrankfurtRod4} </span> <p>Eintracht Frankfurt</p></li>
                <li><p>Sporting</p> <span>{Sporting.SportingRod4} - {Marselha.MarselhaRod4} </span> <p>Marselha</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo E</h2>
                <li><p>NK Dinamo Zagreb</p> <span>{Dinamo.DinamoRod4} - {Salzburg.SalzburgRod4} </span> <p>RB Salzburg</p></li>
                <li><p>Milan</p> <span>{Milan.MilanRod4} - {Chelsea.ChelseaRod4} </span> <p>Chelsea</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo F</h2>
                <li><p>FC Shakhtar Donetsk</p> <span>{Shakhtar.ShakhtarRod4} - {RealM.RealMRod4} </span> <p>Real Madrid</p></li>
                <li><p>Celtic Glasgow</p> <span>{Celtic.CelticRod4} - {Leipzig.LeipzigRod4} </span> <p>RB Leipzig</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo G</h2>
                <li><p>FC Copenhaga</p> <span>{Copenhaga.CopenhagaRod4} - {ManC.ManCRod4} </span> <p>Manchester City</p></li>
                <li><p>Borussia Dortmund</p> <span>{Dortmund.DortmundRod4} - {Sevilla.SevillaRod4} </span> <p>Sevilla</p></li>
            </C.jogo4>

            <C.jogo4>
            <h2>Grupo H</h2>
                <li><p>Maccabi Haifa FC</p> <span>{Maccabi.MaccabiRod4} - {Juventus.JuventusRod4} </span> <p>Juventus</p></li>
                <li><p>PSG</p> <span>{PSG.PSGRod4} - {Benfica.BenficaRod4} </span> <p>Benfica</p></li>
            </C.jogo4>
            <C.Buttons>
            <button onClick={Voltar}>Anterior</button>
            <button onClick={Avancar}>Proximo</button>
            </C.Buttons>

        </C.Main>
    )
}