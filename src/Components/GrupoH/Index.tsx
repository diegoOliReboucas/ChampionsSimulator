import React from "react";
import * as C from './Styled'
import { useAppSelector } from "../Redux/Hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTimesC } from "../Redux/Reducers/timesClassificadosReducer";

export const GrupoH = () => {
    const dispatch = useDispatch()
    const show = useAppSelector(state => state.show)
    const Benfica = useAppSelector(state => state.Benfica)
    const Juventus = useAppSelector(state => state.Juventus)
    const Maccabi = useAppSelector(state => state.Maccabi)
    const PSG = useAppSelector(state => state.PSG)
    const TimesC = useAppSelector(state => state.TimesC)

    let grupoHTimes = [ {time: Benfica.Nome, jogos: Benfica.Jogos, GolsM: Benfica.GolsPro, GolsS: Benfica.GolsC, SG: Benfica.SG, P: Benfica.Pontos},
        {time: Juventus.Nome, jogos: Juventus.Jogos, GolsM: Juventus.GolsPro, GolsS: Juventus.GolsC, SG: Juventus.SG, P: Juventus.Pontos},
        {time: Maccabi.Nome, jogos: Maccabi.Jogos, GolsM: Maccabi.GolsPro, GolsS: Maccabi.GolsC, SG: Maccabi.SG, P: Maccabi.Pontos},
        {time: PSG.Nome, jogos: PSG.Jogos, GolsM: PSG.GolsPro, GolsS: PSG.GolsC, SG: PSG.SG, P: PSG.Pontos}
    ]

    React.useEffect(() => {
        if(show.fimGClick == 1) {
            grupoHTimes.sort(function(a, b) {
                if(a.P > b.P){
                    return -1
                }else {
                    return 1
                }
            })
            setTimeout(() => {
                if(grupoHTimes[0].time == 'Benfica'){
                    dispatch(setTimesC({time: grupoHTimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoHTimes[0].time == 'Juventus'){
                        dispatch(setTimesC({time: grupoHTimes[0].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoHTimes[0].time == 'Maccabi Haifa FC'){
                        dispatch(setTimesC({time: grupoHTimes[0].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoHTimes[0].time == 'PSG'){
                        dispatch(setTimesC({time: grupoHTimes[0].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }
            }, Math.random()*100);
            setTimeout(() => {
                if(grupoHTimes[1].time == 'Benfica'){
                    dispatch(setTimesC({time: grupoHTimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoHTimes[1].time == 'Juventus'){
                        dispatch(setTimesC({time: grupoHTimes[1].time, oitavasIda: Math.floor(Math.random() * 4), oitavasVolta: Math.floor(Math.random() * 4)}))
                    }else if(grupoHTimes[1].time == 'Maccabi Haifa FC'){
                        dispatch(setTimesC({time: grupoHTimes[1].time, oitavasIda: Math.floor(Math.random() * 2), oitavasVolta: Math.floor(Math.random() * 2)}))
                    }else if(grupoHTimes[1].time == 'PSG'){
                        dispatch(setTimesC({time: grupoHTimes[1].time, oitavasIda: Math.floor(Math.random() * 5), oitavasVolta: Math.floor(Math.random() * 5)}))
                    }
            }, Math.random()*100);
            
        }
        
    }, [show.fimGClick])

    return (
        <C.Main>
    <ul>
    <li>
        <h2 style={{width: "150px"}}>Grupo H</h2>
                <p>J</p>
                <p style={{width: "50px", display: "flex", justifyContent: "center"}}>Gols</p>
                <p style={{width: "20px", display: "flex", justifyContent: "center"}}>SG</p>
                <p style={{paddingLeft: "10px"}}>P</p>
    </li>
    </ul>
    {grupoHTimes.map((item, index) => (
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