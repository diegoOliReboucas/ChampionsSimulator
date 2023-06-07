import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Sevilla',
  initialState: { 
    Nome: 'Sevilla',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    SevillaRod1: 0,
    SevillaRod2: 0,
    SevillaRod3: 0,
    SevillaRod4: 0,
    SevillaRod5: 0,
    SevillaRod6: 0,
  },
  reducers: {
    SevillasetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    SevillasetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      SevillasetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      SevillasetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      SevillasetSG: (state, action) => {
        state.SG = action.payload
      },
      SevillaRod1: (state, action) => {
        state.SevillaRod1 = action.payload
      },
      SevillaRod2: (state, action) => {
        state.SevillaRod2 = action.payload
      },
      SevillaRod3: (state, action) => {
        state.SevillaRod3 = action.payload
      },
      SevillaRod4: (state, action) => {
        state.SevillaRod4 = action.payload
      },
      SevillaRod5: (state, action) => {
        state.SevillaRod5 = action.payload
      },
      SevillaRod6: (state, action) => {
        state.SevillaRod6 = action.payload
      },

  }
});

export const {SevillasetPontos, SevillasetJogos, SevillasetGolsPro, SevillasetGolsC, SevillasetSG, SevillaRod1, SevillaRod2, SevillaRod3, SevillaRod4, SevillaRod5, SevillaRod6} = slice.actions
export default slice.reducer