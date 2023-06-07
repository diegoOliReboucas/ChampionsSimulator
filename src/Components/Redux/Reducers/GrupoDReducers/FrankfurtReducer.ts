import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Frankfurt',
  initialState: { 
    Nome: 'Eintracht Frankfurt',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    FrankfurtRod1: 0,
    FrankfurtRod2: 0,
    FrankfurtRod3: 0,
    FrankfurtRod4: 0,
    FrankfurtRod5: 0,
    FrankfurtRod6: 0,
  },
  reducers: {
    FrankfurtsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    FrankfurtsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      FrankfurtsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      FrankfurtsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      FrankfurtsetSG: (state, action) => {
        state.SG = action.payload
      },
      FrankfurtRod1: (state, action) => {
        state.FrankfurtRod1 = action.payload
      },
      FrankfurtRod2: (state, action) => {
        state.FrankfurtRod2 = action.payload
      },
      FrankfurtRod3: (state, action) => {
        state.FrankfurtRod3 = action.payload
      },
      FrankfurtRod4: (state, action) => {
        state.FrankfurtRod4 = action.payload
      },
      FrankfurtRod5: (state, action) => {
        state.FrankfurtRod5 = action.payload
      },
      FrankfurtRod6: (state, action) => {
        state.FrankfurtRod6 = action.payload
      },

  }
});

export const {FrankfurtsetPontos, FrankfurtsetJogos, FrankfurtsetGolsPro, FrankfurtsetGolsC, FrankfurtsetSG, FrankfurtRod1, FrankfurtRod2, FrankfurtRod3, FrankfurtRod4, FrankfurtRod5, FrankfurtRod6} = slice.actions
export default slice.reducer