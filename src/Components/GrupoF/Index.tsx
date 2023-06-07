import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoF = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const Celtic = useAppSelector(state => state.Celtic)
    const Shakhtar = useAppSelector(state => state.Shakhtar)
    const RealM = useAppSelector(state => state.RealM)
    const Leipzig = useAppSelector(state => state.Leipzig)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoFTimes = [ {time: Celtic.Nome, jogos: Celtic.Jogos, GolsM: Celtic.GolsPro, GolsS: Celtic.GolsC, SG: Celtic.SG, P: Celtic.Pontos},
        {time: Shakhtar.Nome, jogos: Shakhtar.Jogos, GolsM: Shakhtar.GolsPro, GolsS: Shakhtar.GolsC, SG: Shakhtar.SG, P: Shakhtar.Pontos},
        {time: RealM.Nome, jogos: RealM.Jogos, GolsM: RealM.GolsPro, GolsS: RealM.GolsC, SG: RealM.SG, P: RealM.Pontos},
        {time: Leipzig.Nome, jogos: Leipzig.Jogos, GolsM: Leipzig.GolsPro, GolsS: Leipzig.GolsC, SG: Leipzig.SG, P: Leipzig.Pontos}
    ]

    React.useEffect(() => {

        if(show.fimGClick == 1) {
            grupoFTimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })
            setTimeout(() => {
                if(grupoFTimes[0].time == 'Celtic Glasgowk'){
                    dispatch(setTimesC({time: grupoFTimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoFTimes[0].time == 'FC Shakhtar Donetski'){
                        dispatch(setTimesC({time: grupoFTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoFTimes[0].time == 'Real Madrid'){
                        dispatch(setTimesC({time: grupoFTimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoFTimes[0].time == 'RB Leipzig'){
                        dispatch(setTimesC({time: grupoFTimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }
            }, Math.random()*100);
            setTimeout(() => {
                if(grupoFTimes[1].time == 'Celtic Glasgowk'){
                    dispatch(setTimesC({time: grupoFTimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoFTimes[1].time == 'FC Shakhtar Donetski'){
                        dispatch(setTimesC({time: grupoFTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoFTimes[1].time == 'Real Madrid'){
                        dispatch(setTimesC({time: grupoFTimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoFTimes[1].time == 'RB Leipzig'){
                        dispatch(setTimesC({time: grupoFTimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }
            }, Math.random()*100);
          
        }
        
    }, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo F</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoFTimes.map((item, index) => (
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