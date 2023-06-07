import React from 'react'
import * as C from './Styled'
import { useDispatch } from "react-redux"
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { setFinal, setFinalTela, setOitavasTela, setQuartasIda, setQuartasTela, setQuartasVolta, setSemisIda, setSemisTela, setSemisVolta } from '../Redux/Reducers/showReducer'

export const Final = () => {
    const [ShowFinal, setShowFinal] = React.useState(true)
    const show = useAppSelector(state => state.show)
    const campeao = useAppSelector(state => state.CampeaoTime)
    const dispatch = useDispatch()

    const FinalSimu = () => {
    dispatch(setOitavasTela(false))
    dispatch(setFinal(true))
    setShowFinal(false)
    }

    const SemiTela = () => {
        dispatch(setFinalTela(false))
        dispatch(setSemisTela(true))
        
    }

    return(
        <C.Main>
            <div>
            <h2>Final</h2>
            <C.buttonFinal show={ShowFinal} onClick={FinalSimu}>Campeão</C.buttonFinal>
            </div>

            <C.Taça>
                <img src="https://www.thesun.co.uk/wp-content/uploads/2023/02/trophy.png" alt="taça" />
            </C.Taça>

            <C.h1>{campeao.length > 0 ?`Campeão: ${campeao[0].time}`: ''}</C.h1>

            <C.Setas>
            <h1 onClick={SemiTela}>{`<`}</h1>
            <h1>{``}</h1>
            </C.Setas>
        </C.Main>
    )
}