import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoE = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const Chelsea = useAppSelector(state => state.Chelsea)
    const Milan = useAppSelector(state => state.Milan)
    const Dinamo = useAppSelector(state => state.Dinamo)
    const Salzburg = useAppSelector(state => state.Salzburg)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoETimes = [ {time: Chelsea.Nome, jogos: Chelsea.Jogos, GolsM: Chelsea.GolsPro, GolsS: Chelsea.GolsC, SG: Chelsea.SG, P: Chelsea.Pontos},
        {time: Milan.Nome, jogos: Milan.Jogos, GolsM: Milan.GolsPro, GolsS: Milan.GolsC, SG: Milan.SG, P: Milan.Pontos},
        {time: Dinamo.Nome, jogos: Dinamo.Jogos, GolsM: Dinamo.GolsPro, GolsS: Dinamo.GolsC, SG: Dinamo.SG, P: Dinamo.Pontos},
        {time: Salzburg.Nome, jogos: Salzburg.Jogos, GolsM: Salzburg.GolsPro, GolsS: Salzburg.GolsC, SG: Salzburg.SG, P: Salzburg.Pontos}
    ]

    React.useEffect(() => {

        if(show.fimGClick == 1) {
            grupoETimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })

            setTimeout(() => {
                if(grupoETimes[0].time == 'Chelsea'){
                    dispatch(setTimesC({time: grupoETimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoETimes[0].time == 'Milan'){
                        dispatch(setTimesC({time: grupoETimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoETimes[0].time == 'NK Dinamo Zagreb'){
                        dispatch(setTimesC({time: grupoETimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoETimes[0].time == 'RB Salzburg'){
                        dispatch(setTimesC({time: grupoETimes[0].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }
            }, Math.random()*100);
            setTimeout(() => {
                if(grupoETimes[1].time == 'Chelsea'){
                    dispatch(setTimesC({time: grupoETimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }else if(grupoETimes[1].time == 'Milan'){
                        dispatch(setTimesC({time: grupoETimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoETimes[1].time == 'NK Dinamo Zagreb'){
                        dispatch(setTimesC({time: grupoETimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoETimes[1].time == 'RB Salzburg'){
                        dispatch(setTimesC({time: grupoETimes[1].time, oitavasIda: Math.floor(Math.random() * 3), oitavasVolta: Math.floor(Math.random() * 3)}))
                    }
            }, Math.random()*100);

          
        }
        
    }, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo E</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoETimes.map((item, index) => (
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