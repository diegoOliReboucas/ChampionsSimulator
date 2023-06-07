import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoA = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const Napoli = useAppSelector(state => state.Napoli)
    const Liverpool = useAppSelector(state => state.Liverpool)
    const Ajax = useAppSelector(state => state.Ajax)
    const Rangers = useAppSelector(state => state.Rangers)
    const TimesC = useAppSelector(state => state.TimesC)
    
    let grupoATimes = [ {time: Napoli.Nome, jogos: Napoli.Jogos, GolsM: Napoli.GolsPro, GolsS: Napoli.GolsC, SG: Napoli.SG, P: Napoli.Pontos},
        {time: Liverpool.Nome, jogos: Liverpool.Jogos, GolsM: Liverpool.GolsPro, GolsS: Liverpool.GolsC, SG: Liverpool.SG, P: Liverpool.Pontos},
        {time: Ajax.Nome, jogos: Ajax.Jogos, GolsM: Ajax.GolsPro, GolsS: Ajax.GolsC, SG: Ajax.SG, P: Ajax.Pontos},
        {time: Rangers.Nome, jogos: Rangers.Jogos, GolsM: Rangers.GolsPro, GolsS: Rangers.GolsC, SG: Rangers.SG, P: Rangers.Pontos}
    ]

    React.useEffect(() => {
        if(show.fimGClick == 1) {
            grupoATimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })
            
                setTimeout(() => {
                    if(grupoATimes[0].time == 'Napoli'){
                    dispatch(setTimesC({time: grupoATimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoATimes[0].time == 'Liverpool'){
                        dispatch(setTimesC({time: grupoATimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoATimes[0].time == 'Rangers'){
                        dispatch(setTimesC({time: grupoATimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoATimes[0].time == 'Ajax'){
                        dispatch(setTimesC({time: grupoATimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }

                }, Math.random()*100);
                setTimeout(() => {
                    if(grupoATimes[1].time == 'Napoli'){
                        dispatch(setTimesC({time: grupoATimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                        }else if(grupoATimes[1].time == 'Liverpool'){
                            dispatch(setTimesC({time: grupoATimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                        }else if(grupoATimes[1].time == 'Rangers'){
                            dispatch(setTimesC({time: grupoATimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                        }else if(grupoATimes[1].time == 'Ajax'){
                            dispatch(setTimesC({time: grupoATimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                        }
                }, Math.random()*100);
        }
    }, [show.fimGClick])

    return (
        <C.Main>
            <ul>
            <li>
                <h2 style={{width: "150px"}}>Grupo A</h2>
                        <p>J</p>
                        <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                        <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                        <p style={{paddingLeft: "10px"}}>P</p>
            </li>
            </ul>
            {grupoATimes.map((item, index) => (
                <div key={index}>
                <ul >
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
            {/* <button onClick={handleClick}>click</button> */}
        </C.Main>
    )
}