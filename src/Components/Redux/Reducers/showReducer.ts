import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'show',
  initialState: {
    first: true, 
    second: false, 
    third: false, 
    fourth: false, 
    fifth: false, 
    sixth: false,
    rod1: true,
    rod2: false,
    rod3: false,
    rod4: false,
    rod5: false,
    rod6: false,
    fimG: false,
    fimGClick: 0,
    eliminatoriaTela: false,
    oitavasIda: false,
    oitavasVolta: false,
    oitavasTela: true,
    quartasIda: false,
    quartasVolta: false,
    quartasTela: false,
    semisIda: false,
    semisVolta: false,
    semisTela: false,
    final: false,
    finalTela: false
  },
  reducers: {
    setFirst: (state, action) => {
      state.first = action.payload
    },
    setSecond: (state, action) => {
        state.second = action.payload
      },
      setThird: (state, action) => {
        state.third = action.payload
      },
      setFourth: (state, action) => {
        state.fourth = action.payload
      },
      setFifth: (state, action) => {
        state.fifth = action.payload
      },
      setSixth: (state, action) => {
        state.sixth = action.payload
      },
      setRod1: (state, action) => {
        state.rod1 = action.payload
      },
      setRod2: (state, action) => {
        state.rod2 = action.payload
      },
      setRod3: (state, action) => {
        state.rod3 = action.payload
      },
      setRod4: (state, action) => {
        state.rod4 = action.payload
      },
      setRod5: (state, action) => {
        state.rod5 = action.payload
      },
      setRod6: (state, action) => {
        state.rod6 = action.payload
      },
      setFimG: (state, action) => {
        state.fimG = action.payload
      },
      setFimGClick: (state, action) => {
        state.fimGClick = action.payload
      },
      setElTela: (state, action) => {
        state.eliminatoriaTela = action.payload
      },
      setOitavasIda: (state, action) => {
        state.oitavasIda = action.payload
      },
      setOitavasVolta: (state, action) => {
        state.oitavasVolta = action.payload
      },
      setOitavasTela: (state, action) => {
        state.oitavasTela = action.payload
      },
      setQuartasIda: (state, action) => {
        state.quartasIda = action.payload
      },
      setQuartasVolta: (state, action) => {
        state.quartasVolta = action.payload
      },
      setQuartasTela: (state, action) => {
        state.quartasTela = action.payload
      },
      setSemisIda: (state, action) => {
        state.semisIda = action.payload
      },
      setSemisVolta: (state, action) => {
        state.semisVolta = action.payload
      },
      setSemisTela: (state, action) => {
        state.semisTela = action.payload
      },
      setFinal: (state, action) => {
        state.final = action.payload
      },
      setFinalTela: (state, action) => {
        state.finalTela = action.payload
      }
  }
});

export const {setFirst, setSecond, setThird, setFourth, setFifth, setSixth, setRod1, 
  setRod2, setRod3, setRod4, setRod5, setRod6, setFimG, setFimGClick, setElTela, 
  setOitavasIda, setOitavasVolta, setOitavasTela,setQuartasIda, setQuartasVolta,
   setQuartasTela, setSemisIda, setSemisVolta, setSemisTela, setFinal, setFinalTela} = slice.actions
export default slice.reducer