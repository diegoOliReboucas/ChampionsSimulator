import React from 'react'
import * as C from './Styled'
import { useDispatch } from "react-redux"
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { setOitavasTela, setQuartasIda, setQuartasTela, setQuartasVolta, setSemisIda, setSemisTela, setSemisVolta } from '../Redux/Reducers/showReducer'

export const Semis = () => {
    const [showSemi, setShowSemi] = React.useState(true)
    const [showFinal, setShowFinal] = React.useState(false)
    const show = useAppSelector(state => state.show)
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
        dispatch(setSemisTela(true))
        setShowSemi(false)
    }

    React.useEffect(() => {
        if(showSemi == false){
            setShowFinal(true)
        }
    }, [showSemi])

    return(
        <C.Main>
            <C.buttonSemi show={showSemi} onClick={SemiSimu}>{show.semisIda ? 'SemiFinal - Volta': "SemiFinal - Ida"}</C.buttonSemi>
            <C.buttonFinal show2={showFinal} onClick={FinalSimu}>Final</C.buttonFinal>
        </C.Main>
    )
}