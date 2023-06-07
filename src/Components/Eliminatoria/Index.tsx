import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setElTela } from "../Redux/Reducers/showReducer";
import { Oitavas } from "../Oitavas/Index";
import { setTimesOit } from "../Redux/Reducers/OitavasReducer";
import { Quartas } from "../Quartas/Index";
import { Semis } from "../Semis/Index";
import { setTimesQua } from "../Redux/Reducers/QuartasReducer";
import { Final } from "../Final/Index";
import { setTimesSemi } from "../Redux/Reducers/SemiReducer";
import { setTimeCampeao } from "../Redux/Reducers/CampeaoReducer";

export const Eliminatoria = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const timesC = useAppSelector(state => state.TimesC)
    const OitTimes = useAppSelector(state => state.OitTimes)
    const QuaTimes = useAppSelector(state => state.QuaTimes)
    const SemiTimes = useAppSelector(state => state.SemiTimes)
    const campeao = useAppSelector(state => state.CampeaoTime)

    const fecharTela = () => {
        dispatch(setElTela(false))
    }

    React.useEffect(() => {
        if(show.oitavasIda == true){
            if(timesC[0].oitavasIda + timesC[0].oitavasVolta >= timesC[1].oitavasIda + timesC[1].oitavasVolta){
                    dispatch(setTimesOit({time: timesC[0].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[0].oitavasIda + timesC[0].oitavasVolta < timesC[1].oitavasIda + timesC[1].oitavasVolta){
                dispatch(setTimesOit({time: timesC[1].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }

             if(timesC[2].oitavasIda + timesC[2].oitavasVolta >= timesC[3].oitavasIda + timesC[3].oitavasVolta){
                dispatch(setTimesOit({time: timesC[2].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[2].oitavasIda + timesC[2].oitavasVolta < timesC[3].oitavasIda + timesC[3].oitavasVolta){
                dispatch(setTimesOit({time: timesC[3].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }
             if(timesC[4].oitavasIda + timesC[4].oitavasVolta >= timesC[5].oitavasIda + timesC[5].oitavasVolta){
                dispatch(setTimesOit({time: timesC[4].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[4].oitavasIda + timesC[4].oitavasVolta < timesC[5].oitavasIda + timesC[5].oitavasVolta){       
                dispatch(setTimesOit({time: timesC[5].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }

             if(timesC[6].oitavasIda + timesC[6].oitavasVolta >= timesC[7].oitavasIda + timesC[7].oitavasVolta){                
                dispatch(setTimesOit({time: timesC[6].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[6].oitavasIda + timesC[6].oitavasVolta < timesC[7].oitavasIda + timesC[7].oitavasVolta){
                dispatch(setTimesOit({time: timesC[7].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }

             if(timesC[8].oitavasIda + timesC[8].oitavasVolta >= timesC[9].oitavasIda + timesC[9].oitavasVolta){
                dispatch(setTimesOit({time: timesC[8].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[8].oitavasIda + timesC[8].oitavasVolta < timesC[9].oitavasIda + timesC[9].oitavasVolta){
                dispatch(setTimesOit({time: timesC[9].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }

             if(timesC[10].oitavasIda + timesC[10].oitavasVolta >= timesC[11].oitavasIda + timesC[11].oitavasVolta){
                dispatch(setTimesOit({time: timesC[10].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[10].oitavasIda + timesC[10].oitavasVolta < timesC[11].oitavasIda + timesC[11].oitavasVolta){
                dispatch(setTimesOit({time: timesC[11].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }

             if(timesC[12].oitavasIda + timesC[12].oitavasVolta >= timesC[13].oitavasIda + timesC[13].oitavasVolta){
                dispatch(setTimesOit({time: timesC[12].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[12].oitavasIda + timesC[12].oitavasVolta < timesC[13].oitavasIda + timesC[13].oitavasVolta){
                dispatch(setTimesOit({time: timesC[13].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }

             if(timesC[14].oitavasIda + timesC[14].oitavasVolta >= timesC[15].oitavasIda + timesC[15].oitavasVolta){
                dispatch(setTimesOit({time: timesC[14].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }else if(timesC[14].oitavasIda + timesC[14].oitavasVolta < timesC[15].oitavasIda + timesC[15].oitavasVolta){
                dispatch(setTimesOit({time: timesC[15].time, quartasIda: Math.floor(Math.random () * 5), quartasVolta: Math.floor(Math.random () * 5)}))
             }
    }
  
    }, [show.oitavasVolta])

    React.useEffect(() => {
        if(show.quartasIda == true) {
            if(OitTimes[0].quartasIda + OitTimes[0].quartasVolta >= OitTimes[1].quartasIda + OitTimes[1].quartasVolta){
                dispatch(setTimesQua({time: OitTimes[0].time, semiIda: Math.floor(Math.random () * 5),semiVolta: Math.floor(Math.random () * 5)}))
         }else if(OitTimes[0].quartasIda + OitTimes[0].quartasVolta < OitTimes[1].quartasIda + OitTimes[1].quartasVolta){
            dispatch(setTimesQua({time: OitTimes[1].time, semiIda: Math.floor(Math.random () * 5), semiVolta: Math.floor(Math.random () * 5)}))
         }

         if(OitTimes[2].quartasIda + OitTimes[2].quartasVolta >= OitTimes[3].quartasIda + OitTimes[3].quartasVolta){
            dispatch(setTimesQua({time: OitTimes[2].time, semiIda: Math.floor(Math.random () * 5),semiVolta: Math.floor(Math.random () * 5)}))
        }else if(OitTimes[2].quartasIda + OitTimes[2].quartasVolta < OitTimes[3].quartasIda + OitTimes[3].quartasVolta){
            dispatch(setTimesQua({time: OitTimes[3].time, semiIda: Math.floor(Math.random () * 5), semiVolta: Math.floor(Math.random () * 5)}))
        }

        if(OitTimes[4].quartasIda + OitTimes[4].quartasVolta >= OitTimes[5].quartasIda + OitTimes[5].quartasVolta){
            dispatch(setTimesQua({time: OitTimes[4].time, semiIda: Math.floor(Math.random () * 5),semiVolta: Math.floor(Math.random () * 5)}))
        }else if(OitTimes[4].quartasIda + OitTimes[4].quartasVolta < OitTimes[5].quartasIda + OitTimes[5].quartasVolta){
            dispatch(setTimesQua({time: OitTimes[5].time, semiIda: Math.floor(Math.random () * 5), semiVolta: Math.floor(Math.random () * 5)}))
        }

        if(OitTimes[6].quartasIda + OitTimes[6].quartasVolta >= OitTimes[7].quartasIda + OitTimes[7].quartasVolta){
            dispatch(setTimesQua({time: OitTimes[6].time, semiIda: Math.floor(Math.random () * 5),semiVolta: Math.floor(Math.random () * 5)}))
        }else if(OitTimes[6].quartasIda + OitTimes[6].quartasVolta < OitTimes[7].quartasIda + OitTimes[7].quartasVolta){
        dispatch(setTimesQua({time: OitTimes[7].time, semiIda: Math.floor(Math.random () * 5), semiVolta: Math.floor(Math.random () * 5)}))
        }
        }
    }, [show.quartasVolta])

    React.useEffect(() => {
    if(show.semisIda == true) {
        if(QuaTimes[0].semiIda + QuaTimes[0].semiIda >= QuaTimes[1].semiIda + QuaTimes[1].semiVolta){
            dispatch(setTimesSemi({time: QuaTimes[0].time, FinalRes: Math.floor(Math.random() * 5)}))
        }else if(QuaTimes[0].semiIda + QuaTimes[0].semiVolta < QuaTimes[1].semiIda + QuaTimes[1].semiVolta){
            dispatch(setTimesSemi({time: QuaTimes[1].time, FinalRes: Math.floor(Math.random() * 5)}))
        }

        if(QuaTimes[2].semiIda + QuaTimes[2].semiVolta >= QuaTimes[3].semiIda + QuaTimes[3].semiVolta){
        dispatch(setTimesSemi({time: QuaTimes[2].time, FinalRes: Math.floor(Math.random() * 5)}))
        }else if(QuaTimes[2].semiIda + QuaTimes[2].semiVolta < QuaTimes[3].semiIda + QuaTimes[3].semiVolta){
        dispatch(setTimesSemi({time: QuaTimes[3].time, FinalRes: Math.floor(Math.random() * 5)}))
    }
}
    }, [show.semisVolta])

    React.useEffect(() => {
        if(show.final == true) {
        if(SemiTimes[0].FinalRes >= SemiTimes[1].FinalRes){
            dispatch(setTimeCampeao({time: SemiTimes[0].time}))
        }else if(SemiTimes[0].FinalRes < SemiTimes[1].FinalRes){
            dispatch(setTimeCampeao({time: SemiTimes[1].time}))
        }
    }
    }, [show.final])

    return (
        <C.Main show={show.eliminatoriaTela}>
            <C.Fechar onClick={fecharTela}>X</C.Fechar>
            <C.Oita oitavas={show.oitavasTela}>
                <Oitavas />
            </C.Oita>
            <C.Quart quartas={show.quartasTela}>
            <Quartas />
            </C.Quart>
            <C.Semi semifinais={show.semisTela}>
            <Semis />
            </C.Semi>
            <C.Final final={show.finalTela}>
            <Final />
            </C.Final>
            

            <C.Oitavas oitavas={show.oitavasTela}>
            <ul>
                {timesC.slice(0,8).map((item, index) => (
                    <div key={index}>
                        <li>{item.time}</li>
                        <C.oitIda ida={show.oitavasIda}>{item.oitavasIda}</C.oitIda>
                        <C.oitVolta volta={show.oitavasVolta}>{item.oitavasVolta}</C.oitVolta>
                    </div>
   
                ))}
            </ul>

            <ul>
                {timesC.slice(8,16).map((item, index) => (
                    <div key={index}>
                        <C.oitVolta volta={show.oitavasVolta}>{item.oitavasVolta}</C.oitVolta>
                        <C.oitIda ida={show.oitavasIda}>{item.oitavasIda}</C.oitIda>
                       <li>{item.time}</li>
                   </div>
                ))}
            </ul>
            </C.Oitavas>

            <C.Quartas quartas={show.quartasTela}>
                    <ul>
                        {OitTimes.slice(0,4).map((item, index) => (
                        <div key={index}>
                            <li>{item.time}</li>
                            <C.quaIda ida={show.quartasIda}>{item.quartasIda}</C.quaIda>
                            <C.quaVolta volta={show.quartasVolta}>{item.quartasVolta}</C.quaVolta>
                        </div>
                        ))}
                    </ul>


                    <ul>
                        {OitTimes.slice(4,8).map((item, index) => (
                        <div key={index}> 
                            <C.quaVolta volta={show.quartasVolta}>{item.quartasVolta}</C.quaVolta>
                            <C.quaIda ida={show.quartasIda}>{item.quartasIda}</C.quaIda>
                            <li>{item.time}</li>
                        </div>
                        ))}
                    </ul>
            </C.Quartas>

            <C.Semis semifinais={show.semisTela}>
                    <ul>
                        {QuaTimes.slice(0,2).map((item, index) => (
                        <div key={index}>
                            <li>{item.time}</li>
                            <C.semiIda ida={show.semisIda}>{item.semiIda}</C.semiIda>
                            <C.semiVolta volta={show.semisVolta}>{item.semiVolta}</C.semiVolta>
                        </div>
                        ))}
                    </ul>


                    <ul>
                        {QuaTimes.slice(2,4).map((item, index) => (
                        <div key={index}>
                            <C.semiVolta volta={show.semisVolta}>{item.semiVolta}</C.semiVolta>
                            <C.semiIda ida={show.semisIda}>{item.semiIda}</C.semiIda>
                            <li>{item.time}</li>
                        </div>
                        ))}
                    </ul>
            </C.Semis >

            <C.Finais final={show.finalTela}>
                    <ul>
                        
                    {SemiTimes.slice(0,1).map((item, index) => (
                            <div key={index}>
                                <li>{item.time}</li>
                                <C.finalRes campeao={show.final}>{item.FinalRes}</C.finalRes>
                            </div>
                        ))}
                    </ul>

                    <ul>
                        {SemiTimes.slice(1,2).map((item, index) => (
                            <div key={index}>
                                <C.finalRes campeao={show.final}>{item.FinalRes}</C.finalRes>
                                <li>{item.time}</li>
                            </div>
                        ))}
                    </ul>
            </C.Finais>

        </C.Main>
    )
}