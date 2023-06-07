import React from 'react'
import * as C from './Styled'
import { useDispatch } from "react-redux"
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { setOitavasTela, setQuartasIda, setQuartasTela, setQuartasVolta, setSemisTela } from '../Redux/Reducers/showReducer'

export const Quartas = () => {
    const [showQua, setShowQua] = React.useState(true)
    const [showSemi, setShowSemi] = React.useState(false)
    const quart = useAppSelector(state => state.QuaTimes)
    const show = useAppSelector(state => state.show)
    const dispatch = useDispatch()

    const QuaSimu = () => {
    dispatch(setOitavasTela(false))

    if(show.quartasIda == false) {
        dispatch(setQuartasIda(true))
    }else {
        dispatch(setQuartasVolta(true))
        setShowQua(false)
    }
    }

    const SemiSimu = () => {
        dispatch(setQuartasTela(false))
        dispatch(setSemisTela(true))
        setShowSemi(false)
    }

    const OitTela = () =>{
        dispatch(setQuartasTela(false))
        dispatch(setOitavasTela(true))
    }

    const SemiTela = () => {
        if(quart.length > 0) {
            dispatch(setQuartasTela(false))
            dispatch(setSemisTela(true))
            setShowSemi(false)
        }
    }

    React.useEffect(() => {
        if(showQua == false){
            setShowSemi(true)
        }
    }, [showQua])

    return(
        <C.Main>
            <div>
            <h2>Quartas de Finais</h2>
            <C.buttonQua show={showQua} onClick={QuaSimu}>{show.quartasIda ? '4° Finais - Volta': "4° Finais - Ida"}</C.buttonQua>
            <C.buttonSemi show2={showSemi} onClick={SemiSimu}>Semi-Finais</C.buttonSemi>
            </div>

            <C.Setas>
            <h1 onClick={OitTela}>{`<`}</h1>
            <h1 onClick={SemiTela}>{`>`}</h1>
            </C.Setas>
        </C.Main>
    )
}