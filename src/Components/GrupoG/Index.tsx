import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoG = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const Dortmund = useAppSelector(state => state.Dortmund)
    const Copenhaga = useAppSelector(state => state.Copenhaga)
    const ManC = useAppSelector(state => state.ManC)
    const Sevilla = useAppSelector(state => state.Sevilla)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoGTimes = [ {time: Dortmund.Nome, jogos: Dortmund.Jogos, GolsM: Dortmund.GolsPro, GolsS: Dortmund.GolsC, SG: Dortmund.SG, P: Dortmund.Pontos},
        {time: Copenhaga.Nome, jogos: Copenhaga.Jogos, GolsM: Copenhaga.GolsPro, GolsS: Copenhaga.GolsC, SG: Copenhaga.SG, P: Copenhaga.Pontos},
        {time: ManC.Nome, jogos: ManC.Jogos, GolsM: ManC.GolsPro, GolsS: ManC.GolsC, SG: ManC.SG, P: ManC.Pontos},
        {time: Sevilla.Nome, jogos: Sevilla.Jogos, GolsM: Sevilla.GolsPro, GolsS: Sevilla.GolsC, SG: Sevilla.SG, P: Sevilla.Pontos}
    ]

    React.useEffect(() => {
    if(show.fimGClick == 1) {
        grupoGTimes.sort(function(a, b) {
            if(a.P > b.P){
                return -1
            }else {
                return 1
            }
        })
        setTimeout(() => {
            if(grupoGTimes[0].time == 'Borussia Dortmund'){
                dispatch(setTimesC({time: grupoGTimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                }else if(grupoGTimes[0].time == 'FC Copenhaga'){
                    dispatch(setTimesC({time: grupoGTimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                }else if(grupoGTimes[0].time == 'Manchester City'){
                    dispatch(setTimesC({time: grupoGTimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                }else if(grupoGTimes[0].time == 'Sevilla'){
                    dispatch(setTimesC({time: grupoGTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                }
        }, Math.random()*100);
        setTimeout(() => {
            if(grupoGTimes[1].time == 'Borussia Dortmund'){
                dispatch(setTimesC({time: grupoGTimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                }else if(grupoGTimes[1].time == 'FC Copenhaga'){
                    dispatch(setTimesC({time: grupoGTimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                }else if(grupoGTimes[1].time == 'Manchester City'){
                    dispatch(setTimesC({time: grupoGTimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                }else if(grupoGTimes[1].time == 'Sevilla'){
                    dispatch(setTimesC({time: grupoGTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                }
        }, Math.random()*100);
       
    }
    
}, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo G</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoGTimes.map((item, index) => (
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