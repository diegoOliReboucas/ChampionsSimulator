import React from 'react'
import * as C from './Styled'
import { useDispatch } from "react-redux"
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { setOitavasIda, setOitavasTela, setOitavasVolta, setQuartasTela } from '../Redux/Reducers/showReducer'

export const Oitavas = () => {
    const [showOit, setShowOit] = React.useState(true)
    const [showQua, setShowQua] = React.useState(false)
    const OitTimes = useAppSelector(state => state.OitTimes)
    const show = useAppSelector(state => state.show)
    const dispatch = useDispatch()

    const OitSimu = () => {
        if(show.oitavasIda == false) {
            dispatch(setOitavasIda(true))
        }else {
            dispatch(setOitavasVolta(true))
            setShowOit(false)
        }
    }

    const QuaSimu = () => {
        dispatch(setOitavasTela(false))
        dispatch(setQuartasTela(true))
        setShowQua(false)
    }

    const QuartTela = () => {
        if(OitTimes.length > 0) {
            dispatch(setOitavasTela(false))
            dispatch(setQuartasTela(true))
            setShowQua(false)
        }
    }

    React.useEffect(() => {
        if(showOit == false){
            setShowQua(true)
        }
    }, [showOit])

    return(
        <C.Main>
            <div>
            <h2>Oitavas de Finais</h2>
            <C.buttonOit show={showOit} onClick={OitSimu}>{show.oitavasIda ? '8° Finais - Volta': "8° Finais - Ida"}</C.buttonOit>
            <C.buttonQua show2={showQua} onClick={QuaSimu}>4° de Finais</C.buttonQua>
            </div>

            <C.Setas>
            <h1>{``}</h1>
            <h1 onClick={QuartTela}>{`>`}</h1>
            </C.Setas>
        </C.Main>
    )
}