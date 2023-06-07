import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoC = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const BayernM = useAppSelector(state => state.BayernM)
    const Inter = useAppSelector(state => state.Inter)
    const Barcelona = useAppSelector(state => state.Barcelona)
    const Plzen = useAppSelector(state => state.Plzen)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoCTimes = [ {time: BayernM.Nome, jogos: BayernM.Jogos, GolsM: BayernM.GolsPro, GolsS: BayernM.GolsC, SG: BayernM.SG, P: BayernM.Pontos},
        {time: Inter.Nome, jogos: Inter.Jogos, GolsM: Inter.GolsPro, GolsS: Inter.GolsC, SG: Inter.SG, P: Inter.Pontos},
        {time: Barcelona.Nome, jogos: Barcelona.Jogos, GolsM: Barcelona.GolsPro, GolsS: Barcelona.GolsC, SG: Barcelona.SG, P: Barcelona.Pontos},
        {time: Plzen.Nome, jogos: Plzen.Jogos, GolsM: Plzen.GolsPro, GolsS: Plzen.GolsC, SG: Plzen.SG, P: Plzen.Pontos}
    ]

    React.useEffect(() => {

        if(show.fimGClick == 1) {
            grupoCTimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })
  
            setTimeout(() => {
                if(grupoCTimes[0].time == 'Bayern de Munique'){
                    dispatch(setTimesC({time: grupoCTimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoCTimes[0].time == 'Inter'){
                        dispatch(setTimesC({time: grupoCTimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoCTimes[0].time == 'FC Barcelona'){
                        dispatch(setTimesC({time: grupoCTimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoCTimes[0].time == 'Vitoria Plzen'){
                        dispatch(setTimesC({time: grupoCTimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }
            }, Math.random()*100);
            setTimeout(() => {
                if(grupoCTimes[1].time == 'Bayern de Munique'){
                    dispatch(setTimesC({time: grupoCTimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoCTimes[1].time == 'Inter'){
                        dispatch(setTimesC({time: grupoCTimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoCTimes[1].time == 'FC Barcelona'){
                        dispatch(setTimesC({time: grupoCTimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoCTimes[1].time == 'Vitoria Plzen'){
                        dispatch(setTimesC({time: grupoCTimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }
            }, Math.random()*100);
            
           
        }
        
    }, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo C</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoCTimes.map((item, index) => (
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