import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'BayernM',
  initialState: { 
    Nome: 'Bayern de Munique',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    BayernMRod1: 0,
    BayernMRod2: 0,
    BayernMRod3: 0,
    BayernMRod4: 0,
    BayernMRod5: 0,
    BayernMRod6: 0,
  },
  reducers: {
    BayernMsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    BayernMsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      BayernMsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      BayernMsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      BayernMsetSG: (state, action) => {
        state.SG = action.payload
      },
      BayernMRod1: (state, action) => {
        state.BayernMRod1 = action.payload
      },
      BayernMRod2: (state, action) => {
        state.BayernMRod2 = action.payload
      },
      BayernMRod3: (state, action) => {
        state.BayernMRod3 = action.payload
      },
      BayernMRod4: (state, action) => {
        state.BayernMRod4 = action.payload
      },
      BayernMRod5: (state, action) => {
        state.BayernMRod5 = action.payload
      },
      BayernMRod6: (state, action) => {
        state.BayernMRod6 = action.payload
      },

  }
});

export const {BayernMsetPontos, BayernMsetJogos, BayernMsetGolsPro, BayernMsetGolsC, BayernMsetSG, BayernMRod1, BayernMRod2, BayernMRod3, BayernMRod4, BayernMRod5, BayernMRod6} = slice.actions
export default slice.reducer