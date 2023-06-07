import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoD = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const Frankfurt = useAppSelector(state => state.Frankfurt)
    const Marselha = useAppSelector(state => state.Marselha)
    const Sporting = useAppSelector(state => state.Sporting)
    const Tottenham = useAppSelector(state => state.Tottenham)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoDTimes = [ {time: Frankfurt.Nome, jogos: Frankfurt.Jogos, GolsM: Frankfurt.GolsPro, GolsS: Frankfurt.GolsC, SG: Frankfurt.SG, P: Frankfurt.Pontos},
        {time: Marselha.Nome, jogos: Marselha.Jogos, GolsM: Marselha.GolsPro, GolsS: Marselha.GolsC, SG: Marselha.SG, P: Marselha.Pontos},
        {time: Sporting.Nome, jogos: Sporting.Jogos, GolsM: Sporting.GolsPro, GolsS: Sporting.GolsC, SG: Sporting.SG, P: Sporting.Pontos},
        {time: Tottenham.Nome, jogos: Tottenham.Jogos, GolsM: Tottenham.GolsPro, GolsS: Tottenham.GolsC, SG: Tottenham.SG, P: Tottenham.Pontos}
    ]

    React.useEffect(() => {

        if(show.fimGClick == 1) {
            grupoDTimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })

            setTimeout(() => {
                if(grupoDTimes[0].time == 'Eintracht Frankfurt'){
                    dispatch(setTimesC({time: grupoDTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoDTimes[0].time == 'Marselha'){
                        dispatch(setTimesC({time: grupoDTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoDTimes[0].time == 'Sporting'){
                        dispatch(setTimesC({time: grupoDTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoDTimes[0].time == 'Tottenham'){
                        dispatch(setTimesC({time: grupoDTimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }
            }, Math.random()*100);
            setTimeout(() => {
                if(grupoDTimes[1].time == 'Eintracht Frankfurt'){
                    dispatch(setTimesC({time: grupoDTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoDTimes[1].time == 'Marselha'){
                        dispatch(setTimesC({time: grupoDTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoDTimes[1].time == 'Sporting'){
                        dispatch(setTimesC({time: grupoDTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoDTimes[1].time == 'Tottenham'){
                        dispatch(setTimesC({time: grupoDTimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }
            }, Math.random()*100);
            
           
        }
        
    }, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo D</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoDTimes.map((item, index) => (
        <div key={index}>
        <ul>
            <li>
                <p style={{width: "150px"}}>{item.time}</p> 
                <p>{item.jogos}</p> 
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>{item.GolsM + ":" + item.GolsS}</p>
                <p style={{width: "15px", display: "flex", justifyContent: "center"}}>{item.SG}</p>
                <p style={{paddingLeft: "12px"}}> {item.P}</p>
                </li>
        </ul>
        </div>
    ))}
        </C.Main>
    )
}