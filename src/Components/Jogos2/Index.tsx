import React from 'react'
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} from '../Redux/Reducers/showReducer'

export const Jogos2 = () => {
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
        dispatch(setSecond(false))
        dispatch(setFirst(true))
    }

    const Avancar = () =>{
        dispatch(setSecond(false))
        dispatch(setThird(true))
    }

    return (
        <C.Main show={show.second}>
            <h1>Rodada 2</h1>
            <C.jogo2>
            <h2>Grupo A</h2>
                <li><p>Rangers</p> <span>{Rangers.RangersRod2} - {Napoli.NapoliRod2} </span> <p>Napoli</p></li>
                <li><p>Liverpool</p> <span>{Liverpool.LiverpoolRod2} - {Ajax.AjaxRod2} </span> <p>Ajax</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo B</h2>
                <li><p>FC Porto</p> <span>{Porto.PortoRod2} - {Brugge.BruggeRod2} </span> <p>Club Brugge</p></li>
                <li><p>Bayer Leverkusen</p> <span>{BayerL.BayerLRod2} - {AtleticoM.AtleticoMRod2} </span> <p>Atletico Madrid</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo C</h2>
                <li><p>Vitoria Plzen</p> <span>{Plzen.PlzenRod2} - {Inter.InterRod2} </span> <p>Inter</p></li>
                <li><p>Bayern de Munique</p> <span>{BayernM.BayernMRod2} - {Barcelona.BarcelonaRod2} </span> <p>FC Barcelona</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo D</h2>
                <li><p>Sporting</p> <span>{Sporting.SportingRod2} - {Tottenham.TottenhamRod2} </span> <p>Tottenham</p></li>
                <li><p>Marselha</p> <span>{Marselha.MarselhaRod2} - {Frankfurt.FrankfurtRod2} </span> <p>Eintracht Frankfurt</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo E</h2>
                <li><p>Milan</p> <span>{Milan.MilanRod2} - {Dinamo.DinamoRod2} </span> <p>NK Dinamo Zagreb</p></li>
                <li><p>Chelsea</p> <span>{Chelsea.ChelseaRod2} - {Salzburg.SalzburgRod2} </span> <p>RB Salzburg</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo F</h2>
                <li><p>FC Shakhtar Donetsk</p> <span>{Shakhtar.ShakhtarRod2} - {Celtic.CelticRod2} </span> <p>Celtic Glasgow</p></li>
                <li><p>Real Madrid</p> <span>{RealM.RealMRod2} - {Leipzig.LeipzigRod2} </span> <p>RB Leipzig</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo G</h2>
                <li><p>FC Copenhaga</p> <span>{Copenhaga.CopenhagaRod2} - {Sevilla.SevillaRod2} </span> <p>Sevilla</p></li>
                <li><p>Manchester City</p> <span>{ManC.ManCRod2} - {Dortmund.DortmundRod2} </span> <p>Borussia Dortmund</p></li>
            </C.jogo2>

            <C.jogo2>
            <h2>Grupo H</h2>
                <li><p>Juventus</p> <span>{Juventus.JuventusRod2} - {Benfica.BenficaRod2} </span> <p>Benfica</p></li>
                <li><p>Maccabi Haifa FC</p> <span>{Maccabi.MaccabiRod2} - {PSG.PSGRod2} </span> <p>PSG</p></li>
            </C.jogo2>
            <C.Buttons>
            <button onClick={Voltar}>Anterior</button>
            <button onClick={Avancar}>Proximo</button>
            </C.Buttons>


        </C.Main>
    )
}