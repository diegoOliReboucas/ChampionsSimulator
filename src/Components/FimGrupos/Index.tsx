import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setElTela, setFimGClick } from "../Redux/Reducers/showReducer";

export const FimGrupos = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const timesC = useAppSelector(state => state.TimesC)

    const TerminarGrupos = () => {
        dispatch(setFimGClick(1))
        dispatch(setElTela(true))
    }

    return (
        <C.Main showRodButton={show.fimG}>
            <button onClick={TerminarGrupos}>Playoffs</button>
        </C.Main>
    )
}