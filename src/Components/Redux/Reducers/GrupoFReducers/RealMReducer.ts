import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'RealM',
  initialState: { 
    Nome: 'Real Madrid',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    RealMRod1: 0,
    RealMRod2: 0,
    RealMRod3: 0,
    RealMRod4: 0,
    RealMRod5: 0,
    RealMRod6: 0,
  },
  reducers: {
    RealMsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    RealMsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      RealMsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      RealMsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      RealMsetSG: (state, action) => {
        state.SG = action.payload
      },
      RealMRod1: (state, action) => {
        state.RealMRod1 = action.payload
      },
      RealMRod2: (state, action) => {
        state.RealMRod2 = action.payload
      },
      RealMRod3: (state, action) => {
        state.RealMRod3 = action.payload
      },
      RealMRod4: (state, action) => {
        state.RealMRod4 = action.payload
      },
      RealMRod5: (state, action) => {
        state.RealMRod5 = action.payload
      },
      RealMRod6: (state, action) => {
        state.RealMRod6 = action.payload
      },

  }
});

export const {RealMsetPontos, RealMsetJogos, RealMsetGolsPro, RealMsetGolsC, RealMsetSG, RealMRod1, RealMRod2, RealMRod3, RealMRod4, RealMRod5, RealMRod6} = slice.actions
export default slice.reducer