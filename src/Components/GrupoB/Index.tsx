import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoB = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const AtleticoM = useAppSelector(state => state.AtleticoM)
    const BayerL = useAppSelector(state => state.BayerL)
    const Brugge = useAppSelector(state => state.Brugge)
    const Porto = useAppSelector(state => state.Porto)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoBTimes = [ {time: AtleticoM.Nome, jogos: AtleticoM.Jogos, GolsM: AtleticoM.GolsPro, GolsS: AtleticoM.GolsC, SG: AtleticoM.SG, P: AtleticoM.Pontos},
        {time: BayerL.Nome, jogos: BayerL.Jogos, GolsM: BayerL.GolsPro, GolsS: BayerL.GolsC, SG: BayerL.SG, P: BayerL.Pontos},
        {time: Brugge.Nome, jogos: Brugge.Jogos, GolsM: Brugge.GolsPro, GolsS: Brugge.GolsC, SG: Brugge.SG, P: Brugge.Pontos},
        {time: Porto.Nome, jogos: Porto.Jogos, GolsM: Porto.GolsPro, GolsS: Porto.GolsC, SG: Porto.SG, P: Porto.Pontos}
    ]

    React.useEffect(() => {

        if(show.fimGClick == 1) {
            grupoBTimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })
            
            setTimeout(() => {
                if(grupoBTimes[0].time == 'Atletico de Madrid'){
                    dispatch(setTimesC({time: grupoBTimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoBTimes[0].time == 'Bayer Leverkusen'){
                        dispatch(setTimesC({time: grupoBTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoBTimes[0].time == 'Club Brugge'){
                        dispatch(setTimesC({time: grupoBTimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoBTimes[0].time == 'FC Porto'){
                        dispatch(setTimesC({time: grupoBTimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }
            }, Math.random()*100);
            setTimeout(() => {
                if(grupoBTimes[1].time == 'Atletico de Madrid'){
                    dispatch(setTimesC({time: grupoBTimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoBTimes[1].time == 'Bayer Leverkusen'){
                        dispatch(setTimesC({time: grupoBTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }else if(grupoBTimes[1].time == 'Club Brugge'){
                        dispatch(setTimesC({time: grupoBTimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoBTimes[1].time == 'FC Porto'){
                        dispatch(setTimesC({time: grupoBTimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }
            }, Math.random()*100);
            
            
        }
        
    }, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo B</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoBTimes.map((item, index) => (
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