import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Salzburg',
  initialState: { 
    Nome: 'RB Salzburg',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    SalzburgRod1: 0,
    SalzburgRod2: 0,
    SalzburgRod3: 0,
    SalzburgRod4: 0,
    SalzburgRod5: 0,
    SalzburgRod6: 0,
  },
  reducers: {
    SalzburgsetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    SalzburgsetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      SalzburgsetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      SalzburgsetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      SalzburgsetSG: (state, action) => {
        state.SG = action.payload
      },
      SalzburgRod1: (state, action) => {
        state.SalzburgRod1 = action.payload
      },
      SalzburgRod2: (state, action) => {
        state.SalzburgRod2 = action.payload
      },
      SalzburgRod3: (state, action) => {
        state.SalzburgRod3 = action.payload
      },
      SalzburgRod4: (state, action) => {
        state.SalzburgRod4 = action.payload
      },
      SalzburgRod5: (state, action) => {
        state.SalzburgRod5 = action.payload
      },
      SalzburgRod6: (state, action) => {
        state.SalzburgRod6 = action.payload
      },

  }
});

export const {SalzburgsetPontos, SalzburgsetJogos, SalzburgsetGolsPro, SalzburgsetGolsC, SalzburgsetSG, SalzburgRod1, SalzburgRod2, SalzburgRod3, SalzburgRod4, SalzburgRod5, SalzburgRod6} = slice.actions
export default slice.reducer