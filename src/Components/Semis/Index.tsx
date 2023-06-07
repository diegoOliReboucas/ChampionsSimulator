import React from 'react'
import * as C from './Styled'
import { useDispatch } from "react-redux"
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { setFinalTela, setOitavasTela, setQuartasIda, setQuartasTela, setQuartasVolta, setSemisIda, setSemisTela, setSemisVolta } from '../Redux/Reducers/showReducer'

export const Semis = () => {
    const [showSemi, setShowSemi] = React.useState(true)
    const [showFinal, setShowFinal] = React.useState(false)
    const show = useAppSelector(state => state.show)
    const semi = useAppSelector(state => state.SemiTimes)
    const dispatch = useDispatch()

    const SemiSimu = () => {
    dispatch(setOitavasTela(false))

    if(show.semisIda == false) {
        dispatch(setSemisIda(true))
    }else {
        dispatch(setSemisVolta(true))
        setShowSemi(false)
    }
    }

    const FinalSimu = () => {
        dispatch(setSemisTela(false))
        dispatch(setFinalTela(true))
        setShowFinal(false)
    }

    const QuaTela = () =>{
        dispatch(setSemisTela(false))
        dispatch(setQuartasTela(true))
    }

    const FinalTela = () => {
        if(semi.length > 0) {
            dispatch(setSemisTela(false))
            dispatch(setFinalTela(true))
            setShowFinal(false)
        }

    }

    React.useEffect(() => {
        if(showSemi == false){
            setShowFinal(true)
        }
    }, [showSemi])

    return(
        <C.Main>
            <div>
                <h2>Semi-Final</h2>
            <C.buttonSemi show={showSemi} onClick={SemiSimu}>{show.semisIda ? 'SemiFinal - Volta': "SemiFinal - Ida"}</C.buttonSemi>
            <C.buttonFinal show2={showFinal} onClick={FinalSimu}>Final</C.buttonFinal>
            </div>

            <C.Setas>
            <h1 onClick={QuaTela}>{`<`}</h1>
            <h1 onClick={FinalTela}>{`>`}</h1>
            </C.Setas>

        </C.Main>
    )
}