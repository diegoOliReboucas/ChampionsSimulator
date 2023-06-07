import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Dinamo',
  initialState: { 
    Nome: 'NK Dinamo Zagreb',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    DinamoRod1: 0,
    DinamoRod2: 0,
    DinamoRod3: 0,
    DinamoRod4: 0,
    DinamoRod5: 0,
    DinamoRod6: 0,
  },
  reducers: {
    DinamosetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    DinamosetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      DinamosetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      DinamosetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      DinamosetSG: (state, action) => {
        state.SG = action.payload
      },
      DinamoRod1: (state, action) => {
        state.DinamoRod1 = action.payload
      },
      DinamoRod2: (state, action) => {
        state.DinamoRod2 = action.payload
      },
      DinamoRod3: (state, action) => {
        state.DinamoRod3 = action.payload
      },
      DinamoRod4: (state, action) => {
        state.DinamoRod4 = action.payload
      },
      DinamoRod5: (state, action) => {
        state.DinamoRod5 = action.payload
      },
      DinamoRod6: (state, action) => {
        state.DinamoRod6 = action.payload
      },

  }
});

export const {DinamosetPontos, DinamosetJogos, DinamosetGolsPro, DinamosetGolsC, DinamosetSG, DinamoRod1, DinamoRod2, DinamoRod3, DinamoRod4, DinamoRod5, DinamoRod6} = slice.actions
export default slice.reducer